import { useState, useEffect, useCallback } from 'react'
import InfoCard from '../components/InfoCard'
import { CATEGORIES, CATEGORY_META } from '../data/dashboardMockData'
import { fetchAllDashboardData } from '../services/geminiService'
import styles from './DashboardPage.module.css'

const CATEGORY_KEYS = [
  CATEGORIES.COFFEE_NEWS,
  CATEGORIES.EXCHANGE_RATES,
  CATEGORIES.CAFE_TRENDS,
  CATEGORIES.AI_TOOLS,
  CATEGORIES.WORLD_AFFAIRS,
]

const DATA_KEY_MAP = {
  [CATEGORIES.COFFEE_NEWS]: 'coffeeNews',
  [CATEGORIES.EXCHANGE_RATES]: 'exchangeRates',
  [CATEGORIES.CAFE_TRENDS]: 'cafeTrends',
  [CATEGORIES.AI_TOOLS]: 'aiTools',
  [CATEGORIES.WORLD_AFFAIRS]: 'worldAffairs',
}

export default function DashboardPage() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lastUpdated, setLastUpdated] = useState(null)

  const loadData = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await fetchAllDashboardData()
      setData(result)
      setLastUpdated(new Date())
    } catch (err) {
      // TODO: 本番実装時はエラー種別に応じた詳細メッセージに置き換えてください
      setError('データの取得に失敗しました。しばらくしてから再度お試しください。')
      console.error('[DashboardPage] fetchAllDashboardData error:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadData()
  }, [loadData])

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderLeft}>
          <h2 className={styles.pageTitle}>
            <span className={styles.pageTitleIcon}>☕</span>
            Ryuge Command Center
          </h2>
          <p className={styles.pageSubtitle}>最新情報ダッシュボード</p>
        </div>
        <div className={styles.pageHeaderRight}>
          {lastUpdated && (
            <span className={styles.updatedAt}>
              最終更新: {lastUpdated.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}
            </span>
          )}
          <button
            className={styles.refreshButton}
            onClick={loadData}
            disabled={loading}
            aria-label="データを再取得"
          >
            {loading ? '読込中…' : '↻ 更新'}
          </button>
        </div>
      </div>

      {/* モックデータ使用中の注意バナー */}
      <div className={styles.mockBanner}>
        <span className={styles.mockBannerIcon}>⚠️</span>
        <span>
          現在はモックデータを表示しています。
          {/* TODO: APIキー設定後にこのバナーを削除してください */}
          Gemini API連携後はリアルタイムデータに切り替わります。
        </span>
      </div>

      {error && (
        <div className={styles.errorBanner}>
          <span>{error}</span>
          <button className={styles.retryButton} onClick={loadData}>再試行</button>
        </div>
      )}

      {loading && !data ? (
        <div className={styles.loadingGrid}>
          {CATEGORY_KEYS.map(key => (
            <div key={key} className={styles.skeletonSection}>
              <div className={styles.skeletonHeader} />
              <div className={styles.skeletonCard} />
              <div className={styles.skeletonCard} />
              <div className={styles.skeletonCard} />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.grid}>
          {CATEGORY_KEYS.map(categoryKey => {
            const meta = CATEGORY_META[categoryKey]
            const items = data?.[DATA_KEY_MAP[categoryKey]] ?? []

            return (
              <section
                key={categoryKey}
                className={styles.section}
                style={{ '--section-bg': meta.bgColor, '--section-border': meta.borderColor }}
              >
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionIcon} aria-hidden="true">
                    {meta.icon}
                  </span>
                  <h3
                    className={styles.sectionTitle}
                    style={{ color: meta.color }}
                  >
                    {meta.label}
                  </h3>
                  <span className={styles.itemCount}>{items.length}件</span>
                </div>

                <div className={styles.cardList}>
                  {items.length === 0 ? (
                    <p className={styles.emptyMessage}>データがありません</p>
                  ) : (
                    items.map(item => (
                      <InfoCard
                        key={item.id}
                        title={item.title}
                        summary={item.summary}
                        source={item.source}
                        publishedAt={item.publishedAt}
                        badge={item.badge}
                        note={item.note}
                        accentColor={meta.color}
                        borderColor={meta.borderColor}
                      />
                    ))
                  )}
                </div>
              </section>
            )
          })}
        </div>
      )}
    </div>
  )
}
