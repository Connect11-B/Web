import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound.jsx'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<div>홈페이지</div>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
