// src/pages/BookTickets.tsx
import { useState, useEffect } from 'react';

const BookTickets = () => {
  const [showThankYou, setShowThankYou] = useState(false);
  const [userName, setUserName] = useState('');

  // Listen for form submission from iframe (if Google Form sends postMessage)
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Google Forms sends a message when submitted
      if (event.data === 'formSubmitted' || event.data.type === 'hsFormCallback') {
        setShowThankYou(true);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Alternative: Check URL params for confirmation
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('submitted') === 'true') {
      setShowThankYou(true);
      const name = urlParams.get('name') || 'Attendee';
      setUserName(name);
    }
  }, []);

  const closeThankYou = () => {
    setShowThankYou(false);
    window.history.replaceState({}, '', '/tickets');
  };

  // Replace this with your actual Google Form embed URL
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScEFs5w7t07t_8mcp3YhAU4Uip4Q-KxSL2610hCQGP5ZzxQnQ/viewform?embedded=true';

  return (
    <div style={{ fontFamily: 'Roboto, sans-serif', color: '#ffffff', position: 'relative' }}>
      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          minHeight: '40vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1a1f2e 0%, #000000 100%)',
          paddingTop: 'clamp(100px, 15vw, 120px)',
          paddingBottom: 'clamp(2rem, 5vw, 3rem)',
          overflow: 'hidden',
        }}
      >
        {/* Animated Background Circles */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: 'clamp(150px, 30vw, 300px)',
            height: 'clamp(150px, 30vw, 300px)',
            background: 'radial-gradient(circle, rgba(0, 168, 232, 0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            animation: 'float 6s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '10%',
            width: 'clamp(200px, 40vw, 400px)',
            height: 'clamp(200px, 40vw, 400px)',
            background: 'radial-gradient(circle, rgba(95, 194, 184, 0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            animation: 'float 8s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'clamp(250px, 50vw, 500px)',
            height: 'clamp(250px, 50vw, 500px)',
            background: 'radial-gradient(circle, rgba(244, 185, 66, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            animation: 'float 10s ease-in-out infinite',
            animationDelay: '4s',
          }}
        />

        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 clamp(1rem, 3vw, 2rem)',
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
          }}
        >
          {/* <p
            style={{
              textTransform: 'uppercase',
              color: '#ffffff',
              fontWeight: 400,
              letterSpacing: '0.15em',
              marginBottom: '1.5rem',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
            }}
          >
            — SECURE YOUR SPOT
          </p> */}
          <h1
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              marginTop: '3.21rem',
              marginBottom: 'clamp(1rem, 3vw, 2rem)',
            }}
          >
            <span
              style={{
                background: 'linear-gradient(135deg, #00a8e8 0%, #5fc2b8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              BOOK YOUR
            </span>{' '}
            <span style={{ color: '#ffffff' }}>TICKET</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            Join students, and enterprising leaders at EBL Masterclass 8.0
          </p>
        </div>
      </section>


      {/* Google Form Section */}
      <section
        style={{
          padding: 'clamp(2rem, 4vw, 3rem) 0',
          background: 'linear-gradient(180deg, #000000 0%, #0d1117 50%, #1a1f2e 100%)',
          position: 'relative',
        }}
      >
        {/* Decorative Elements */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: 'clamp(100px, 20vw, 200px)',
            height: 'clamp(100px, 20vw, 200px)',
            border: '2px solid rgba(0, 168, 232, 0.2)',
            borderRadius: '50%',
            animation: 'pulse 3s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '5%',
            width: 'clamp(150px, 30vw, 300px)',
            height: 'clamp(150px, 30vw, 300px)',
            border: '2px solid rgba(95, 194, 184, 0.2)',
            borderRadius: '50%',
            animation: 'pulse 4s ease-in-out infinite',
            animationDelay: '1s',
          }}
        />

        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 clamp(1rem, 3vw, 2rem)',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <h2
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                fontWeight: 700,
                marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
              }}
            >
              <span
                style={{
                  background: 'linear-gradient(135deg, #00a8e8 0%, #5fc2b8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Registration
              </span>{' '}
              <span style={{ color: '#ffffff' }}>Form</span>
            </h2>
            <p
              style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.125rem)',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: 1.6,
              }}
            >
              Fill out the form below to secure your spot. You'll receive a confirmation email with
              your ticket.
            </p>
          </div>

          {/* Google Form Embed Container */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(0, 168, 232, 0.3)',
              borderRadius: 'clamp(1rem, 2vw, 1.5rem)',
              padding: 'clamp(1rem, 3vw, 2rem)',
              boxShadow: '0 20px 60px rgba(0, 168, 232, 0.2)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Glow Effect */}
            <div
              style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background:
                  'radial-gradient(circle, rgba(0, 168, 232, 0.1) 0%, transparent 50%)',
                animation: 'rotate 20s linear infinite',
                pointerEvents: 'none',
              }}
            />

            <div
              style={{
                position: 'relative',
                zIndex: 1,
              }}
            >
              {/* Google Form iframe */}
    <div
  style={{
    width: '100%',
    overflow: 'hidden',
  }}
