export const LANGUAGES = ["ja", "en", "es"];

export const LANGUAGE_LABELS = {
  ja: "日本語",
  en: "English",
  es: "Español"
};

export const AXES = {
  presence: {
    a: {
      ja: "静けさ",
      en: "Stillness",
      es: "Quietud"
    },
    b: {
      ja: "華やかさ",
      en: "Radiance",
      es: "Brillo"
    }
  },
  relation: {
    a: {
      ja: "調和",
      en: "Harmony",
      es: "Armonía"
    },
    b: {
      ja: "個性",
      en: "Individuality",
      es: "Individualidad"
    }
  },
  judgment: {
    a: {
      ja: "現実",
      en: "Practicality",
      es: "Practicidad"
    },
    b: {
      ja: "感性",
      en: "Sensitivity",
      es: "Sensibilidad"
    }
  },
  impression: {
    a: {
      ja: "深み",
      en: "Depth",
      es: "Profundidad"
    },
    b: {
      ja: "透明感",
      en: "Clarity",
      es: "Claridad"
    }
  }
};

export const UI_TEXT = {
  appName: {
    ja: "Coffee Variety Test",
    en: "Coffee Variety Test",
    es: "Coffee Variety Test"
  },
  title: {
    ja: "あなたを珈琲品種にたとえると？",
    en: "What coffee variety are you?",
    es: "¿Qué variedad de café eres?"
  },
  description: {
    ja: "あなたの性格や価値観を、16種類のコーヒー品種になぞらえて診断します。味の好みを当てる診断ではなく、品種が持つ個性を借りて、あなた自身の魅力を言葉にするための診断です。",
    en: "This test compares your personality and values to 16 coffee varieties. It does not guess your taste preference; it uses the character of coffee varieties to describe your own qualities in words.",
    es: "Este test compara tu personalidad y tus valores con 16 variedades de café. No intenta adivinar tus gustos; usa el carácter de cada variedad para describir tus cualidades con palabras."
  },
  start: {
    ja: "診断をはじめる",
    en: "Start the test",
    es: "Empezar el test"
  },
  progress: {
    ja: "質問",
    en: "Question",
    es: "Pregunta"
  },
  of: {
    ja: "/",
    en: "of",
    es: "de"
  },
  choose: {
    ja: "近いものを選んでください",
    en: "Choose the one that feels closer",
    es: "Elige la opción que sientas más cercana"
  },
  resultLabel: {
    ja: "あなたを珈琲品種にたとえると",
    en: "Your coffee variety is",
    es: "Tu variedad de café es"
  },
  varietyAbout: {
    ja: "品種について",
    en: "About this variety",
    es: "Sobre esta variedad"
  },
  keywords: {
    ja: "キーワード",
    en: "Keywords",
    es: "Palabras clave"
  },
  compatible: {
    ja: "相性のいい品種",
    en: "Compatible varieties",
    es: "Variedades compatibles"
  },
  copyResult: {
    ja: "結果をコピーする",
    en: "Copy result",
    es: "Copiar resultado"
  },
  copied: {
    ja: "コピーしました",
    en: "Copied",
    es: "Copiado"
  },
  retry: {
    ja: "もう一度診断する",
    en: "Try again",
    es: "Hacerlo de nuevo"
  },
  scoreTitle: {
    ja: "あなたの4軸",
    en: "Your four axes",
    es: "Tus cuatro ejes"
  },
  answers: [
    {
      value: 2,
      side: "a",
      ja: "Aに近い",
      en: "Closer to A",
      es: "Más cerca de A"
    },
    {
      value: 1,
      side: "a",
      ja: "ややAに近い",
      en: "Somewhat A",
      es: "Algo más A"
    },
    {
      value: 1,
      side: "b",
      ja: "ややBに近い",
      en: "Somewhat B",
      es: "Algo más B"
    },
    {
      value: 2,
      side: "b",
      ja: "Bに近い",
      en: "Closer to B",
      es: "Más cerca de B"
    }
  ]
};

