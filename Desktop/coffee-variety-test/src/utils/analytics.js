export function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, {
      app_name: "coffee_variety_test",
      ...params
    });
  }
}

export function trackPageView(language) {
  trackEvent("coffee_variety_test_page_view", {
    quiz_language: language,
    page_path: window.location.pathname,
    page_title: document.title
  });
}

export function trackStart(language) {
  trackEvent("coffee_variety_test_start", {
    quiz_language: language
  });
}

export function trackAnswer({ language, questionIndex, axis, direction, score }) {
  trackEvent("coffee_variety_test_answer", {
    quiz_language: language,
    question_index: questionIndex,
    axis,
    direction,
    score
  });
}

export function trackComplete(payload) {
  trackEvent("coffee_variety_test_complete", payload);
}

export function trackCopyResult({ language, resultKey, resultName }) {
  trackEvent("coffee_variety_test_copy_result", {
    quiz_language: language,
    result_key: resultKey,
    result_name: resultName
  });
}

export function trackRetry({ language, resultKey, resultName }) {
  trackEvent("coffee_variety_test_retry", {
    quiz_language: language,
    result_key: resultKey,
    result_name: resultName
  });
}

export function trackLanguageChange(language) {
  trackEvent("coffee_variety_test_language_change", {
    quiz_language: language
  });
}
