import { Routes, Route, Navigate } from 'react-router-dom'
import PageSwitcher from './components/PageSwitcher'
import Neural from './pages/Neural'
import Velvet from './pages/Velvet'
import NeonCortex from './pages/NeonCortex'
import Bloom from './pages/Bloom'
import Cosmos from './pages/Cosmos'

const pages = [
  { path: '/1', name: 'Neural', component: Neural },
  { path: '/2', name: 'Velvet', component: Velvet },
  { path: '/3', name: 'Neon Cortex', component: NeonCortex },
  { path: '/4', name: 'Bloom', component: Bloom },
  { path: '/5', name: 'Cosmos', component: Cosmos },
]

export default function App() {
  return (
    <>
      <PageSwitcher pages={pages} />
      <Routes>
        <Route path="/" element={<Navigate to="/1" replace />} />
        {pages.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </>
  )
}
