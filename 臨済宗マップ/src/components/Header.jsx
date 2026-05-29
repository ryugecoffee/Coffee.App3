import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.titleGroup}>
          <span className={styles.icon} aria-hidden="true">⛩</span>
          <div>
            <h1 className={styles.title}>鎌倉 臨済宗寺院マップ</h1>
            <p className={styles.subtitle}>Rinzai Zen Temples in Kamakura</p>
          </div>
        </div>

        <nav className={styles.nav} aria-label="メインナビゲーション">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
            }
          >
            🗺 マップ
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
            }
          >
            ☕ Dashboard
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
