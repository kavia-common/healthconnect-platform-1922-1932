import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Providers from './pages/Providers';
import HealthInfo from './pages/HealthInfo';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';

/**
 * PUBLIC_INTERFACE
 * App
 * A modern healthcare platform shell using Ocean Professional theme.
 * Renders header with navigation, a sticky sidebar with quick links, and routed pages.
 */
function App() {
  return (
    <div className="app-shell" role="application" aria-label="HealthConnect Platform">
      <Header />
      <div className="main-wrap">
        <aside className="sidebar" aria-label="Quick Links Sidebar">
          <Sidebar />
        </aside>
        <main role="main" aria-live="polite">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/providers" element={<Providers />} />
            <Route path="/health-info" element={<HealthInfo />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

/**
 * PUBLIC_INTERFACE
 * Header
 * Responsive header with logo and navigation links.
 */
function Header() {
  return (
    <header className="header" role="banner">
      <div className="header-inner">
        <div className="logo" aria-label="HealthConnect Logo">
          <div className="logo-mark" aria-hidden="true">HC</div>
          HealthConnect
        </div>
        <nav className="nav" aria-label="Primary Navigation">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : undefined}>
            Home
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : undefined}>
            Services
          </NavLink>
          <NavLink to="/providers" className={({ isActive }) => isActive ? 'active' : undefined}>
            Providers
          </NavLink>
          <NavLink to="/health-info" className={({ isActive }) => isActive ? 'active' : undefined}>
            Health Info
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

/**
 * PUBLIC_INTERFACE
 * RootApp
 * Wraps BrowserRouter around App to ensure routes work from index.js cleanly.
 */
export function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default App;
