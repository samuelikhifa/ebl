// src/pages/PartnerWithUs.tsx
import { useState } from 'react';

const PartnerWithUs = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    package: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partnership inquiry:', formData);
    alert('Thank you! We will contact you soon.');
    setFormData({
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      package: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputStyle = {
    width: '100%',
    padding: '1rem',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '1rem',
    color: '#ffffff',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(0, 168, 232, 0.3)',
    borderRadius: '0.5rem',
    outline: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  return (
    <div style={{ fontFamily: 'Roboto, sans-serif', color: '#ffffff', position: 'relative' }}>
      {/* Animated Background Layer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          background: 'linear-gradient(135deg, #1a1f2e 0%, #0d1117 50%, #1a1f2e 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Animated Gradient Orbs */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            right: '15%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(0, 168, 232, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '10%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(95, 194, 184, 0.25) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            animation: 'float 10s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '20%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(74, 111, 165, 0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(100px)',
            animation: 'float 12s ease-in-out infinite',
            animationDelay: '4s',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '60%',
            left: '50%',
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(244, 185, 66, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(90px)',
            animation: 'float 9s ease-in-out infinite',
            animationDelay: '1s',
          }}
        />
      </div>

      {/* Content Container */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Hero Section */}
        <section
          style={{
            position: 'relative',
            minHeight: '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '120px',
            paddingBottom: '4rem',
            overflow: 'hidden',
          }}
        >
          {/* Geometric Patterns */}
          <div
            style={{
              position: 'absolute',
              top: '20%',
              left: '5%',
              width: '200px',
              height: '200px',
              border: '2px solid rgba(0, 168, 232, 0.2)',
              borderRadius: '50%',
              animation: 'pulse 4s ease-in-out infinite',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '15%',
              right: '8%',
              width: '250px',
              height: '250px',
              border: '2px solid rgba(95, 194, 184, 0.2)',
              borderRadius: '50%',
              animation: 'pulse 5s ease-in-out infinite',
              animationDelay: '1s',
            }}
          />

          <div
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '0 2rem',
              position: 'relative',
              zIndex: 2,
              textAlign: 'center',
            }}
          >
            {/* <p
              style={{
                textTransform: 'uppercase',
                color: '#00a8e8',
                fontWeight: 600,
                letterSpacing: '0.15em',
                marginBottom: '1.5rem',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.875rem',
              }}
            >
              — JOIN OUR MISSION
            </p> */}
            <h1
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                fontWeight: 700,
                lineHeight: 1.2,
                marginTop: '2.3rem',
                marginBottom: '2rem',
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
                PARTNER
              </span>{' '}
              <span style={{ color: '#ffffff' }}>WITH US</span>
            </h1>
            <p
              style={{
                fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '800px',
                margin: '0 auto',
              }}
            >
              Join us in empowering the next generation of entrepreneurs and leaders. Your
              partnership drives impact and creates lasting change.
            </p>
          </div>
        </section>

        {/* Partnership Packages */}
        <section
          style={{
            padding: '6rem 0',
            position: 'relative',
          }}
        >
          <div
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '0 2rem',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  fontWeight: 700,
                  marginBottom: '1.5rem',
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
                  Partnership
                </span>{' '}
                <span style={{ color: '#ffffff' }}>Packages</span>
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                marginBottom: '4rem',
              }}
              className="packages-grid"
            >
              {[
                {
                  name: 'Platinum',
                  price: '₦1,000,000+',
                  color: '#f4b942',
                  bgColor: 'rgba(244, 185, 66, 0.15)',
                  features: [
                    'Exclusive title as Lead Partner',
                    'Prominent branding on all platforms',
                    'Host a workshop or masterclass',
                    'Priority networking access',
                    'Logo in all media campaigns',
                    'Speaking opportunity',
                  ],
                },
                {
                  name: 'Gold',
                  price: '₦500,000',
                  color: '#5fc2b8',
                  bgColor: 'rgba(95, 194, 184, 0.15)',
                  features: [
                    'Branding on selected materials',
                    'Mentor/judge opportunity',
                    'Access to top participants',
                    'Logo on digital campaigns',
                    'Grand Finale recognition',
                  ],
                },
                {
                  name: 'Silver',
                  price: '₦300,000',
                  color: '#00a8e8',
                  bgColor: 'rgba(0, 168, 232, 0.15)',
                  features: [
                    'Branding on participant kits',
                    'Social media recognition',
                    'Mini training session opportunity',
                    'Recruitment access',
                  ],
                },
                {
                  name: 'Bronze',
                  price: '₦200,000',
                  color: '#4a6fa5',
                  bgColor: 'rgba(74, 111, 165, 0.15)',
                  features: [
                    'Logo on event materials',
                    'Social media mentions',
                    'Promotional item distribution',
                    'Event recognition',
                  ],
                },
              ].map((pkg, index) => (
                <div
                  key={index}
                  style={{
                    background: pkg.bgColor,
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: `2px solid ${pkg.color}60`,
                    borderRadius: '1.5rem',
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    animation: `fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s both`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                    e.currentTarget.style.borderColor = pkg.color;
                    e.currentTarget.style.boxShadow = `0 25px 50px ${pkg.color}60`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.borderColor = `${pkg.color}60`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div
                    style={{
                      background: `linear-gradient(135deg, ${pkg.color} 0%, ${pkg.color}CC 100%)`,
                      padding: '2rem',
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: '-50%',
                        right: '-50%',
                        width: '200%',
                        height: '200%',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%)',
                      }}
                    />
                    <p
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        color: '#1a1f2e',
                        marginBottom: '0.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        position: 'relative',
                      }}
                    >
                      {pkg.name}
                    </p>
                    <h3
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '2rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        margin: 0,
                        position: 'relative',
                      }}
                    >
                      {pkg.price}
                    </h3>
                  </div>
                  <div style={{ padding: '2rem' }}>
                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                      }}
                    >
                      {pkg.features.map((feature, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            gap: '0.75rem',
                            fontSize: '0.95rem',
                            lineHeight: 1.6,
                            color: 'rgba(255, 255, 255, 0.95)',
                          }}
                        >
                          <span style={{ color: pkg.color, flexShrink: 0, fontWeight: 700 }}>
                            ✓
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section
          style={{
            padding: '6rem 0',
            position: 'relative',
          }}
        >
          <div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              padding: '0 2rem',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 700,
                  marginBottom: '1.5rem',
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
                  Get In
                </span>{' '}
                <span style={{ color: '#ffffff' }}>Touch</span>
              </h2>
              <p
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  color: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                Ready to make an impact? Fill out the form below.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              style={{
                background: 'rgba(0, 168, 232, 0.08)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(0, 168, 232, 0.3)',
                borderRadius: '1.5rem',
                padding: 'clamp(2rem, 4vw, 3rem)',
                boxShadow: '0 20px 60px rgba(0, 168, 232, 0.2)',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '1.5rem',
                  }}
                  className="form-grid"
                >
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: '#ffffff',
                        marginBottom: '0.75rem',
                      }}
                    >
                      Company Name 
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: '#ffffff',
                        marginBottom: '0.75rem',
                      }}
                    >
                      Contact Person 
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '1.5rem',
                  }}
                  className="form-grid"
                >
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: '#ffffff',
                        marginBottom: '0.75rem',
                      }}
                    >
                      Email 
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: '#ffffff',
                        marginBottom: '0.75rem',
                      }}
                    >
                      Phone 
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      marginBottom: '0.75rem',
                    }}
                  >
                    Partnership Package 
                  </label>
                  <select
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  >
                    <option value="">Select a package</option>
                    <option value="platinum">Platinum - ₦1,000,000+</option>
                    <option value="gold">Gold - ₦500,000</option>
                    <option value="silver">Silver - ₦300,000</option>
                    <option value="bronze">Bronze - ₦200,000</option>
                    <option value="custom">Custom Package</option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      marginBottom: '0.75rem',
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    placeholder="Tell us about your organization and partnership interests..."
                  />
                </div>

                <button
                  type="submit"
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
                    boxShadow: '0 0 20px rgba(0, 168, 232, 0.4)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 168, 232, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 168, 232, 0.4)';
                  }}
                >
                  Submit Partnership Inquiry
                </button>
              </div>
            </form>

           
          </div>
        </section>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
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

        @media (max-width: 768px) {
          .packages-grid {
            grid-template-columns: 1fr !important;
          }

          .form-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 480px) {
          section {
            padding: 3rem 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PartnerWithUs;





