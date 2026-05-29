// ============================================================
// Gemini API サービス プレースホルダー
// ============================================================
// TODO: 以下のステップで実際のGemini API呼び出しに置き換えてください。
//
// 1. 環境変数を設定:
//    .env ファイルに以下を追加（GitHubにはコミットしないこと）
//    VITE_GEMINI_API_KEY=your_api_key_here
//    VITE_GEMINI_API_ENDPOINT=https://generativelanguage.googleapis.com/v1beta
//
// 2. 各関数内のモックデータ返却部分を実際のAPIコールに置き換え。
//    例:
//    const response = await fetch(
//      `${import.meta.env.VITE_GEMINI_API_ENDPOINT}/models/gemini-pro:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
//      {
//        method: 'POST',
//        headers: { 'Content-Type': 'application/json' },
//        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
//      }
//    )
//
// 3. レート制限・エラーハンドリングを追加。
// 4. 必要であればサーバーサイドプロキシ経由でAPIキーを隠蔽することを検討。
// ============================================================

import {
  coffeeNewsMock,
  exchangeRatesMock,
  cafeTrendsMock,
  aiToolsMock,
  worldAffairsMock,
} from '../data/dashboardMockData'

// 疑似的なネットワーク遅延（開発時のローディング確認用）
const MOCK_DELAY_MS = 600

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// --- コーヒー産地ニュース ---
export async function fetchCoffeeNews() {
  // TODO: Gemini APIで「最新のコーヒー産地ニュースを3件要約してください」のようなプロンプトに置き換え
  await delay(MOCK_DELAY_MS)
  return coffeeNewsMock
}

// --- 為替情報 ---
export async function fetchExchangeRates() {
  // TODO: 為替専用APIか、Gemini APIで最新レートを取得するプロンプトに置き換え
  // 注意: Gemini APIはリアルタイム為替データを持たないため、別途為替APIの利用を推奨
  await delay(MOCK_DELAY_MS)
  return exchangeRatesMock
}

// --- カフェ業界トレンド ---
export async function fetchCafeTrends() {
  // TODO: Gemini APIで「最新のカフェ業界トレンドを3件要約してください」のようなプロンプトに置き換え
  await delay(MOCK_DELAY_MS)
  return cafeTrendsMock
}

// --- AI新ツール情報 ---
export async function fetchAiTools() {
  // TODO: Gemini APIで「最新のAIツール情報を3件要約してください」のようなプロンプトに置き換え
  await delay(MOCK_DELAY_MS)
  return aiToolsMock
}

// --- 世界情勢 ---
export async function fetchWorldAffairs() {
  // TODO: Gemini APIで「カフェ・コーヒー業界に関連する最新の世界情勢を3件要約してください」のようなプロンプトに置き換え
  await delay(MOCK_DELAY_MS)
  return worldAffairsMock
}

// 全カテゴリを一括取得
export async function fetchAllDashboardData() {
  const [coffeeNews, exchangeRates, cafeTrends, aiTools, worldAffairs] =
    await Promise.all([
      fetchCoffeeNews(),
      fetchExchangeRates(),
      fetchCafeTrends(),
      fetchAiTools(),
      fetchWorldAffairs(),
    ])
  return { coffeeNews, exchangeRates, cafeTrends, aiTools, worldAffairs }
}