>
  <iframe
    src={googleFormUrl}
    title="Registration Form"
    loading="lazy"
    style={{
      width: '100%',
      height: '100vh',        // KEY FIX
      minHeight: '700px',     // prevents cut-off
      borderRadius: 'clamp(0.5rem, 1.5vw, 1rem)',
      background: '#ffffff',
      border: 'none',
      display: 'block',
    }}
  />
</div>

                Loading…
            
            </div>
          </div>


        </div>
      </section>

      {/* Thank You Modal */}
      {showThankYou && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: 'clamp(1rem, 3vw, 2rem)',
            animation: 'fadeIn 0.3s ease-out',
          }}
          onClick={closeThankYou}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, #1a1f2e 0%, #0d1117 100%)',
              border: '2px solid rgba(0, 168, 232, 0.5)',
              borderRadius: 'clamp(1rem, 3vw, 2rem)',
              padding: 'clamp(2rem, 4vw, 3rem)',
              maxWidth: '600px',
              width: '100%',
              textAlign: 'center',
              position: 'relative',
              boxShadow: '0 0 60px rgba(0, 168, 232, 0.4)',
              animation: 'scaleIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeThankYou}
              style={{
                position: 'absolute',
                top: 'clamp(1rem, 2vw, 1.5rem)',
                right: 'clamp(1rem, 2vw, 1.5rem)',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: 'clamp(35px, 6vw, 40px)',
                height: 'clamp(35px, 6vw, 40px)',
                color: '#ffffff',
                fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'rotate(90deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'rotate(0deg)';
              }}
            >
              ×
            </button>

            {/* Success Icon */}
            <div
              style={{
                width: 'clamp(70px, 15vw, 100px)',
                height: 'clamp(70px, 15vw, 100px)',
                margin: '0 auto clamp(1.5rem, 3vw, 2rem)',
                background: 'linear-gradient(135deg, #00a8e8 0%, #5fc2b8 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 40px rgba(0, 168, 232, 0.6)',
                animation: 'pulse 2s ease-in-out infinite',
              }}
            >
              <svg width="clamp(35px, 8vw, 50px)" height="clamp(35px, 8vw, 50px)" viewBox="0 0 50 50" fill="none">
                <path
                  d="M15 25L22 32L35 18"
                  stroke="#ffffff"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Thank You Message */}
            <h2
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                fontWeight: 700,
                marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                lineHeight: 1.2,
              }}
            >
              <span
                style={{
                  background: 'linear-gradient(135deg, #00a8e8 0%, #5fc2b8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Thank You
              </span>
              {userName && (
                <>
                  ,<br />
                  <span style={{ color: '#ffffff', fontSize: '0.8em' }}>{userName}!</span>
                </>
              )}
            </h2>

            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
              }}
            >
              Your registration has been successfully submitted! 🎉
            </p>

            <div
              style={{
                background: 'rgba(0, 168, 232, 0.1)',
                border: '1px solid rgba(0, 168, 232, 0.3)',
                borderRadius: 'clamp(0.75rem, 1.5vw, 1rem)',
                padding: 'clamp(1rem, 2vw, 1.5rem)',
                marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
                  fontWeight: 700,
                  color: '#00a8e8',
                  marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)',
                }}
              >
                What's Next?
              </h3>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(0.5rem, 1vw, 0.75rem)',
                  textAlign: 'left',
                }}
              >
                {[
                  'Check your email for a confirmation message',
                  'You will receive your personalized ticket within 24 hours',
                  'Save the event dates to your calendar',
                  'Join our community group for updates',
                ].map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      gap: 'clamp(0.5rem, 1vw, 0.75rem)',
                      fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                      color: 'rgba(255, 255, 255, 0.9)',
                    }}
                  >
                    <span style={{ color: '#00a8e8', flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={closeThankYou}
              style={{
                padding: 'clamp(0.875rem, 2vw, 1rem) clamp(2rem, 4vw, 3rem)',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                fontWeight: 600,
                color: '#ffffff',
                background: 'linear-gradient(135deg, #00a8e8 0%, #5fc2b8 100%)',
                border: 'none',
                borderRadius: '9999px',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 0 20px rgba(0, 168, 232, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 168, 232, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 168, 232, 0.3)';
              }}
            >
              Got It!
            </button>

            <p
              style={{
                fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
                color: 'rgba(255, 255, 255, 0.6)',
                marginTop: 'clamp(1rem, 2vw, 1.5rem)',
                marginBottom: 0,
              }}
            >
              See you at TechX 2.0! 🚀
            </p>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        // /* Responsive iframe heights */
        // .google-form-iframe {
        //   height: 1200px;
        // }

        // @media (max-width: 768px) {
        //   .google-form-iframe {
        //     height: 1500px !important;
        //   }
        // }

        // @media (max-width: 480px) {
        //   .google-form-iframe {
        //     height: 1800px !important;
        //   }
        // }

        // @media (max-width: 360px) {
        //   .google-form-iframe {
        //     height: 2000px !important;
        //   }
        // }
      `}</style>
    </div>
  );
};

export default BookTickets;