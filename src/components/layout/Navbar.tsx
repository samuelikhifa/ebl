import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ebllogo from '../../assets/ebllogo.webp';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/OurStory' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Navigation Bar */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: isScrolled ? '0.75rem 0' : '1.5rem 0',
          background: isScrolled 
            ? 'rgba(26, 31, 46, 0.95)' 
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none',
          borderBottom: 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: isScrolled ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 clamp(1rem, 3vw, 2rem)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'clamp(1rem, 3vw, 2rem)',
            }}
          >
            {/* Logo */}
            <Link
              to="/"
              onClick={handleLinkClick}
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
              <img
                src={ebllogo}
                alt="EBL Masterclass 8.0 Conference"
                style={{
                  height: 'clamp(80px, 12vw, 120px)',
                  width: 'auto',
                  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(1.5rem, 3vw, 2rem)',
              }}
              className="desktop-nav"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={handleLinkClick}
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 'clamp(0.95rem, 1.5vw, 1rem)',
                    fontWeight: 600,
                    color: '#ffffff',
                    textDecoration: 'none',
                    position: 'relative',
                    padding: '0.5rem 0',
                    transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#00a8e8';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(link.path)) {
                      e.currentTarget.style.color = '#ffffff';
                    }
                  }}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        background: 'linear-gradient(135deg, #00a8e8 0%, #5fc2b8 100%)',
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(0.75rem, 1.5vw, 1rem)',
              }}
              className="desktop-cta"
            >
              <Link
                to="/PartnerWithUs"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 'clamp(0.75rem, 1.5vw, 0.875rem) clamp(1.5rem, 3vw, 2rem)',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  border: '2px solid #00a8e8',
                  borderRadius: '9999px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  background: 'transparent',
                  color: '#ffffff',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#00a8e8';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                PARTNER WITH US
              </Link>

              <Link
                to="/BookTickets"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 'clamp(0.75rem, 1.5vw, 0.875rem) clamp(1.5rem, 3vw, 2rem)',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  border: 'none',
                  borderRadius: '9999px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  background: 'linear-gradient(135deg, #00a8e8 0%, #5fc2b8 100%)',
                  color: '#ffffff',
                  boxShadow: '0 0 20px rgba(0, 168, 232, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 168, 232, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 168, 232, 0.3)';
                }}
              >
                BOOK TICKETS
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
              }}
              className="mobile-menu-toggle"
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  width: '30px',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '3px',
                    background: '#ffffff',
                    borderRadius: '9999px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: isMobileMenuOpen ? 'rotate(45deg) translateY(9px)' : 'none',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                  }}
                />
                <span
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '3px',
                    background: '#ffffff',
                    borderRadius: '9999px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: isMobileMenuOpen ? 0 : 1,
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                  }}
                />
                <span
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '3px',
                    background: '#ffffff',
                    borderRadius: '9999px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-9px)' : 'none',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                  }}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          visibility: isMobileMenuOpen ? 'visible' : 'hidden',
        }}
        className="mobile-menu-container"
      >
        {/* Backdrop */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            background: 'rgba(0, 0, 0, 0.8)',
            transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '280px',
            maxWidth: '85vw',
            background: 'rgba(26, 31, 46, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            overflowY: 'auto',
          }}
        >
          <div style={{ padding: '2rem 1.5rem' }}>
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                padding: '0.5rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                cursor: 'pointer',
                color: '#ffffff',
                fontSize: '1.5rem',
                lineHeight: 1,
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ×
            </button>

            {/* Mobile Navigation Links */}
            <nav style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={handleLinkClick}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '1rem 1.5rem',
                    borderRadius: '1rem',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '1.125rem',
                    fontWeight: isActive(link.path) ? 600 : 500,
                    color: '#ffffff',
                    textDecoration: 'none',
                    background: isActive(link.path) 
                      ? 'rgba(0, 168, 232, 0.2)' 
                      : 'transparent',
                    border: isActive(link.path) 
                      ? '1px solid rgba(0, 168, 232, 0.3)' 
                      : '1px solid transparent',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(link.path)) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(link.path)) {
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile CTA Buttons */}
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link
                to="/PartnerWithUs"
                onClick={handleLinkClick}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '1rem',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '1rem',
                  fontWeight: 600,
                  textAlign: 'center',
                  textDecoration: 'none',
                  border: '2px solid #00a8e8',
                  borderRadius: '9999px',
                  background: 'transparent',
                  color: '#ffffff',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                PARTNER WITH US
              </Link>

              <Link
                to="/BookTickets"
                onClick={handleLinkClick}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '1rem',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '1rem',
                  fontWeight: 600,
                  textAlign: 'center',
                  textDecoration: 'none',
                  border: 'none',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #00a8e8 0%, #5fc2b8 100%)',
                  color: '#ffffff',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                BOOK TICKETS
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 1024px) {
          .desktop-cta a {
            padding: 0.75rem 1.5rem !important;
            font-size: 0.9rem !important;
          }
        }

        @media (max-width: 768px) {
          .desktop-nav,
          .desktop-cta {
            display: none !important;
          }
          
          .mobile-menu-toggle {
            display: block !important;
          }
        }

        @media (max-width: 480px) {
          nav {
            padding: 0.75rem 0 !important;
          }
          
          nav > div {
            padding: 0 1rem !important;
          }
          
          nav img {
            height: 70px !important;
            min-height: 70px !important;
          }
        }

        @media (max-width: 360px) {
          nav img {
            height: 90px !important;
            min-height: 60px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;