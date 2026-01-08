import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react'; // only needed if you still want something extra
import ebl13 from '../assets/ebl13.webp';
import tit1 from '../assets/tit1.jpg';
import tit2 from '../assets/tit2.jpg';
import tit3 from '../assets/tit3.jpg';
const OurStory = () => {
  // Optional: You can keep a small useEffect for things Helmet can't do (rare)
  useEffect(() => {
    // Most things are already handled by Helmet
    // Only keep if you really need something special
  }, []);

  return (
    <>
      <Helmet>
        {/* Basic Meta */}
        <title>Our Story | EBL Masterclass 8.0 – JCIN UNIBEN</title>

        <meta
          name="description"
          content="Learn about the journey of the Employability, Business, and Leadership (EBL) Masterclass, a student-focused initiative by JCIN UNIBEN created to support learning in employability, business, and leadership."
        />

        <meta
          name="keywords"
          content="EBL Masterclass, JCIN UNIBEN, UNIBEN students, employability learning, business education, leadership development, student initiatives"
        />

        <meta name="author" content="EBL Masterclass | JCIN UNIBEN" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://eblmasterclass.com/our-story" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eblmasterclass.com/our-story" />
        <meta
          property="og:title"
          content="Our Story | EBL Masterclass 8.0 – JCIN UNIBEN"
        />
        <meta
          property="og:description"
          content="The story of EBL Masterclass, a JCIN UNIBEN initiative focused on practical learning in employability, business, and leadership."
        />
        <meta
          property="og:image"
          content="https://eblmasterclass.com/assets/og-our-story.jpg"
        />
        <meta property="og:site_name" content="EBL Masterclass" />
        <meta property="og:locale" content="en_NG" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Story | EBL Masterclass 8.0"
        />
        <meta
          name="twitter:description"
          content="Discover the journey of EBL Masterclass, a student-focused learning experience by JCIN UNIBEN."
        />
        <meta
          name="twitter:image"
          content="https://eblmasterclass.com/assets/twitter-our-story.jpg"
        />

        {/* Language / Region */}
        <meta name="language" content="English" />
        <meta httpEquiv="content-language" content="en-NG" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://eblmasterclass.com/#organization",
                name: "EBL Masterclass",
                alternateName: "Employability, Business and Leadership Masterclass",
                url: "https://eblmasterclass.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://eblmasterclass.com/assets/logo.png",
                  width: 600,
                  height: 200,
                },
                description:
                  "A student-focused learning initiative by JCIN UNIBEN centered on employability, business, and leadership.",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Benin City",
                  addressCountry: "NG",
                },
              },
              {
                "@type": "WebPage",
                "@id": "https://eblmasterclass.com/our-story#webpage",
                url: "https://eblmasterclass.com/our-story",
                name: "Our Story | EBL Masterclass 8.0",
                description:
                  "The journey and purpose of EBL Masterclass as a learning platform for UNIBEN students.",
                inLanguage: "en-NG",
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://eblmasterclass.com/our-story#breadcrumb",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://eblmasterclass.com",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Our Story",
                    item: "https://eblmasterclass.com/our-story",
                  },
                ],
              },
              {
                "@type": "EducationalOrganization",
                name: "EBL Masterclass",
                description:
                  "A JCIN UNIBEN initiative supporting student learning in employability, business, and leadership.",
                url: "https://eblmasterclass.com",
              },
            ],
          })}
        </script>
      </Helmet>




      <div style={{ fontFamily: 'Roboto, sans-serif', color: '#ffffff', position: 'relative' }}>
        {/* Fixed Animated Background */}
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
          <div style={{ position: 'absolute', top: '8%', right: '12%', width: '550px', height: '550px', background: 'radial-gradient(circle, rgba(0, 168, 232, 0.3) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(90px)', animation: 'float 11s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', top: '35%', left: '8%', width: '480px', height: '480px', background: 'radial-gradient(circle, rgba(95, 194, 184, 0.28) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(90px)', animation: 'float 13s ease-in-out infinite', animationDelay: '2s' }} />
          <div style={{ position: 'absolute', bottom: '8%', right: '18%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(74, 111, 165, 0.25) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(100px)', animation: 'float 15s ease-in-out infinite', animationDelay: '4s' }} />
          <div style={{ position: 'absolute', top: '55%', left: '45%', width: '520px', height: '520px', background: 'radial-gradient(circle, rgba(244, 185, 66, 0.18) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(95px)', animation: 'float 9s ease-in-out infinite', animationDelay: '1s' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Hero */}
          <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '120px', paddingBottom: '4rem', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '18%', right: '10%', width: '180px', height: '180px', border: '2px solid rgba(0, 168, 232, 0.25)', borderRadius: '50%', animation: 'pulse 4s ease-in-out infinite' }} />
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', textAlign: 'center', zIndex: 2 }}>
              {/* <p style={{ textTransform: 'uppercase', color: '#00a8e8', fontWeight: 600, letterSpacing: '0.15em', marginBottom: '1.5rem', fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>— ABOUT US</p> */}
              <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '2rem', marginTop: '2rem' }}>
                <span style={{ background: 'linear-gradient(135deg, #00a8e8 0%, #5fc2b8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>OUR</span>{' '}
                <span style={{ color: '#ffffff' }}>STORY</span>
              </h1>
              <p style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)', lineHeight: 1.8, color: 'rgba(255, 255, 255, 0.9)', maxWidth: '800px', margin: '0 auto' }}>
                Empowering young leaders through entrepreneurship, business excellence, and transformative leadership development.
              </p>
            </div>
          </section>

          {/* What is EBL */}
          <section style={{ padding: '6rem 0' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="story-grid">
                <div>
                  <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, marginBottom: '2rem', lineHeight: 1.2 }}>
                    <span style={{ background: 'linear-gradient(135deg, #00a8e8 0%, #5fc2b8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      What is
                    </span>{' '}
                    <span style={{ color: '#ffffff' }}>EBL Masterclass?</span>
                  </h2>
                  <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: 1.8, color: 'rgba(255, 255, 255, 0.95)', marginBottom: '1.5rem', textAlign: 'justify' }}>
                    The <strong style={{ color: '#00a8e8' }}>Employability, Business, and Leadership (EBL) Masterclass</strong> is a flagship initiative of the Junior Chamber International Nigeria, University of Benin (JCIN UNIBEN), designed to equip UNIBEN students with practical skills and real-world insights.
                  </p>
                  <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: 1.8, color: 'rgba(255, 255, 255, 0.95)', textAlign: 'justify' }}>
                    Through interactive workshops, expert-led sessions, and engaging discussions, EBL empowers participants to strengthen their employability, business thinking, and leadership capacity.
                  </p>
                </div>

                <div style={{ background: 'rgba(0, 168, 232, 0.12)', backdropFilter: 'blur(20px)', border: '2px solid rgba(0, 168, 232, 0.3)', borderRadius: '1.5rem', padding: 'clamp(2rem, 4vw, 3rem)', boxShadow: '0 20px 60px rgba(0, 168, 232, 0.2)' }}>
                  <img
                    src={ebl13}
                    alt="Event Statistics"
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                      borderRadius: '1rem',
                      border: '2px solid rgba(0, 168, 232, 0.3)',
                    }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section style={{ padding: '6rem 0' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
              <h2
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: 700,
                  color: '#fff',
                  textAlign: 'center',
                  marginBottom: '4rem'
                }}
              >
                What People Say
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }} className="testimonials-grid">
                {[
                  {
                    image: tit1,
                    name: 'ANNA OSASOGIE ',
                    title: 'Entrepreneur',
                    color: '#00a8e8',
                    text: 'The Leadership Academy (EBL Masterclass 7.0) challenged me through weeks of rigorous training from hybrid sessions to practical tasks, deep book reviews, and a memorable graduation ceremony. Beyond learning new skills, the program strengthened my confidence, improved my communication skills, and helped me develop a clearer sense of purpose as a young leader.',
                  },
                  {
                    image: tit2,
                    name: 'JCIN CLLR. CHIMAOBI NWAORISA',
                    title: 'General Legal Counsel',
                    color: '#5fc2b8',
                    text: 'Masterclass 5.0 was a defining starting point in my JCIN UNIBEN journey. It marked my first active volunteering experience, and it remains one of the most memorable Participating in the Pre-EBL series was an enriching experience. I gained valuable insights, developed new skills, and, most importantly, built meaningful friendships with like-minded young people who were equally driven to grow. At the grand finale, I was privileged not only to learn but also to volunteer as a content writer, contributing my skills to the success of the event. That opportunity gave me a sense of belonging and purpose within the organization.',
                  },
                  {
                    image: tit3,
                    name: 'KARENHAPPUCH IKPEMOSI DAKO ',
                    title: '2026  CoLlegiate Director of Training for South South and South East',
                    color: '#00a8e8',
                    text: ' Masterclass 7.0 was a truly transformative experience for me. Each trainer brought their absolute best, the value and insight shared were simply amazing! Serving as the Training Manager of the Business Academy was both an honor and a stretching experience. I had the opportunity to meet incredible people, grow in leadership, and learn through real responsibility.',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      background: item.color === '#00a8e8' ? 'rgba(0, 168, 232, 0.12)' : 'rgba(95, 194, 184, 0.12)',
                      backdropFilter: 'blur(20px)',
                      border: `2px solid ${item.color}50`,
                      borderRadius: '1.5rem',
                      padding: 'clamp(2rem, 4vw, 3rem)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px)';
                      e.currentTarget.style.borderColor = item.color;
                      e.currentTarget.style.boxShadow = `0 25px 50px ${item.color}60`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = `${item.color}50`;
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: 'clamp(60px, 12vw, 80px)',
                        height: 'clamp(60px, 12vw, 80px)',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: `3px solid ${item.color}`,
                        marginBottom: '1.5rem',
                        boxShadow: `0 10px 30px ${item.color}60`,
                      }}
                    />
                    <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.125rem)', lineHeight: 1.8, color: 'rgba(255, 255, 255, 0.9)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                      "{item.text}"
                    </p>
                    <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)', fontWeight: 700, color: '#fff', marginBottom: '0.25rem' }}>
                      {item.name}
                    </h3>
                    <p style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', color: item.color, fontWeight: 600, margin: 0 }}>
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>

        <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(30px, -40px); }
          66% { transform: translate(-30px, 30px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.15); opacity: 1; }
        }
        @media (max-width: 768px) {
          .story-grid, .mission-vision-grid, .impact-grid {
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
    </>
  );
};

export default OurStory;