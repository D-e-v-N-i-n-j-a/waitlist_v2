import { useState } from 'react'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Landing from './pages/Landing'
import NotFoundPage from './pages/NotFoundPage'
import { ToastContainer, } from 'react-toastify';
import routes from './routes/routes';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {

  return (
    <Router>
    <div>
      <Header /> 
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  </Router>
  )
}

export default App
