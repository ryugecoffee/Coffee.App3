import { useEffect, useMemo, useState } from "react";
import {
  AXES,
  LANGUAGE_LABELS,
  LANGUAGES,
  QUESTIONS,
  RESULT_MAP,
  RESULTS,
  UI_TEXT
} from "./data/coffeeVarietyQuiz";
import {
  trackAnswer,
  trackComplete,
  trackCopyResult,
  trackLanguageChange,
  trackPageView,
  trackRetry,
  trackStart,
} from "./utils/analytics";

const STORAGE_KEY = "quiz-lang";

const INITIAL_SCORES = {
  presence: { a: 0, b: 0 },
  relation: { a: 0, b: 0 },
  judgment: { a: 0, b: 0 },
  impression: { a: 0, b: 0 }
};

const AXIS_ORDER = ["presence", "relation", "judgment", "impression"];

const EXTRA_TEXT = {
  previous: {
    ja: "前の設問に戻る",
    en: "Back to previous question",
    es: "Volver a la pregunta anterior"
  },
  changeAnswerHint: {
    ja: "戻って回答を変更できます",
    en: "You can go back and change your answer",
    es: "Puedes volver y cambiar tu respuesta"
  },
  nearbyVarieties: {
    ja: "近い空気の品種",
    en: "Varieties with a similar vibe",
    es: "Variedades con un aire similar"
  },
  chartCaption: {
    ja: "選ばれた側の強さ",
    en: "Strength of each selected side",
    es: "Intensidad de cada lado elegido"
  },
  chartNote: {
    ja: "数値が高いほど、その傾向がはっきりしています。",
    en: "A higher number means that tendency is more clearly expressed.",
    es: "Cuanto más alto sea el valor, más claramente aparece esa tendencia."
  },
    allVarieties: {
    ja: "他の診断結果",
    en: "Other possible results",
    es: "Otros resultados posibles"
  },
  allVarietiesNote: {
    ja: "診断では、16種類のコーヒー品種にたとえて性格を表現しています。",
    en: "This test describes personalities through 16 coffee varieties.",
    es: "Este test describe personalidades a través de 16 variedades de café."
  }
};

function getInitialLanguage() {
  if (typeof window === "undefined") return "ja";

  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (LANGUAGES.includes(saved)) return saved;

  const browserLang = window.navigator.language.slice(0, 2);
  if (LANGUAGES.includes(browserLang)) return browserLang;

  return "ja";
}

function cloneInitialScores() {
  return {
    presence: { ...INITIAL_SCORES.presence },
    relation: { ...INITIAL_SCORES.relation },
    judgment: { ...INITIAL_SCORES.judgment },
    impression: { ...INITIAL_SCORES.impression }
  };
}

function createEmptyAnswers() {
  return Array(QUESTIONS.length).fill(null);
}

function calculateScores(answers) {
  const nextScores = cloneInitialScores();

  answers.forEach((answer, index) => {
    if (!answer) return;
    const axis = QUESTIONS[index].axis;
    nextScores[axis][answer.side] += answer.value;
  });

  return nextScores;
}

function getResultKey(scores) {
  return AXIS_ORDER.map((axis) => {
    return scores[axis].a >= scores[axis].b ? "A" : "B";
  }).join("");
}

function getAxisSide(scores, axis) {
  return scores[axis].a >= scores[axis].b ? "a" : "b";
}

function hammingDistance(a, b) {
  let count = 0;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) count += 1;
  }
  return count;
}

function getNearbyVarieties(currentKey, currentId) {
  return Object.entries(RESULT_MAP)
    .map(([key, id]) => ({
      key,
      id,
      distance: hammingDistance(currentKey, key)
    }))
    .filter((item) => item.id !== currentId)
    .sort((a, b) => a.distance - b.distance || a.key.localeCompare(b.key))
    .slice(0, 3)
    .map((item) => RESULTS[item.id]?.name)
    .filter(Boolean);
}

function getAxisChartData(scores, lang) {
  return AXIS_ORDER.map((axis) => {
    const selectedSide = getAxisSide(scores, axis);
    const selectedScore = scores[axis][selectedSide];
    const strength = Math.round((selectedScore / 8) * 100);

    return {
      axis,
      label: AXES[axis][selectedSide][lang],
      pairLabel: `${AXES[axis].a[lang]} / ${AXES[axis].b[lang]}`,
      strength,
      value: selectedScore / 8
    };
  });
}

