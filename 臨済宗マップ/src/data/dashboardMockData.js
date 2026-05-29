// ============================================================
// ダッシュボード モックデータ
// ============================================================
// TODO: 将来的にこのファイルの各カテゴリのデータを
//       Gemini API から取得するように置き換えてください。
//       API呼び出しの実装は src/services/geminiService.js を参照。
// ============================================================

export const CATEGORIES = {
  COFFEE_NEWS: 'coffeeNews',
  EXCHANGE_RATES: 'exchangeRates',
  CAFE_TRENDS: 'cafeTrends',
  AI_TOOLS: 'aiTools',
  WORLD_AFFAIRS: 'worldAffairs',
}

export const CATEGORY_META = {
  [CATEGORIES.COFFEE_NEWS]: {
    label: 'コーヒー産地ニュース',
    icon: '☕',
    color: '#6b3a2a',
    bgColor: '#fdf3ee',
    borderColor: '#e8c4a8',
  },
  [CATEGORIES.EXCHANGE_RATES]: {
    label: '為替情報',
    icon: '💱',
    color: '#1a4a7a',
    bgColor: '#eef4fd',
    borderColor: '#b8d4f0',
  },
  [CATEGORIES.CAFE_TRENDS]: {
    label: 'カフェ業界トレンド',
    icon: '📈',
    color: '#2a5a3a',
    bgColor: '#eef8f2',
    borderColor: '#a8dbb8',
  },
  [CATEGORIES.AI_TOOLS]: {
    label: 'AI新ツール情報',
    icon: '🤖',
    color: '#4a1a7a',
    bgColor: '#f5eeff',
    borderColor: '#d0a8f0',
  },
  [CATEGORIES.WORLD_AFFAIRS]: {
    label: '世界情勢',
    icon: '🌍',
    color: '#3a3a1a',
    bgColor: '#f8f8ee',
    borderColor: '#d0d0a8',
  },
}

// --- コーヒー産地ニュース ---
export const coffeeNewsMock = [
  {
    id: 'cn-1',
    title: 'エチオピア・イルガチェフェ 今期収穫量 好調の見通し',
    summary: '2025-26年の収穫シーズンに向け、イルガチェフェ地区では例年比10%増の生産量が期待されています。適度な降雨量と良好な気温が要因。',
    source: 'モックデータ',
    publishedAt: '2026-05-28',
  },
  {
    id: 'cn-2',
    title: 'コロンビア産 カフェ・デ・コロンビア認証 新基準発表',
    summary: '持続可能な農業慣行を重視した新たな品質認証基準が発表されました。生産農家への技術支援プログラムも同時に開始。',
    source: 'モックデータ',
    publishedAt: '2026-05-25',
  },
  {
    id: 'cn-3',
    title: 'ゲイシャ品種 パナマ競売 最高値更新の噂',
    summary: '今年のベスト・オブ・パナマ競売に向け、複数の農園から高品質ゲイシャが出品予定。昨年の記録更新が期待されています。',
    source: 'モックデータ',
    publishedAt: '2026-05-22',
  },
]

// --- 為替情報 ---
// TODO: 為替情報は特にリアルタイムAPIとの置き換えが重要です。
//       外部APIとして Open Exchange Rates や freecurrencyapi.com などを検討してください。
export const exchangeRatesMock = [
  {
    id: 'er-1',
    title: 'USD/JPY',
    summary: '¥149.82（前日比 -0.34）',
    source: 'モックデータ（更新日: 2026-05-29）',
    publishedAt: '2026-05-29',
    badge: '↓ 円高',
  },
  {
    id: 'er-2',
    title: 'EUR/JPY',
    summary: '¥163.15（前日比 +0.21）',
    source: 'モックデータ（更新日: 2026-05-29）',
    publishedAt: '2026-05-29',
    badge: '↑ 円安',
  },
  {
    id: 'er-3',
    title: 'BRL/JPY（ブラジルレアル）',
    summary: '¥29.47（前日比 -0.08）',
    source: 'モックデータ（更新日: 2026-05-29）',
    publishedAt: '2026-05-29',
    badge: '↓ 円高',
    note: 'コーヒー主要産地通貨',
  },
  {
    id: 'er-4',
    title: 'ETB/JPY（エチオピアブル）',
    summary: '¥0.82（前日比 ±0.00）',
    source: 'モックデータ（更新日: 2026-05-29）',
    publishedAt: '2026-05-29',
    note: 'コーヒー主要産地通貨',
  },
]

