import styles from './InfoCard.module.css'

/**
 * InfoCard — ダッシュボード用の再利用可能な情報カード
 *
 * @param {object} props
 * @param {string} props.title        - カードのタイトル
 * @param {string} props.summary      - 内容の要約テキスト
 * @param {string} [props.source]     - 情報ソース
 * @param {string} [props.publishedAt] - 公開日（YYYY-MM-DD）
 * @param {string} [props.badge]      - 右上に表示するバッジテキスト（例: ↑ 円安）
 * @param {string} [props.note]       - 補足メモ
 * @param {string} [props.accentColor] - アクセントカラー（CSS色文字列）
 * @param {string} [props.borderColor] - ボーダーカラー
 */
export default function InfoCard({
  title,
  summary,
  source,
  publishedAt,
  badge,
  note,
  accentColor,
  borderColor,
}) {
  return (
    <article
      className={styles.card}
      style={borderColor ? { borderLeftColor: borderColor } : undefined}
    >
      <div className={styles.cardHeader}>
        <h3
          className={styles.cardTitle}
          style={accentColor ? { color: accentColor } : undefined}
        >
          {title}
        </h3>
        {badge && (
          <span
            className={styles.badge}
            style={accentColor ? { color: accentColor, borderColor: borderColor } : undefined}
          >
            {badge}
          </span>
        )}
      </div>

      <p className={styles.summary}>{summary}</p>

      {note && <p className={styles.note}>📌 {note}</p>}

      <footer className={styles.cardFooter}>
        {source && <span className={styles.source}>{source}</span>}
        {publishedAt && <time className={styles.date}>{publishedAt}</time>}
      </footer>
    </article>
  )
}