function getShareText({ lang, result }) {
  const title = UI_TEXT.resultLabel[lang];
  const keywords = result.keywords[lang].join(" / ");

  if (lang === "ja") {
    return `${title}：${result.name}\n${result.title.ja}\n\n${result.personality.ja}\n\nキーワード：${keywords}\n#CoffeeVarietyTest`;
  }

  if (lang === "es") {
    return `${title}: ${result.name}\n${result.title.es}\n\n${result.personality.es}\n\nPalabras clave: ${keywords}\n#CoffeeVarietyTest`;
  }

  return `${title}: ${result.name}\n${result.title.en}\n\n${result.personality.en}\n\nKeywords: ${keywords}\n#CoffeeVarietyTest`;
}

function RadarChart({ items, lang }) {
  const size = 320;
  const center = 160;
  const radius = 96;
  const levels = [0.25, 0.5, 0.75, 1];

  const axisPoints = [
    { x: center, y: center - radius }, // top
    { x: center + radius, y: center }, // right
    { x: center, y: center + radius }, // bottom
    { x: center - radius, y: center } // left
  ];

  function scalePoint(point, scale) {
    return {
      x: center + (point.x - center) * scale,
      y: center + (point.y - center) * scale
    };
  }

  function pointsToString(points) {
    return points.map((point) => `${point.x},${point.y}`).join(" ");
  }

  const gridPolygons = levels.map((level) =>
    pointsToString(axisPoints.map((point) => scalePoint(point, level)))
  );

  const dataPolygon = pointsToString(
    items.map((item, index) => scalePoint(axisPoints[index], item.value))
  );

  const labelPositions = axisPoints.map((point) => {
    const scale = (radius + 42) / radius;
    return scalePoint(point, scale);
  });

  function getTextAnchor(index) {
    if (index === 1) return "start";
    if (index === 3) return "end";
    return "middle";
  }

  function getLabelY(index, baseY) {
    if (index === 0) return baseY - 4;
    if (index === 2) return baseY + 4;
    return baseY;
  }

  function getSubLabelY(index, baseY) {
    if (index === 0) return baseY + 12;
    if (index === 2) return baseY + 18;
    return baseY + 14;
  }

  return (
    <div className="radar-wrap">
      <p className="chart-caption">{EXTRA_TEXT.chartCaption[lang]}</p>

      <svg
        className="radar-svg"
        viewBox={`0 0 ${size} ${size}`}
        role="img"
        aria-label="Radar chart"
      >
        {gridPolygons.map((polygon, index) => (
          <polygon
            key={`grid-${index}`}
            points={polygon}
            className="radar-grid-line"
          />
        ))}

        {axisPoints.map((point, index) => (
          <line
            key={`axis-${index}`}
            x1={center}
            y1={center}
            x2={point.x}
            y2={point.y}
            className="radar-axis-line"
          />
        ))}

        <polygon points={dataPolygon} className="radar-area" />

        {items.map((item, index) => {
          const point = scalePoint(axisPoints[index], item.value);
          return (
            <circle
              key={`point-${item.axis}`}
              cx={point.x}
              cy={point.y}
              r="4"
              className="radar-point"
            />
          );
        })}

        {items.map((item, index) => {
          const labelPoint = labelPositions[index];
          return (
            <g key={`label-${item.axis}`}>
              <text
                x={labelPoint.x}
                y={getLabelY(index, labelPoint.y)}
                textAnchor={getTextAnchor(index)}
                className="radar-label"
              >
                {item.label}
              </text>
              <text
                x={labelPoint.x}
                y={getSubLabelY(index, labelPoint.y)}
                textAnchor={getTextAnchor(index)}
                className="radar-sub"
              >
                {item.strength}%
              </text>
            </g>
          );
        })}
      </svg>

      <p className="chart-note">{EXTRA_TEXT.chartNote[lang]}</p>

      <div className="axis-strength-grid">
        {items.map((item) => (
          <div key={item.axis} className="axis-card">
            <div className="axis-card-header">
              <span>{item.pairLabel}</span>
              <span>{item.strength}%</span>
            </div>

            <strong>{item.label}</strong>

            <div className="axis-bar">
              <div
                className="axis-bar-fill"
                style={{ width: `${item.strength}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState(getInitialLanguage);
  const [screen, setScreen] = useState("home");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(createEmptyAnswers);
  const [copied, setCopied] = useState(false);

  const scores = useMemo(() => calculateScores(answers), [answers]);
  const resultKey = useMemo(() => getResultKey(scores), [scores]);
  const resultId = RESULT_MAP[resultKey];
  const result = RESULTS[resultId];

  const axisChartData = useMemo(
    () => getAxisChartData(scores, lang),
    [scores, lang]
  );

  const nearbyVarieties = useMemo(
    () => getNearbyVarieties(resultKey, resultId),
    [resultKey, resultId]
  );

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  useEffect(() => {
    trackPageView(lang);
  }, []);

 function handleLanguageChange(nextLang) {
  setLang(nextLang);
  trackLanguageChange(nextLang);
}

  function startQuiz() {
    setScreen("quiz");
    setQuestionIndex(0);
    setAnswers(createEmptyAnswers());
    setCopied(false);
    trackStart(lang);
  }

  function goToPreviousQuestion() {
    if (questionIndex === 0) return;
    setQuestionIndex((current) => current - 1);
    setCopied(false);
  }

  function answerQuestion(answer) {
    const nextAnswers = [...answers];
    nextAnswers[questionIndex] = answer;
    setAnswers(nextAnswers);

    const question = QUESTIONS[questionIndex];
    const axis = question.axis;

    trackAnswer({
      language: lang,
      questionIndex: questionIndex + 1,
      axis,
      direction: answer.side,
      score: answer.value
    });

    const isLastQuestion = questionIndex === QUESTIONS.length - 1;

    if (isLastQuestion) {
      const finalScores = calculateScores(nextAnswers);
      const finalKey = getResultKey(finalScores);
      const finalResultId = RESULT_MAP[finalKey];
      const finalResult = RESULTS[finalResultId];

      trackComplete({
        quiz_language: lang,
        result_key: finalKey,
        result_name: finalResult.name,
        presence: AXES.presence[getAxisSide(finalScores, "presence")].en,
        relation: AXES.relation[getAxisSide(finalScores, "relation")].en,
        judgment: AXES.judgment[getAxisSide(finalScores, "judgment")].en,
        impression: AXES.impression[getAxisSide(finalScores, "impression")].en,
        presence_a_score: finalScores.presence.a,
        presence_b_score: finalScores.presence.b,
        relation_a_score: finalScores.relation.a,
        relation_b_score: finalScores.relation.b,
        judgment_a_score: finalScores.judgment.a,
        judgment_b_score: finalScores.judgment.b,
        impression_a_score: finalScores.impression.a,
        impression_b_score: finalScores.impression.b
      });

      setScreen("result");
      return;
    }

    setQuestionIndex((current) => current + 1);
  }

  async function copyResult() {
    const text = getShareText({ lang, result });

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      setCopied(true);

      trackCopyResult({
        language: lang,
        resultKey,
        resultName: result.name
      });

      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  function retryQuiz() {
    trackRetry({
      language: lang,
      resultKey,
      resultName: result.name
    });

    setScreen("home");
    setQuestionIndex(0);
    setAnswers(createEmptyAnswers());
    setCopied(false);
  }

  const currentQuestion = QUESTIONS[questionIndex];
  const currentAnswer = answers[questionIndex];

  const progressPercent =
    screen === "quiz"
      ? ((questionIndex + 1) / QUESTIONS.length) * 100
      : 0;

  return (
    <main className="app-shell">
      <div className="grain" />

      <header className="top-bar">
        <div className="brand-mark">
          <span className="brand-dot" />
          <span>{UI_TEXT.appName[lang]}</span>
        </div>

        <div className="language-switcher" aria-label="Language selector">
          {LANGUAGES.map((language) => (
            <button
              key={language}
              type="button"
              className={language === lang ? "active" : ""}
              onClick={() => handleLanguageChange(language)}
            >
              {LANGUAGE_LABELS[language]}
            </button>
          ))}
        </div>
      </header>

      {screen === "home" && (
        <section className="hero-card fade-in">
          <p className="eyebrow">Personality × Coffee Variety</p>
          <h1 className="hero-title">
  {lang === "ja" ? (
    <>
      あなたを
      <br />
      珈琲品種に
      <br />
      <span className="no-break">たとえると？</span>
    </>
  ) : (
    UI_TEXT.title[lang]
  )}
</h1>
          <p className="hero-description">{UI_TEXT.description[lang]}</p>

          <button type="button" className="primary-button" onClick={startQuiz}>
            {UI_TEXT.start[lang]}
          </button>
        </section>
      )}

      {screen === "quiz" && (
        <section className="quiz-card fade-in">
          <div className="quiz-meta">
  <span>
    {UI_TEXT.progress[lang]} {questionIndex + 1} {UI_TEXT.of[lang]}{" "}
    {QUESTIONS.length}
  </span>
</div>

          <div className="progress-track" aria-hidden="true">
            <div
              className="progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <p className="quiz-guide">{UI_TEXT.choose[lang]}</p>

          <h2>{currentQuestion[lang].question}</h2>

          <div className="choice-pair">
            <div className="choice-text">
              <span>A</span>
              <p>{currentQuestion[lang].a}</p>
            </div>
            <div className="choice-text">
              <span>B</span>
              <p>{currentQuestion[lang].b}</p>
            </div>
          </div>

          <div className="answer-grid">
            {UI_TEXT.answers.map((answer, index) => {
              const isSelected =
                currentAnswer &&
                currentAnswer.side === answer.side &&
                currentAnswer.value === answer.value;

              return (
                <button
                  key={`${answer.side}-${answer.value}-${index}`}
                  type="button"
                  className={isSelected ? "selected" : ""}
                  onClick={() => answerQuestion(answer)}
                >
                  {answer[lang]}
                </button>
              );
            })}
          </div>

          <div className="quiz-nav">
            <button
              type="button"
              className="ghost-button"
              onClick={goToPreviousQuestion}
              disabled={questionIndex === 0}
            >
              {EXTRA_TEXT.previous[lang]}
            </button>

            <span className="quiz-nav-note">
              {EXTRA_TEXT.changeAnswerHint[lang]}
            </span>
          </div>
        </section>
      )}

      {screen === "result" && result && (
        <section className="result-card fade-in">
          <p className="eyebrow">{UI_TEXT.resultLabel[lang]}</p>
          <h1 className="result-name">{result.name}</h1>
          <h2 className="result-title">{result.title[lang]}</h2>

          <p className="result-body">{result.personality[lang]}</p>

          <div className="result-section">
            <h3>{UI_TEXT.varietyAbout[lang]}</h3>
            <p>{result.variety[lang]}</p>
          </div>

          <div className="result-section">
            <h3>{UI_TEXT.keywords[lang]}</h3>
            <div className="keyword-list">
              {result.keywords[lang].map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
          </div>

          <div className="result-section">
            <h3>{EXTRA_TEXT.nearbyVarieties[lang]}</h3>
            <p>{nearbyVarieties.join(" / ")}</p>
          </div>
<div className="result-section">
  <h3>{EXTRA_TEXT.allVarieties[lang]}</h3>
  <p className="all-varieties-note">{EXTRA_TEXT.allVarietiesNote[lang]}</p>

  <div className="all-varieties-grid">
    {Object.values(RESULTS).map((item) => (
      <div
        key={item.name}
        className={`variety-mini-card ${
          item.name === result.name ? "current" : ""
        }`}
      >
        <span>{item.name}</span>
        <p>{item.title[lang]}</p>
      </div>
    ))}
  </div>
</div>
          <div className="result-section">
            <h3>{UI_TEXT.scoreTitle[lang]}</h3>
            <RadarChart items={axisChartData} lang={lang} />
          </div>

          <div className="result-actions">
            <button type="button" className="primary-button" onClick={copyResult}>
              {copied ? UI_TEXT.copied[lang] : UI_TEXT.copyResult[lang]}
            </button>

            <button
              type="button"
              className="secondary-button"
              onClick={retryQuiz}
            >
              {UI_TEXT.retry[lang]}
            </button>
          </div>
        </section>
      )}
    </main>
  );
}