// --- カフェ業界トレンド ---
export const cafeTrendsMock = [
  {
    id: 'ct-1',
    title: 'ノンアルコール・コーヒーカクテル が Z世代に人気',
    summary: 'コールドブリューをベースにしたノンアルコールカクテルが若年層を中心に注目。バーとカフェの融合業態が増加傾向。',
    source: 'モックデータ',
    publishedAt: '2026-05-27',
  },
  {
    id: 'ct-2',
    title: 'サードウェーブ以降の「フォースウェーブ」とは',
    summary: '産地との直接取引・透明性・環境配慮を超え、コーヒーを通じたコミュニティ形成を重視する新潮流が注目されています。',
    source: 'モックデータ',
    publishedAt: '2026-05-24',
  },
  {
    id: 'ct-3',
    title: '国内スペシャルティカフェ 出店数 前年比15%増',
    summary: '2025年のスペシャルティコーヒー専門店の新規出店数が増加。地方都市への展開も顕著で、東京以外への分散が進んでいます。',
    source: 'モックデータ',
    publishedAt: '2026-05-20',
  },
]

// --- AI新ツール情報 ---
export const aiToolsMock = [
  {
    id: 'ai-1',
    title: 'Gemini 2.5 Pro リリース：マルチモーダル強化',
    summary: '画像・音声・テキストを統合的に処理する能力が大幅に向上。カフェメニューの写真から自動分析するプロトタイプも登場。',
    source: 'モックデータ',
    publishedAt: '2026-05-28',
  },
  {
    id: 'ai-2',
    title: 'AI在庫管理ツール「BrewFlow」が小規模カフェ向けに提供開始',
    summary: '売上予測とコーヒー豆の在庫自動発注を組み合わせたSaaSツール。月額プランで小規模店舗でも導入しやすい価格帯。',
    source: 'モックデータ',
    publishedAt: '2026-05-23',
  },
  {
    id: 'ai-3',
    title: 'Claude Code が複数エージェント協調機能を強化',
    summary: 'Anthropic がエージェント間の並列タスク実行と情報共有機能を強化。開発現場での生産性向上が期待されています。',
    source: 'モックデータ',
    publishedAt: '2026-05-21',
  },
]

// --- 世界情勢 ---
export const worldAffairsMock = [
  {
    id: 'wa-1',
    title: 'G7サミット 気候変動対策 合意文書を採択',
    summary: '2030年までのカーボンニュートラル目標に向けた具体的ロードマップが合意。コーヒー産業への影響も注目されています。',
    source: 'モックデータ',
    publishedAt: '2026-05-27',
  },
  {
    id: 'wa-2',
    title: 'アフリカ農業投資ファンド 過去最大規模の資金調達',
    summary: 'エチオピア・ケニア・タンザニアを中心とした農業インフラ整備への大規模投資が発表。コーヒー農家への支援拡大に期待。',
    source: 'モックデータ',
    publishedAt: '2026-05-25',
  },
  {
    id: 'wa-3',
    title: '国際コーヒー機関（ICO）年次報告 消費量拡大を予測',
    summary: '2026年のグローバルコーヒー消費量は過去最高を更新する見込み。アジア・太平洋地域の成長が特に顕著。',
    source: 'モックデータ',
    publishedAt: '2026-05-19',
  },
]