export const QUESTIONS = [
  {
    axis: "presence",
    ja: {
      question: "初めての場所に行ったとき、あなたに近いのは？",
      a: "まず空気を観察して、少しずつ馴染む",
      b: "気になったものに自然と近づいていく"
    },
    en: {
      question: "When you go somewhere new, which feels closer to you?",
      a: "You first observe the atmosphere and ease in slowly",
      b: "You naturally move toward what catches your interest"
    },
    es: {
      question: "Cuando vas a un lugar nuevo, ¿qué se parece más a ti?",
      a: "Primero observas el ambiente y te adaptas poco a poco",
      b: "Te acercas naturalmente a lo que llama tu atención"
    }
  },
  {
    axis: "presence",
    ja: {
      question: "人から言われて嬉しいのは？",
      a: "落ち着く、安心する",
      b: "印象に残る、惹きつけられる"
    },
    en: {
      question: "Which compliment would make you happier?",
      a: "You make people feel calm and safe",
      b: "You leave an impression and draw people in"
    },
    es: {
      question: "¿Qué cumplido te haría más feliz?",
      a: "Transmites calma y seguridad",
      b: "Dejas una impresión y atraes a los demás"
    }
  },
  {
    axis: "presence",
    ja: {
      question: "自分の魅力が出やすいのは？",
      a: "静かに話しているとき",
      b: "何かを表現しているとき"
    },
    en: {
      question: "When does your charm come through most naturally?",
      a: "When you are speaking quietly",
      b: "When you are expressing something"
    },
    es: {
      question: "¿Cuándo se nota más naturalmente tu encanto?",
      a: "Cuando hablas con calma",
      b: "Cuando estás expresando algo"
    }
  },
  {
    axis: "presence",
    ja: {
      question: "惹かれる空間は？",
      a: "余白があり、静かで落ち着いた場所",
      b: "光や色があり、心が少し高まる場所"
    },
    en: {
      question: "What kind of space attracts you?",
      a: "A quiet, calm place with room to breathe",
      b: "A place with light, color, and a slight lift of feeling"
    },
    es: {
      question: "¿Qué tipo de espacio te atrae?",
      a: "Un lugar tranquilo, sereno y con espacio para respirar",
      b: "Un lugar con luz, color y una sensación que te eleva un poco"
    }
  },
  {
    axis: "relation",
    ja: {
      question: "何かを選ぶとき、大切にするのは？",
      a: "長く使えて、自然に馴染むこと",
      b: "少し変わっていて、自分らしさがあること"
    },
    en: {
      question: "When choosing something, what matters more?",
      a: "That it lasts and fits naturally into your life",
      b: "That it feels a little different and expresses who you are"
    },
    es: {
      question: "Cuando eliges algo, ¿qué valoras más?",
      a: "Que dure y encaje naturalmente en tu vida",
      b: "Que sea un poco diferente y exprese quién eres"
    }
  },
  {
    axis: "relation",
    ja: {
      question: "集団の中での自分に近いのは？",
      a: "場の空気を整える方",
      b: "自分の視点を出す方"
    },
    en: {
      question: "In a group, which role feels closer to you?",
      a: "You help balance the atmosphere",
      b: "You bring your own point of view"
    },
    es: {
      question: "En un grupo, ¿qué papel se parece más a ti?",
      a: "Ayudas a equilibrar el ambiente",
      b: "Aportas tu propio punto de vista"
    }
  },
  {
    axis: "relation",
    ja: {
      question: "心地よい人間関係は？",
      a: "無理なく自然に続いていく関係",
      b: "刺激や発見がある関係"
    },
    en: {
      question: "What kind of relationship feels comfortable to you?",
      a: "One that continues naturally without pressure",
      b: "One with stimulation and discovery"
    },
    es: {
      question: "¿Qué tipo de relación te resulta cómoda?",
      a: "Una que continúa naturalmente, sin presión",
      b: "Una con estímulo y descubrimiento"
    }
  },
  {
    axis: "relation",
    ja: {
      question: "自分らしさについて近いのは？",
      a: "周囲との関係の中で自然に出る",
      b: "周囲と違う部分にこそ出る"
    },
    en: {
      question: "Which feels closer to your sense of individuality?",
      a: "It appears naturally through your relationships with others",
      b: "It appears most clearly in what makes you different"
    },
    es: {
      question: "¿Qué se acerca más a tu idea de individualidad?",
      a: "Aparece naturalmente en tu relación con los demás",
      b: "Aparece con más claridad en lo que te hace diferente"
    }
  },
  {
    axis: "judgment",
    ja: {
      question: "物事を決めるとき、近いのは？",
      a: "理由や流れを整理してから決める",
      b: "言葉にしにくい直感を信じる"
    },
    en: {
      question: "When making decisions, which feels closer?",
      a: "You organize the reasons and flow before deciding",
      b: "You trust an intuition that is hard to put into words"
    },
    es: {
      question: "Al tomar decisiones, ¿qué se parece más a ti?",
      a: "Ordenas las razones y el proceso antes de decidir",
      b: "Confías en una intuición difícil de explicar"
    }
  },
  {
    axis: "judgment",
    ja: {
      question: "褒められて嬉しいのは？",
      a: "ちゃんとしている、信頼できる",
      b: "雰囲気がある、センスがいい"
    },
    en: {
      question: "Which compliment would make you happier?",
      a: "You are dependable and well put together",
      b: "You have atmosphere and good taste"
    },
    es: {
      question: "¿Qué cumplido te haría más feliz?",
      a: "Eres confiable y haces las cosas bien",
      b: "Tienes presencia y buen gusto"
    }
  },
  {
    axis: "judgment",
    ja: {
      question: "大切にしているものは？",
      a: "積み重ね、習慣、安定感",
      b: "感覚、余韻、美しさ"
    },
    en: {
      question: "What do you value more?",
      a: "Accumulation, habits, and stability",
      b: "Feeling, afterglow, and beauty"
    },
    es: {
      question: "¿Qué valoras más?",
      a: "La constancia, los hábitos y la estabilidad",
      b: "La sensación, la resonancia y la belleza"
    }
  },
  {
    axis: "judgment",
    ja: {
      question: "迷ったとき、最後に頼るのは？",
      a: "これまでの経験や確かな情報",
      b: "そのときの気配や自分の感覚"
    },
    en: {
      question: "When you are unsure, what do you rely on in the end?",
      a: "Past experience and reliable information",
      b: "The mood of the moment and your own senses"
    },
    es: {
      question: "Cuando dudas, ¿en qué terminas confiando?",
      a: "En la experiencia previa y la información confiable",
      b: "En la atmósfera del momento y tus propias sensaciones"
    }
  },
  {
    axis: "impression",
    ja: {
      question: "心に残るものは？",
      a: "深く、時間が経っても残るもの",
      b: "澄んでいて、すっと抜けるもの"
    },
    en: {
      question: "What stays with you?",
      a: "Something deep that remains over time",
      b: "Something clear that passes through cleanly"
    },
    es: {
      question: "¿Qué permanece en ti?",
      a: "Algo profundo que queda con el tiempo",
      b: "Algo claro que pasa con limpieza"
    }
  },
  {
    axis: "impression",
    ja: {
      question: "自分の印象に近いと思うのは？",
      a: "重心があり、落ち着いている",
      b: "軽やかで、抜け感がある"
    },
    en: {
      question: "Which impression feels closer to you?",
      a: "Grounded and calm",
      b: "Light, airy, and effortless"
    },
    es: {
      question: "¿Qué impresión se parece más a ti?",
      a: "Con centro, calma y estabilidad",
      b: "Ligera, aireada y natural"
    }
  },
  {
    axis: "impression",
    ja: {
      question: "好きな余韻は？",
      a: "ゆっくり長く残る余韻",
      b: "きれいに消えていく余韻"
    },
    en: {
      question: "What kind of afterglow do you like?",
      a: "One that lingers slowly and deeply",
      b: "One that fades cleanly and beautifully"
    },
    es: {
      question: "¿Qué tipo de final te gusta?",
      a: "Uno que permanece lentamente y con profundidad",
      b: "Uno que desaparece con limpieza y belleza"
    }
  },
  {
    axis: "impression",
    ja: {
      question: "惹かれる美しさは？",
      a: "陰影や奥行きのある美しさ",
      b: "透明で澄んだ美しさ"
    },
    en: {
      question: "What kind of beauty attracts you?",
      a: "Beauty with shadow and depth",
      b: "Beauty that is transparent and clear"
    },
    es: {
      question: "¿Qué tipo de belleza te atrae?",
      a: "Una belleza con sombra y profundidad",
      b: "Una belleza transparente y clara"
    }
  }
];

