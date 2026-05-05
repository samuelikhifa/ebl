// src/App.tsx
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const Home = lazy(() => import('./pages/Home'));
const OurStory = lazy(() => import('./pages/OurStory'));
const PartnerWithUs = lazy(() => import('./pages/PartnerWithUs'));
const BookTickets = lazy(() => import('./pages/BookTickets'));

function RouteFallback() {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Montserrat, sans-serif',
        color: 'rgba(255,255,255,0.75)',
        fontSize: 'clamp(0.9rem, 2vw, 1rem)',
        padding: '2rem',
      }}
    >
      Loading…
    </div>
  );
}

function App() {
  return (
    <div
      style={{
        fontFamily: 'Roboto, sans-serif',
        color: '#ffffff',
        backgroundColor: '#1a1f2e',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      <Navbar />

      <Suspense fallback={<RouteFallback />}>
        <main id="main-content" style={{ minHeight: '50vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OurStory" element={<OurStory />} />
          <Route path="/PartnerWithUs" element={<PartnerWithUs />} />
          <Route path="/BookTickets" element={<BookTickets />} />
        
        {/* <Route path="/partners" element={<div style={{ paddingTop: '120px', textAlign: 'center' }}>Partners Page Coming Soon</div>} /> */}
        
        </Routes>
        </main>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;