import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<profilePage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
