import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import MapView from './components/MapView'
import TempleCard from './components/TempleCard'
import DashboardPage from './pages/DashboardPage'
import { temples } from './data/temples'
import styles from './App.module.css'

function MapPage() {
  const [selectedTemple, setSelectedTemple] = useState(null)

  function handleSelectTemple(temple) {
    setSelectedTemple(prev => (prev?.id === temple.id ? null : temple))
  }

  return (
    <div className={styles.body}>
      {/* 地図エリア */}
      <div className={styles.mapArea}>
        <MapView
          temples={temples}
          selectedTemple={selectedTemple}
          onSelectTemple={handleSelectTemple}
        />
      </div>

      {/* サイドバー（寺院リスト） */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <p className={styles.sidebarTitle}>寺院一覧</p>
          <p className={styles.sidebarHint}>タップで詳細表示・地図フォーカス</p>
        </div>
        <ul className={styles.templeList}>
          {temples.map(temple => (
            <li key={temple.id}>
              <TempleCard
                temple={temple}
                isSelected={selectedTemple?.id === temple.id}
                onClick={() => handleSelectTemple(temple)}
              />
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}

export default function App() {
  return (
    <div className={styles.layout}>
      <Header />

      <Routes>
        <Route path="/" element={<MapPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </div>
  )
}
