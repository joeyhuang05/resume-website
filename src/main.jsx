import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// page components & univeral css file
import './index.css'
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx'
import NavPage from './pages/NavPage/NavPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProfilePage />} />
        <Route path='/nav' element={<NavPage />} />

        <Route path='*' element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)