import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/landingPage/LandingPage';
import { Footer } from './components/partials/footer/Footer';
import { Header } from './components/partials/header/Header';
import { Home } from './pages/home/Home';
import ReactDOM from 'react-dom/client';
import React from 'react';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/accueil" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
