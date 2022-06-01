import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home'
import Annonces from './pages/Annonces'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './pages/Error'
import APropos from './pages/A_Propos'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import './styles/Index.css'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="A-Propos" element={<APropos />} />
        <Route path="Annonces/:id" element={<Annonces />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
