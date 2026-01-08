// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Home from './pages/Home';
import OurStory from './pages/OurStory';
import PartnerWithUs from './pages/PartnerWithUs';
import BookTickets from './pages/BookTickets';
import './index.css';

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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OurStory" element={<OurStory />} />
        <Route path="/PartnerWithUs" element={<PartnerWithUs />} />
        <Route path="/BookTickets" element={<BookTickets />} />
        
        {/* <Route path="/partners" element={<div style={{ paddingTop: '120px', textAlign: 'center' }}>Partners Page Coming Soon</div>} /> */}
        
       
      </Routes>

      <Footer />
    </div>
  );
}

export default App;