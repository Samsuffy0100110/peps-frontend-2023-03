import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/landingPage/LandingPage'
import { Home } from './pages/home/Home'
import ReactDOM from 'react-dom/client'
import React from 'react'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/accueil" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