export const RESULT_MAP = {
  AAAA: "typica",
  AAAB: "caturra",
  AABA: "java",
  AABB: "variety74158",
  ABAA: "tabi",
  ABAB: "villaSarchi",
  ABBA: "sidra",
  ABBB: "eugenioides",
  BAAA: "bourbon",
  BAAB: "catuai",
  BABA: "sl34",
  BABB: "pinkBourbon",
  BBAA: "pacamara",
  BBAB: "sl28",
  BBBA: "libericaExcelsa",
  BBBB: "gesha"
};

export const RESULTS = {
  typica: {
    name: "Typica",
    title: {
      ja: "静かに信頼を育てる人",
      en: "The quiet builder of trust",
      es: "La persona que cultiva confianza en silencio"
    },
    personality: {
      ja: "あなたはTypicaのように、静けさと調和を大切にしながら、確かな積み重ねで周囲に安心感を与える人です。強く主張しなくても、そこにいるだけで場が落ち着きます。派手さよりも誠実さ、瞬間的な刺激よりも長く残る信頼を選ぶタイプです。",
      en: "You are like Typica: calm, harmonious, and quietly dependable. You do not need to speak loudly to make a place feel steady. Rather than chasing flashiness, you value sincerity, continuity, and trust that remains over time.",
      es: "Eres como Typica: una persona serena, armoniosa y silenciosamente confiable. No necesitas imponerte para dar estabilidad a un lugar. Más que lo llamativo, valoras la sinceridad, la continuidad y la confianza que permanece con el tiempo."
    },
    variety: {
      ja: "Typicaはアラビカの古典的な品種のひとつ。穏やかで均整の取れた印象があり、コーヒー品種の基礎のような存在です。",
      en: "Typica is one of the classic Arabica varieties. It is often associated with balance, softness, and a foundational elegance.",
      es: "Typica es una de las variedades clásicas de Arábica. Suele asociarse con equilibrio, suavidad y una elegancia fundamental."
    },
    keywords: {
      ja: ["静穏", "信頼", "余白", "均整"],
      en: ["Calm", "Trust", "Space", "Balance"],
      es: ["Calma", "Confianza", "Espacio", "Equilibrio"]
    },
    compatible: ["Caturra", "Bourbon", "Java"]
  },
  caturra: {
    name: "Caturra",
    title: {
      ja: "親しみやすく澄んだ現実派",
      en: "The approachable realist with clarity",
      es: "La persona realista, cercana y clara"
    },
    personality: {
      ja: "あなたはCaturraのように、落ち着きと親しみやすさを持ちながら、物事を明るく整理できる人です。無理に目立とうとはしませんが、軽やかな透明感があります。安定した判断力と、周囲に自然と馴染む柔らかさが魅力です。",
      en: "You are like Caturra: calm, approachable, and able to organize things with a clear lightness. You do not try to stand out forcefully, yet you carry a clean and refreshing presence. Your charm lies in stable judgment and natural ease.",
      es: "Eres como Caturra: una persona tranquila, cercana y capaz de ordenar las cosas con claridad. No intentas destacar a la fuerza, pero tienes una presencia limpia y ligera. Tu encanto está en tu juicio estable y tu naturalidad."
    },
    variety: {
      ja: "CaturraはBourbonの突然変異から生まれた品種。コンパクトで扱いやすく、明るい酸や親しみやすさを感じさせることがあります。",
      en: "Caturra is a natural mutation of Bourbon. It is compact, approachable, and often associated with brightness and accessibility.",
      es: "Caturra es una mutación natural de Bourbon. Es compacta, cercana y suele asociarse con brillo y accesibilidad."
    },
    keywords: {
      ja: ["親しみ", "透明感", "安定", "軽やかさ"],
      en: ["Approachable", "Clear", "Stable", "Light"],
      es: ["Cercanía", "Claridad", "Estabilidad", "Ligereza"]
    },
    compatible: ["Typica", "Catuai", "Villa Sarchi"]
  },
  java: {
    name: "Java",
    title: {
      ja: "静かな感性を深く育てる人",
      en: "The quiet cultivator of deep sensitivity",
      es: "La persona que cultiva una sensibilidad profunda"
    },
    personality: {
      ja: "あなたはJavaのように、静かな佇まいの中に独自の感性を秘めている人です。表に出る言葉は多くなくても、内側では多くのことを感じ取っています。穏やかでありながら、時間が経つほど深みが伝わるタイプです。",
      en: "You are like Java: quiet on the outside, yet rich with sensitivity within. You may not use many words, but you notice and absorb more than people realize. Your depth becomes clearer with time.",
      es: "Eres como Java: tranquila por fuera, pero llena de sensibilidad por dentro. Tal vez no uses muchas palabras, pero percibes más de lo que otros imaginan. Tu profundidad se revela con el tiempo."
    },
    variety: {
      ja: "Javaはエチオピア由来の系統を持つとされる品種。穏やかさの中に繊細な個性があり、静かな奥行きを感じさせます。",
      en: "Java is a variety often linked to Ethiopian lineage. It can carry quiet depth, delicacy, and a distinctive inner character.",
      es: "Java es una variedad relacionada con linajes etíopes. Puede expresar profundidad tranquila, delicadeza y un carácter interior distintivo."
    },
    keywords: {
      ja: ["内省", "余韻", "繊細", "奥行き"],
      en: ["Reflection", "Afterglow", "Delicacy", "Depth"],
      es: ["Reflexión", "Resonancia", "Delicadeza", "Profundidad"]
    },
    compatible: ["Typica", "Sidra", "SL34"]
  },
  variety74158: {
    name: "74158",
    title: {
      ja: "静けさの中に澄んだ美意識を持つ人",
      en: "The clear aesthete within stillness",
      es: "La persona de estética clara y silenciosa"
    },
    personality: {
      ja: "あなたは74158のように、静かな空気をまといながら、澄んだ感性で世界を見ている人です。強い言葉よりも、微細な違いや美しい余韻に心が動きます。控えめでありながら、透明な印象が長く残るタイプです。",
      en: "You are like 74158: quiet in presence, yet guided by a clear and delicate sensitivity. Rather than strong statements, you are moved by subtle differences and beautiful afterglow. You remain understated, but your clarity lingers.",
      es: "Eres como 74158: de presencia tranquila, pero guiada por una sensibilidad clara y delicada. Más que las afirmaciones fuertes, te conmueven los matices y las resonancias bellas. Eres discreta, pero tu claridad permanece."
    },
    variety: {
      ja: "74158はエチオピア由来の選抜品種として知られます。繊細さや透明感のある印象で語られることが多い品種です。",
      en: "74158 is known as an Ethiopian selection. It is often described through delicacy, clarity, and refined expression.",
      es: "74158 es conocida como una selección etíope. Suele describirse por su delicadeza, claridad y expresión refinada."
    },
    keywords: {
      ja: ["透明感", "静けさ", "繊細", "余白"],
      en: ["Clarity", "Stillness", "Delicacy", "Space"],
      es: ["Claridad", "Quietud", "Delicadeza", "Espacio"]
    },
    compatible: ["Gesha", "Caturra", "Eugenioides"]
  },
  tabi: {
    name: "Tabi",
    title: {
      ja: "静かに自分の道を選ぶ人",
      en: "The quiet person who chooses their own path",
      es: "La persona tranquila que elige su propio camino"
    },
    personality: {
      ja: "あなたはTabiのように、落ち着いた現実感を持ちながら、自分だけの選び方を大切にする人です。周囲に流されすぎず、必要なことを見極めて進みます。派手ではないけれど、芯のある個性が伝わるタイプです。",
      en: "You are like Tabi: grounded and calm, yet careful to choose in your own way. You do not drift too easily with the crowd. Your individuality is not loud, but it has a clear backbone.",
      es: "Eres como Tabi: con los pies en la tierra y calma, pero cuidadosa al elegir tu propio camino. No te dejas llevar fácilmente por la corriente. Tu individualidad no es ruidosa, pero tiene una base firme."
    },
    variety: {
      ja: "TabiはTypica、Bourbon、Timor Hybridの系譜を持つコロンビアの品種。実用性と個性を併せ持つ印象があります。",
      en: "Tabi is a Colombian variety with Typica, Bourbon, and Timor Hybrid lineage. It suggests a mix of practicality and individuality.",
      es: "Tabi es una variedad colombiana con linaje de Typica, Bourbon y Timor Hybrid. Sugiere una mezcla de practicidad e individualidad."
    },
    keywords: {
      ja: ["芯", "選択", "現実感", "静かな個性"],
      en: ["Backbone", "Choice", "Grounding", "Quiet individuality"],
      es: ["Firmeza", "Elección", "Realismo", "Individualidad tranquila"]
    },
    compatible: ["Villa Sarchi", "Typica", "Pacamara"]
  },
  villaSarchi: {
    name: "Villa Sarchi",
    title: {
      ja: "小さくても凛とした存在感の人",
      en: "The small but dignified presence",
      es: "La presencia pequeña pero digna"
    },
    personality: {
      ja: "あなたはVilla Sarchiのように、控えめでありながら、自分らしい輪郭を持つ人です。大きく見せるよりも、自分に合うサイズで美しく立つことを大切にします。現実的な判断と、澄んだ個性が同居しています。",
      en: "You are like Villa Sarchi: modest in scale, yet clear in outline. Rather than making yourself look bigger, you stand beautifully at the size that fits you. Practical judgment and clean individuality coexist in you.",
      es: "Eres como Villa Sarchi: discreta en escala, pero con un contorno claro. Más que parecer más grande, sabes estar con belleza en el tamaño que te corresponde. En ti conviven el juicio práctico y una individualidad limpia."
    },
    variety: {
      ja: "Villa SarchiはBourbon系の小型変異種。コンパクトでありながら、はっきりした個性を感じさせる品種です。",
      en: "Villa Sarchi is a compact Bourbon mutation. It is small in form, yet carries a distinct and memorable character.",
      es: "Villa Sarchi es una mutación compacta de Bourbon. Es pequeña en forma, pero posee un carácter claro y memorable."
    },
    keywords: {
      ja: ["凛とした", "小さな個性", "透明感", "実直"],
      en: ["Dignified", "Compact character", "Clarity", "Sincere"],
      es: ["Dignidad", "Carácter compacto", "Claridad", "Sinceridad"]
    },
    compatible: ["Caturra", "Tabi", "SL28"]
  },
  sidra: {
    name: "Sidra",
    title: {
      ja: "静かな個性と深い美意識の人",
      en: "The quiet individualist with deep aesthetics",
      es: "La individualista tranquila de estética profunda"
    },
    personality: {
      ja: "あなたはSidraのように、穏やかな表情の奥に、はっきりとした美意識を持つ人です。周囲に合わせることもできますが、本当に大切な部分では自分の感覚を譲りません。静かなのに忘れられない深みがあります。",
      en: "You are like Sidra: gentle on the surface, yet guided by a distinct aesthetic sense. You can adapt to others, but you do not easily compromise what truly matters to you. You are quiet, but difficult to forget.",
      es: "Eres como Sidra: suave en la superficie, pero guiada por un sentido estético definido. Puedes adaptarte a los demás, pero no cedes fácilmente en lo que realmente importa. Eres tranquila, pero difícil de olvidar."
    },
    variety: {
      ja: "Sidraは近年注目される品種のひとつ。華美すぎない繊細さと複雑な印象で語られることがあります。",
      en: "Sidra is a variety that has gained attention in recent years. It is often associated with delicacy, complexity, and elegant individuality.",
      es: "Sidra es una variedad que ha recibido mucha atención en años recientes. Suele asociarse con delicadeza, complejidad e individualidad elegante."
    },
    keywords: {
      ja: ["美意識", "個性", "深み", "静かな余韻"],
      en: ["Aesthetics", "Individuality", "Depth", "Quiet afterglow"],
      es: ["Estética", "Individualidad", "Profundidad", "Resonancia tranquila"]
    },
    compatible: ["Java", "Eugenioides", "Gesha"]
  },
  eugenioides: {
    name: "Eugenioides",
    title: {
      ja: "繊細で透明な感性の人",
      en: "The delicate person of transparent sensitivity",
      es: "La persona delicada de sensibilidad transparente"
    },
    personality: {
      ja: "あなたはEugenioidesのように、静かで繊細、けれど他の人とは違う透明な感性を持つ人です。強い刺激よりも、小さな甘さや柔らかな違和感に心が動きます。説明しすぎない魅力を持つタイプです。",
      en: "You are like Eugenioides: quiet, delicate, and transparent in a way that feels unlike anyone else. You are moved less by strong impact and more by small sweetness, softness, and subtle strangeness. Your charm does not need overexplaining.",
      es: "Eres como Eugenioides: tranquila, delicada y transparente de una forma distinta a los demás. Más que los impactos fuertes, te conmueven la pequeña dulzura, la suavidad y las rarezas sutiles. Tu encanto no necesita demasiadas explicaciones."
    },
    variety: {
      ja: "Eugenioidesはアラビカの親にあたる種のひとつ。独特の甘さや柔らかさで知られ、希少で印象的な存在です。",
      en: "Eugenioides is one of Arabica’s parent species. It is known for distinctive sweetness, softness, and rarity.",
      es: "Eugenioides es una de las especies parentales de Arábica. Se conoce por su dulzura distintiva, suavidad y rareza."
    },
    keywords: {
      ja: ["繊細", "希少性", "透明感", "やわらかさ"],
      en: ["Delicate", "Rare", "Transparent", "Soft"],
      es: ["Delicadeza", "Rareza", "Transparencia", "Suavidad"]
    },
    compatible: ["74158", "Sidra", "Gesha"]
  },
  bourbon: {
    name: "Bourbon",
    title: {
      ja: "あたたかく場を照らす人",
      en: "The warm presence that lights the room",
      es: "La presencia cálida que ilumina el lugar"
    },
    personality: {
      ja: "あなたはBourbonのように、華やかさと調和を自然に両立できる人です。人の中にいると空気が少し明るくなり、安心感も生まれます。現実的で誠実なのに、どこか甘く人を惹きつける魅力があります。",
      en: "You are like Bourbon: warm, radiant, and naturally harmonious. When you are with people, the atmosphere becomes a little brighter and more comfortable. You are sincere and grounded, yet gently magnetic.",
      es: "Eres como Bourbon: cálida, brillante y naturalmente armoniosa. Cuando estás con otras personas, el ambiente se vuelve un poco más luminoso y cómodo. Eres sincera y realista, pero suavemente magnética."
    },
    variety: {
      ja: "Bourbonは代表的なアラビカ品種のひとつ。甘さ、丸み、親しみやすい華やかさで語られることが多い品種です。",
      en: "Bourbon is one of the major Arabica varieties. It is often associated with sweetness, roundness, and approachable radiance.",
      es: "Bourbon es una de las principales variedades de Arábica. Suele asociarse con dulzura, redondez y un brillo cercano."
    },
    keywords: {
      ja: ["温かさ", "調和", "甘さ", "信頼"],
      en: ["Warmth", "Harmony", "Sweetness", "Trust"],
      es: ["Calidez", "Armonía", "Dulzura", "Confianza"]
    },
    compatible: ["Typica", "Catuai", "Pink Bourbon"]
  },
  catuai: {
    name: "Catuai",
    title: {
      ja: "明るくしなやかなバランスの人",
      en: "The bright and flexible balancer",
      es: "La persona luminosa, flexible y equilibrada"
    },
    personality: {
      ja: "あなたはCatuaiのように、明るさと現実感のバランスが取れた人です。場を軽くする力がありながら、必要なことはきちんと整えられます。重くなりすぎず、でも頼りなさもない、しなやかな魅力があります。",
      en: "You are like Catuai: bright, flexible, and practically balanced. You can lighten the mood while still taking care of what needs to be done. You are neither too heavy nor too fragile; your strength is supple.",
      es: "Eres como Catuai: luminosa, flexible y equilibrada en lo práctico. Puedes aligerar el ambiente sin descuidar lo necesario. No eres demasiado pesada ni frágil; tu fuerza es flexible."
    },
    variety: {
      ja: "CatuaiはMundo NovoとCaturraを掛け合わせた品種。扱いやすさと明るい印象を併せ持つ存在です。",
      en: "Catuai is a cross between Mundo Novo and Caturra. It suggests practicality, brightness, and adaptability.",
      es: "Catuai es un cruce entre Mundo Novo y Caturra. Sugiere practicidad, brillo y adaptabilidad."
    },
    keywords: {
      ja: ["明るさ", "適応力", "実用性", "軽やかさ"],
      en: ["Brightness", "Adaptability", "Practicality", "Lightness"],
      es: ["Brillo", "Adaptabilidad", "Practicidad", "Ligereza"]
    },
    compatible: ["Bourbon", "Caturra", "SL28"]
  },
  sl34: {
    name: "SL34",
    title: {
      ja: "華やかさの奥に深い情緒を持つ人",
      en: "The radiant person with emotional depth",
      es: "La persona brillante con profundidad emocional"
    },
    personality: {
      ja: "あなたはSL34のように、人を惹きつける存在感と、深い感受性を併せ持つ人です。表面的な明るさだけではなく、言葉や表情の奥に余韻があります。華やかなのに軽すぎない、情緒のあるタイプです。",
      en: "You are like SL34: radiant, expressive, and emotionally deep. Your brightness is not superficial; there is afterglow behind your words and expressions. You attract attention, yet you are never merely light.",
      es: "Eres como SL34: brillante, expresiva y emocionalmente profunda. Tu brillo no es superficial; hay resonancia detrás de tus palabras y gestos. Atraes la atención, pero nunca eres solo ligera."
    },
    variety: {
      ja: "SL34はケニアで知られる品種のひとつ。力強い酸や複雑な余韻を感じさせることがあり、印象に残る品種です。",
      en: "SL34 is one of the well-known Kenyan selections. It can suggest strong acidity, complexity, and a memorable finish.",
      es: "SL34 es una de las selecciones kenianas más conocidas. Puede sugerir acidez intensa, complejidad y un final memorable."
    },
    keywords: {
      ja: ["情緒", "華やかさ", "余韻", "複雑さ"],
      en: ["Emotion", "Radiance", "Afterglow", "Complexity"],
      es: ["Emoción", "Brillo", "Resonancia", "Complejidad"]
    },
    compatible: ["Java", "Bourbon", "Pink Bourbon"]
  },
  pinkBourbon: {
    name: "Pink Bourbon",
    title: {
      ja: "明るく繊細な美意識の人",
      en: "The bright person with delicate aesthetics",
      es: "La persona luminosa de estética delicada"
    },
    personality: {
      ja: "あなたはPink Bourbonのように、華やかさと繊細さを同時に持つ人です。人を惹きつける明るさがありながら、感覚はとても細やかです。調和を大切にしつつ、美しい違和感をそっと残すタイプです。",
      en: "You are like Pink Bourbon: bright, delicate, and quietly refined. You have a radiance that draws people in, but your senses are subtle and precise. You value harmony while leaving behind a beautiful trace of difference.",
      es: "Eres como Pink Bourbon: luminosa, delicada y sutilmente refinada. Tienes un brillo que atrae a los demás, pero tus sentidos son finos y precisos. Valoras la armonía, dejando una hermosa huella de diferencia."
    },
    variety: {
      ja: "Pink Bourbonは美しい果実色と繊細な風味で注目される品種。華やかさと透明感を併せ持つ印象があります。",
      en: "Pink Bourbon is admired for its beautiful cherry color and delicate flavor expression. It often suggests radiance and clarity.",
      es: "Pink Bourbon es admirada por el color de sus cerezas y su expresión delicada. Suele sugerir brillo y claridad."
    },
    keywords: {
      ja: ["華やかさ", "繊細", "調和", "透明感"],
      en: ["Radiance", "Delicacy", "Harmony", "Clarity"],
      es: ["Brillo", "Delicadeza", "Armonía", "Claridad"]
    },
    compatible: ["Bourbon", "SL34", "Gesha"]
  },
  pacamara: {
    name: "Pacamara",
    title: {
      ja: "大きな存在感と確かな芯を持つ人",
      en: "The bold presence with a grounded core",
      es: "La presencia audaz con un centro firme"
    },
    personality: {
      ja: "あなたはPacamaraのように、はっきりとした存在感と現実的な強さを持つ人です。個性が大きく、初対面でも印象に残りやすいでしょう。ただ目立つだけではなく、自分の軸に基づいて選び取る力があります。",
      en: "You are like Pacamara: bold, memorable, and grounded. Your individuality has scale, and people are likely to remember you. But you are not merely noticeable; you choose from a firm inner axis.",
      es: "Eres como Pacamara: audaz, memorable y con los pies en la tierra. Tu individualidad tiene escala, y los demás suelen recordarte. Pero no solo llamas la atención; eliges desde un eje interno firme."
    },
    variety: {
      ja: "PacamaraはPacasとMaragogipeの交配品種。大粒で個性的な印象があり、存在感のあるコーヒーとして知られます。",
      en: "Pacamara is a cross between Pacas and Maragogipe. It is known for large beans, distinct character, and strong presence.",
      es: "Pacamara es un cruce entre Pacas y Maragogipe. Se conoce por sus granos grandes, carácter distintivo y fuerte presencia."
    },
    keywords: {
      ja: ["存在感", "芯", "個性", "力強さ"],
      en: ["Presence", "Core", "Individuality", "Strength"],
      es: ["Presencia", "Centro", "Individualidad", "Fuerza"]
    },
    compatible: ["Tabi", "SL28", "Liberica / Excelsa"]
  },
  sl28: {
    name: "SL28",
    title: {
      ja: "鮮やかでまっすぐな個性の人",
      en: "The vivid individualist with a clean line",
      es: "La individualista viva de línea clara"
    },
    personality: {
      ja: "あなたはSL28のように、鮮やかな印象とまっすぐな判断力を持つ人です。自分の視点を恐れずに出せる一方で、感情に流されすぎない透明感があります。個性的なのに、後味はきれいなタイプです。",
      en: "You are like SL28: vivid, individual, and clean in judgment. You are not afraid to show your point of view, yet you do not become overly heavy. Your character is distinct, but your finish is clear.",
      es: "Eres como SL28: viva, individual y clara en tu juicio. No temes mostrar tu punto de vista, pero no te vuelves demasiado pesada. Tu carácter es definido, pero tu final es limpio."
    },
    variety: {
      ja: "SL28はケニアを代表する品種のひとつ。鮮やかな酸、明るさ、透明感のある印象で知られています。",
      en: "SL28 is one of Kenya’s iconic selections. It is known for vivid acidity, brightness, and clarity.",
      es: "SL28 es una de las selecciones icónicas de Kenia. Se conoce por su acidez viva, brillo y claridad."
    },
    keywords: {
      ja: ["鮮やか", "個性", "透明感", "判断力"],
      en: ["Vivid", "Individual", "Clear", "Judgment"],
      es: ["Viveza", "Individualidad", "Claridad", "Juicio"]
    },
    compatible: ["Villa Sarchi", "Catuai", "Pacamara"]
  },
  libericaExcelsa: {
    name: "Liberica / Excelsa",
    title: {
      ja: "一度会うと忘れられない感性の人",
      en: "The unforgettable person of singular sensitivity",
      es: "La persona inolvidable de sensibilidad singular"
    },
    personality: {
      ja: "あなたはLiberica / Excelsaのように、強い個性と深い感性を持つ人です。一般的な枠に収まるより、自分だけの空気をつくる方が自然です。少し不思議で、奥行きがあり、一度触れると忘れにくいタイプです。",
      en: "You are like Liberica / Excelsa: deeply individual, sensitive, and hard to categorize. Rather than fitting into ordinary frames, you naturally create your own atmosphere. You may feel slightly mysterious, but that is exactly what makes you unforgettable.",
      es: "Eres como Liberica / Excelsa: profundamente individual, sensible y difícil de clasificar. Más que encajar en marcos comunes, creas naturalmente tu propia atmósfera. Puedes parecer algo misteriosa, y eso es precisamente lo que te hace inolvidable."
    },
    variety: {
      ja: "LibericaやExcelsaはアラビカとは異なる個性を持つ種・系統。独特の香りや野性味で、強く記憶に残る存在です。",
      en: "Liberica and Excelsa have characters distinct from Arabica. They are known for unusual aromas, wildness, and memorable presence.",
      es: "Liberica y Excelsa tienen caracteres distintos de Arábica. Se conocen por aromas inusuales, un aire salvaje y una presencia memorable."
    },
    keywords: {
      ja: ["唯一性", "野性味", "深い感性", "記憶に残る"],
      en: ["Singular", "Wild", "Deep sensitivity", "Memorable"],
      es: ["Singularidad", "Carácter salvaje", "Sensibilidad profunda", "Memorable"]
    },
    compatible: ["Pacamara", "Sidra", "Gesha"]
  },
  gesha: {
    name: "Gesha",
    title: {
      ja: "静かな華やかさと繊細な美意識の人",
      en: "The quiet radiance of refined sensitivity",
      es: "El brillo silencioso de una sensibilidad refinada"
    },
    personality: {
      ja: "あなたはGeshaのように、華やかでありながら騒がしくない、繊細な美意識を持つ人です。感覚が澄んでいて、小さな違いや余韻を美しく受け取れます。人を惹きつける力がありますが、それは強さではなく透明な気配として伝わります。",
      en: "You are like Gesha: radiant, yet never noisy; delicate, yet unforgettable. Your senses are clear, and you receive small differences and afterglow beautifully. You attract people not through force, but through a transparent presence.",
      es: "Eres como Gesha: brillante, pero nunca ruidosa; delicada, pero inolvidable. Tus sentidos son claros y percibes con belleza los pequeños matices y las resonancias. Atraes a los demás no por fuerza, sino por una presencia transparente."
    },
    variety: {
      ja: "Geshaは華やかな香りと透明感で世界的に知られる品種。繊細で複雑、特別な存在感を持つコーヒーとして語られます。",
      en: "Gesha is globally known for floral aromatics, clarity, and elegance. It is often described as delicate, complex, and exceptional.",
      es: "Gesha es conocida mundialmente por sus aromas florales, claridad y elegancia. Suele describirse como delicada, compleja y excepcional."
    },
    keywords: {
      ja: ["華やかさ", "透明感", "繊細", "美意識"],
      en: ["Radiance", "Clarity", "Delicacy", "Aesthetics"],
      es: ["Brillo", "Claridad", "Delicadeza", "Estética"]
    },
    compatible: ["74158", "Eugenioides", "Pink Bourbon"]
  }
};