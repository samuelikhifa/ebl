// import { useState } from 'react';

const Footer = () => {




  return (
    <footer
      style={{
        background: '#0d1117',
        padding: 'clamp(3rem, 6vw, 4rem) 0 clamp(1.5rem, 3vw, 2rem)',
        borderTop: '1px solid rgba(0, 168, 232, 0.2)',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 clamp(1rem, 3vw, 2rem)',
        }}
      >
        {/* Main Footer Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
          }}
          className="footer-grid"
        >
          {/* Logo and Newsletter Section */}
          <div>
            <div style={{ marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}>
              <h3
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #00a8e8 0%, #5fc2b8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  margin: 0,
                }}
              >
                EBL MASTERCLASS
              </h3>
            </div>
          
            <p
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: 'clamp(0.875rem, 1.5vw, 0.9rem)',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: 1.6,
                textAlign: 'justify',
              }}
            >
              The EBL Masterclass is a student-focused initiative that brings together undergraduates and young professionals for practical learning in employability, business, and leadership.
            </p>

          </div>

          {/* About Column */}
          <div>
            <h4
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                fontWeight: 700,
                marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                background: 'linear-gradient(135deg, #00a8e8 0%, #5fc2b8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              About
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(0.5rem, 1vw, 0.75rem)',
              }}
            >
              {[
                { label: 'Our Story', path: '/OurStory' },
                { label: 'About the Conference', path: '/OurStory' },
                { label: 'Testimonials', path: '/OurStory' },
                { label: 'Contact Us', path: '/PartnerWithUs' },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    style={{
                      fontFamily: 'Roboto, sans-serif',
                      fontSize: 'clamp(0.875rem, 1.5vw, 0.95rem)',
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#00a8e8';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Participate Column */}
          <div>
            <h4
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                fontWeight: 700,
                marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                background: 'linear-gradient(135deg, #00a8e8 0%, #5fc2b8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Participate
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(0.5rem, 1vw, 0.75rem)',
              }}
            >
              {[
                { label: 'Book Your Ticket', path: '/BookTickets' },

                { label: 'Speaker Lineup', path: '/' },

              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    style={{
                      fontFamily: 'Roboto, sans-serif',
                      fontSize: 'clamp(0.875rem, 1.5vw, 0.95rem)',
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#00a8e8';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner With Us Column */}
          <div>
            <h4
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                fontWeight: 700,
                marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                background: 'linear-gradient(135deg, #00a8e8 0%, #5fc2b8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Partner
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(0.5rem, 1vw, 0.75rem)',
              }}
            >
              {[
                { label: 'Partnership Packages', path: '/PartnerWithUs' },
                { label: 'Sponsorship Opportunities', path: '/PartnerWithUs' },
                { label: 'Become a Sponsor', path: '/PartnerWithUs' },
                { label: 'Media Partnership', path: '/PartnerWithUs' },

              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    style={{
                      fontFamily: 'Roboto, sans-serif',
                      fontSize: 'clamp(0.875rem, 1.5vw, 0.95rem)',
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#00a8e8';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          style={{
            paddingTop: 'clamp(1.5rem, 3vw, 2rem)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 'clamp(1.5rem, 3vw, 2rem)',
            }}
            className="footer-bottom"
          >
            {/* Legal Links */}
            <div
              style={{
                display: 'flex',
                gap: 'clamp(1rem, 2vw, 2rem)',
                flexWrap: 'wrap',
              }}
            >
              {[
                { label: 'Privacy Policy', path: '#' },
                { label: 'Terms & Conditions', path: '#' },
                { label: 'Cookie Policy', path: '#' },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
                    color: 'rgba(255, 255, 255, 0.5)',
                    textDecoration: 'none',
                    transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#00a8e8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)';
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Social Media Links */}
            <div
              style={{
                display: 'flex',
                gap: 'clamp(0.75rem, 1.5vw, 1rem)',
              }}
            >
              {[
                {
                  icon: 'LinkedIn',
                  url: 'https://linkedin.com',
                  svg: (
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                      fill="currentColor"
                    />
                  ),
                },
                {
                  icon: 'Twitter',
                  url: 'https://twitter.com',
                  svg: (
                    <path
                      d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                      fill="currentColor"
                    />
                  ),
                },
                {
                  icon: 'Instagram',
                  url: 'https://instagram.com',
                  svg: (
                    <path
                      d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                      fill="currentColor"
                    />
                  ),
                },
                {
                  icon: 'Facebook',
                  url: 'https://facebook.com',
                  svg: (
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                      fill="currentColor"
                    />
                  ),
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.icon}
                  style={{
                    width: 'clamp(36px, 6vw, 40px)',
                    height: 'clamp(36px, 6vw, 40px)',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(0, 168, 232, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255, 255, 255, 0.7)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      'linear-gradient(135deg, #00a8e8 0%, #5fc2b8 100%)';
                    e.currentTarget.style.borderColor = '#00a8e8';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 168, 232, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(0, 168, 232, 0.3)';
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <svg
                    width="clamp(16px, 3vw, 20px)"
                    height="clamp(16px, 3vw, 20px)"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    {social.svg}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div
            style={{
              marginTop: 'clamp(1.5rem, 3vw, 2rem)',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
                color: 'rgba(255, 255, 255, 0.5)',
                margin: 0,
              }}
            >
              © {new Date().getFullYear()} EBL Masterclass 8.0. All rights reserved. Powered by JCIN UNIBEN.
            </p>
          </div>
        </div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start !important;
          }
        }

        @media (max-width: 480px) {
          .footer-bottom > div {
            width: 100%;
          }
        }

        /* iPhone 17 and small screens */
        @media (max-width: 430px) {
          .footer-grid {
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;