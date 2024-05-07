import { useState } from 'react'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Landing from './pages/Landing'
import NotFoundPage from './pages/NotFoundPage'
import { ToastContainer, } from 'react-toastify';
function App() {

  return (
    <Router>
      <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer/>
    </Router>
  )
}

export default App
