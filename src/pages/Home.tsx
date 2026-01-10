import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';

// Image imports
import img5 from '../assets/img5.webp';
import ebl2 from '../assets/ebl2.webp';
import img4 from '../assets/img4.webp';
import img3 from '../assets/img3.webp';
import ebl9 from '../assets/ebl9.webp';
import ebl11 from '../assets/ebl11.webp';
import ebl14 from '../assets/ebl14.webp';
import ebl17 from '../assets/ebl17.webp';
import gcdz from '../assets/gcdz.webp';
import skillgq from '../assets/skillgq.webp';
import ccc from '../assets/ccc.webp';
import esda from '../assets/esda.webp';
import edojobs from '../assets/edojobs.webp';
import xri from '../assets/xri.webp';
import img6 from '../assets/img6.png';
import Go from '../assets/Go.webp';
import ebs from '../assets/ebs.webp';
import kovar from '../assets/kovar.png';
import Achevers from '../assets/Achevers.webp';
import AIESEC from '../assets/AIESEC.webp';
import LAWSA from '../assets/LAWSA.png';
import mmm from '../assets/mmm.webp';
import img8 from '../assets/img8.webp';
import img7 from '../assets/img7.png';
import img11 from '../assets/img11.png';
import img12 from '../assets/img12.webp';
import img0 from '../assets/img0.webp';

// ── COUNTDOWN COMPONENT ──
const CountdownSection = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date('2026-04-07T00:00:00') - +new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatNumber = (num: number) => String(num).padStart(2, '0');

    return (
        <div
            style={{
                textAlign: 'center',
                padding: 'clamp(2rem, 4vw, 3rem) clamp(1rem, 2vw, 2rem)',
                background: 'rgba(0, 168, 232, 0.08)',
                backdropFilter: 'blur(20px)',
                border: '2px solid rgba(0, 168, 232, 0.3)',
                borderRadius: '1rem',
                margin: '2rem auto',
                maxWidth: '900px',
            }}
        >
            <h2
                style={{
                    background: 'linear-gradient(135deg, #00a8e8 0%, #5fc2b8 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 700,
                }}
            >
                Next Big Event Starts In
            </h2>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
                    justifyContent: 'center',
                    gap: 'clamp(0.75rem, 2vw, 1.5rem)',
                    maxWidth: '600px',
                    margin: '0 auto',
                }}
            >
                {Object.entries(timeLeft).map(([unit, value]) => (
                    <div
                        key={unit}
                        style={{
                            background: 'rgba(0, 168, 232, 0.1)',
                            padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1rem, 2vw, 1.5rem)',
                            borderRadius: '12px',
                            border: '1px solid rgba(0, 168, 232, 0.3)',
                        }}
                    >
                        <div
                            style={{
                                fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                                fontWeight: 'bold',
                                color: '#00a8e8',
                                fontFamily: 'Montserrat, sans-serif',
                            }}
                        >
                            {formatNumber(value)}
                        </div>
                        <div
                            style={{
                                color: 'rgba(255, 255, 255, 0.8)',
                                fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
                                textTransform: 'uppercase',
                                marginTop: '0.3rem',
                                fontFamily: 'Montserrat, sans-serif',
                            }}
                        >
                            {unit}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
// ── MAIN HOME PAGE COMPONENT ──
const Home = () => {
 

    // Partners carousel ref
    const partnersRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = partnersRef.current;
        if (!container) return;

        let scrollPos = 0;
        const speed = 0.5;

        const scroll = () => {
            scrollPos += speed;
            if (scrollPos >= container.scrollWidth / 2) {
                scrollPos = 0;
            }
            container.scrollLeft = scrollPos;
            requestAnimationFrame(scroll);
        };

        const animation = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animation);
    }, []);

    const partners = [
        { name: 'Edo Broadcasting Services', logo: ebs },
        { name: 'StartUp Nigeria', logo: gcdz },
        { name: 'Innovation Fund', logo: edojobs },
        { name: 'Business Connect', logo: xri },
        { name: 'Youth Empowerment', logo: ccc },
        { name: 'Youth Empowerment', logo: esda },
        { name: 'Youth Empowerment', logo: skillgq },
        { name: 'AISEC', logo: AIESEC },
        { name: 'LAWSA logo', logo: LAWSA },
        { name: 'Innovation Fund', logo: Achevers },
        { name: 'Business Connect', logo: Go },
        { name: 'Youth Empowerment', logo: kovar },
        { name: 'Youth Empowerment', logo: mmm },
        { name: 'Youth Empowerment', logo: img12 },
        { name: 'Edo Broadcasting Services', logo: img11 },
        { name: 'StartUp Nigeria', logo: img8 },
        { name: 'Innovation Fund', logo: img7 },
        { name: 'Business Connect', logo: img6 },
        { name: 'Youth Empowerment', logo: img0 },
    ];

    // Rest of your component...
    return (

        <>
            <Helmet>
                <title>EBL Masterclass 8.0 | Employability, Business & Leadership – UNIBEN</title>

                <meta
                    name="description"
                    content="The Employability, Business, and Leadership (EBL) Masterclass is a student-focused learning experience by JCIN UNIBEN, designed to expose undergraduates to practical insights in employability, business, and leadership."
                />

                <meta
                    name="keywords"
                    content="EBL Masterclass, JCIN UNIBEN, UNIBEN students, employability training, business learning, leadership development, student conference"
                />

                <meta
                    property="og:title"
                    content="EBL Masterclass 8.0 | JCIN UNIBEN"
                />

                <meta
                    property="og:description"
                    content="A student-focused masterclass by JCIN UNIBEN offering structured sessions on employability, business, and leadership."
                />

                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            <div style={{ fontFamily: 'Roboto, sans-serif', color: '#ffffff' }}>
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
                    <div
                        style={{
                            position: 'absolute',
                            top: '8%',
                            right: '12%',
                            width: 'clamp(300px, 40vw, 550px)',
                            height: 'clamp(300px, 40vw, 550px)',
                            background: 'radial-gradient(circle, rgba(0, 168, 232, 0.3) 0%, transparent 70%)',
                            borderRadius: '50%',
                            filter: 'blur(90px)',
                            animation: 'float 11s ease-in-out infinite',
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            top: '35%',
                            left: '8%',
                            width: 'clamp(280px, 35vw, 480px)',
                            height: 'clamp(280px, 35vw, 480px)',
                            background: 'radial-gradient(circle, rgba(95, 194, 184, 0.28) 0%, transparent 70%)',
                            borderRadius: '50%',
                            filter: 'blur(90px)',
                            animation: 'float 13s ease-in-out infinite',
                            animationDelay: '2s',
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '8%',
                            right: '18%',
                            width: 'clamp(350px, 45vw, 600px)',
                            height: 'clamp(350px, 45vw, 600px)',
                            background: 'radial-gradient(circle, rgba(74, 111, 165, 0.25) 0%, transparent 70%)',
                            borderRadius: '50%',
                            filter: 'blur(100px)',
                            animation: 'float 15s ease-in-out infinite',
                            animationDelay: '4s',
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            top: '55%',
                            left: '45%',
                            width: 'clamp(320px, 38vw, 520px)',
                            height: 'clamp(320px, 38vw, 520px)',
                            background: 'radial-gradient(circle, rgba(244, 185, 66, 0.18) 0%, transparent 70%)',
                            borderRadius: '50%',
                            filter: 'blur(95px)',
                            animation: 'float 9s ease-in-out infinite',
                            animationDelay: '1s',
                        }}
                    />
                </div>

                {/* Content Container */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                    {/* Conference Hero Section */}
                    <section
                        style={{
                            position: 'relative',
                            minHeight: '80vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                            paddingTop: 'clamp(100px, 15vw, 140px)', // Added padding to push content below navbar
                            paddingBottom: 'clamp(4rem, 8vw, 6rem)', // ← INCREASE THIS
                        }}
                    >
                        <img
                            src={img5}
                            alt="EBL Masterclass Conference Audience"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                zIndex: 0,
                            }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                // background: 'rgba(26, 31, 46, 0.8)',
                                zIndex: 1,
                            }}
                        />

                        <div
                            style={{
                                maxWidth: '1280px',
                                margin: '0 auto',
                                padding: '0 clamp(1rem, 3vw, 2rem)',
                                position: 'relative',
                                zIndex: 2,
                                width: '100%',
                                marginTop: '4rem'
                            }}
                        >
                            <div style={{ position: 'relative', textAlign: 'center' }}>
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '-100px',
                                        left: '50px',
                                        width: 'clamp(150px, 20vw, 300px)',
                                        height: 'clamp(150px, 20vw, 300px)',
                                        border: '3px solid rgba(0, 168, 232, 0.3)',
                                        borderRadius: '50%',
                                        opacity: 0.3,
                                    }}
                                    className="decorative-circle"
                                />
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '200px',
                                        right: '100px',
                                        width: 'clamp(200px, 25vw, 400px)',
                                        height: 'clamp(200px, 25vw, 400px)',
                                        border: '3px solid rgba(95, 194, 184, 0.3)',
                                        borderRadius: '50%',
                                        opacity: 0.2,
                                    }}
                                    className="decorative-circle"
                                />
                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: '50px',
                                        left: '150px',
                                        width: 'clamp(100px, 15vw, 200px)',
                                        height: 'clamp(100px, 15vw, 200px)',
                                        border: '3px solid rgba(0, 168, 232, 0.3)',
                                        borderRadius: '50%',
                                        opacity: 0.3,
                                    }}
                                    className="decorative-circle"
                                />

                                <div
                                    style={{
                                        display: 'inline-block',
                                        padding: 'clamp(2rem, 5vw, 4rem) clamp(2rem, 7vw, 6rem)',
                                        border: '3px solid #00a8e8',
                                        borderRadius: '1.5rem',
                                        position: 'relative',
                                        background: 'rgba(26, 31, 46, 0.6)',
                                        backdropFilter: 'blur(10px)',
                                        WebkitBackdropFilter: 'blur(10px)',
                                    }}
                                >
                                    <p
                                        style={{
                                            textTransform: 'uppercase',
                                            color: '#00a8e8',
                                            fontWeight: 600,
                                            letterSpacing: '0.15em',
                                            marginBottom: '1rem',
                                            fontFamily: 'Montserrat, sans-serif',
                                            fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
                                        }}
                                    >
                                        EBL MASTERCLASS 8.0
                                    </p>
                                    <h1
                                        style={{
                                            fontFamily: 'Montserrat, sans-serif',
                                            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                                            lineHeight: 1.1,
                                            marginBottom: '1.5rem',
                                            fontWeight: 700,
                                            color: '#ffffff',
                                        }}
                                    >
                                        CONF-
                                        <br />
                                        ERENCE
                                    </h1>
                                    <p
                                        style={{
                                            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                                            color: 'rgba(255, 255, 255, 0.9)',
                                            margin: 0,
                                            fontFamily: 'Roboto, sans-serif',
                                        }}
                                    >
                                        APRIL 2026
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Event Cards Section */}
                    <section
                        style={{
                            position: 'relative',
                            minHeight: '100vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingTop: 'clamp(80px, 10vw, 120px)',
                            paddingBottom: 'clamp(3rem, 6vw, 6rem)',
                        }}
                    >
                        <div
                            style={{
                                // maxWidth: '1280px',
                                margin: '0 auto',
                                padding: '0 clamp(1rem, 3vw, 2rem)',
                                width: '100%',
                                maxWidth: '500px',  // ← ADD THIS LINE
                            }}
                        >
                            <div
                                style={{
                                    display: 'grid',
                                    // gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
                                    gap: 'clamp(1.5rem, 3vw, 2rem)',
                                    marginBottom: 'clamp(3rem, 6vw, 6rem)',
                                }}
                                className="event-cards-grid"
                            >
                                {/* Abuja Event Card */}
                                {/* <div
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        backdropFilter: 'blur(10px)',
                                        WebkitBackdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '1.5rem',
                                        padding: 0,
                                        overflow: 'hidden',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        animation: 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 168, 232, 0.3)';
                                        e.currentTarget.style.borderColor = '#00a8e8';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    }}
                                >
                                    <div style={{ position: 'relative', height: 'clamp(200px, 30vw, 250px)', overflow: 'hidden' }}>
                                        <img
                                            src="/assets/events/abuja-skyline.jpg"
                                            alt="Abuja Nigeria"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                        />
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                background: 'linear-gradient(180deg, rgba(26, 31, 46, 0) 0%, rgba(26, 31, 46, 0.95) 100%)',
                                            }}
                                        />
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                textAlign: 'center',
                                                zIndex: 2,
                                                width: '100%',
                                            }}
                                        >
                                            <h2
                                                style={{
                                                    fontFamily: 'Montserrat, sans-serif',
                                                    fontSize: 'clamp(2rem, 5vw, 4rem)',
                                                    fontWeight: 700,
                                                    color: '#ffffff',
                                                    marginBottom: '0.5rem',
                                                    lineHeight: 1.2,
                                                    letterSpacing: '-0.02em',
                                                }}
                                            >
                                                ABUJA
                                                <br />
                                                2026
                                            </h2>
                                            <p
                                                style={{
                                                    fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                                                    color: '#ffffff',
                                                    margin: 0,
                                                    fontWeight: 300,
                                                }}
                                            >
                                                APRIL 7-9, 2026
                                            </p>
                                        </div>
                                        <a
                                            href="/events/abuja"
                                            style={{
                                                position: 'absolute',
                                                top: '1.5rem',
                                                right: '1.5rem',
                                                background: '#00a8e8',
                                                width: 'clamp(50px, 8vw, 60px)',
                                                height: 'clamp(50px, 8vw, 60px)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                zIndex: 3,
                                                textDecoration: 'none',
                                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'scale(1.1) rotate(45deg)';
                                                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 168, 232, 0.6)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                                                e.currentTarget.style.boxShadow = 'none';
                                            }}
                                        >
                                            <span style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#ffffff', lineHeight: 1 }}>↗</span>
                                        </a>
                                        <div
                                            style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                right: 0,
                                                background: '#00a8e8',
                                                padding: 'clamp(1.5rem, 3vw, 2rem) clamp(1rem, 2vw, 1.5rem)',
                                                writingMode: 'vertical-rl',
                                                transform: 'rotate(180deg)',
                                                color: '#ffffff',
                                                fontWeight: 600,
                                                letterSpacing: '0.1em',
                                                fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
                                                fontFamily: 'Montserrat, sans-serif',
                                            }}
                                        >
                                            CLICK HERE
                                        </div>
                                    </div>
                                    <div style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}>
                                        <h4
                                            style={{
                                                color: '#00a8e8',
                                                marginBottom: '0.5rem',
                                                fontFamily: 'Montserrat, sans-serif',
                                                fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                                                fontWeight: 700,
                                            }}
                                        >
                                            TRANSCORP HILTON,
                                        </h4>
                                        <p
                                            style={{
                                                margin: 0,
                                                color: '#ffffff',
                                                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                                                fontFamily: 'Roboto, sans-serif',
                                            }}
                                        >
                                            ABUJA, NIGERIA
                                        </p>
                                    </div>
                                </div> */}

                                {/* Lagos Event Card */}
                                <div
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        backdropFilter: 'blur(10px)',
                                        WebkitBackdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '1.5rem',
                                        padding: 0,
                                        overflow: 'hidden',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        animation: 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 168, 232, 0.3)';
                                        e.currentTarget.style.borderColor = '#00a8e8';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    }}
                                >
                                    <div style={{ position: 'relative', height: 'clamp(200px, 30vw, 250px)', overflow: 'hidden' }}>
                                        <img
                                            src="data:image/jpeg;base64,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"
                                            alt="Lagos Nigeria"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                        />
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                background: 'linear-gradient(180deg, rgba(26, 31, 46, 0) 0%, rgba(26, 31, 46, 0.95) 100%)',
                                            }}
                                        />
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                textAlign: 'center',
                                                zIndex: 2,
                                                width: '100%',
                                            }}
                                        >
                                            <h2
                                                style={{
                                                    fontFamily: 'Montserrat, sans-serif',
                                                    fontSize: 'clamp(2rem, 3vw, 4rem)',
                                                    fontWeight: 700,
                                                    color: '#ffffff',
                                                    marginBottom: '0.5rem',
                                                    lineHeight: 1.2,
                                                    letterSpacing: '-0.02em',
                                                }}
                                            >
                                                BENIN CITY
                                                <br />
                                                2026
                                            </h2>
                                            <p
                                                style={{
                                                    fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                                                    color: '#ffffff',
                                                    margin: 0,
                                                    fontWeight: 300,
                                                }}
                                            >
                                                30th April - 6th June, 2026
                                            </p>
                                        </div>
                                        <a
                                            href="/BookTickets"
                                            style={{
                                                position: 'absolute',
                                                top: '1.5rem',
                                                right: '1.5rem',
                                                background: '#00a8e8',
                                                width: 'clamp(50px, 8vw, 60px)',
                                                height: 'clamp(50px, 8vw, 60px)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                zIndex: 3,
                                                textDecoration: 'none',
                                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'scale(1.1) rotate(45deg)';
                                                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 168, 232, 0.6)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                                                e.currentTarget.style.boxShadow = 'none';
                                            }}
                                        >
                                            <span style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#ffffff', lineHeight: 1 }}>↗</span>
                                        </a>
                                        <a
                                            href="/BookTickets"
                                            style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                right: 0,
                                                background: '#5fc2b8',
                                                padding: 'clamp(1.5rem, 3vw, 2rem) clamp(1rem, 2vw, 1.5rem)',
                                                writingMode: 'vertical-rl',
                                                transform: 'rotate(180deg)',
                                                color: '#ffffff',
                                                fontWeight: 600,
                                                letterSpacing: '0.1em',
                                                fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
                                                fontFamily: 'Montserrat, sans-serif',
                                            }}
                                        >
                                            CLICK HERE
                                        </a>
                                    </div>
                                    <div style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}>
                                        <h4
                                            style={{
                                                color: '#5fc2b8',
                                                marginBottom: '0.5rem',
                                                fontFamily: 'Montserrat, sans-serif',
                                                fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                                                fontWeight: 700,
                                            }}
                                        >
                                            University of Benin, Ugbowo Campus
                                        </h4>
                                        <p
                                            style={{
                                                margin: 0,
                                                color: '#ffffff',
                                                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                                                fontFamily: 'Roboto, sans-serif',
                                            }}
                                        >
                                            Benin, NIGERIA
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Partners Carousel */}
                            <div
                            // style={{
                            //     background: 'rgba(255, 255, 255, 0.05)',
                            //     backdropFilter: 'blur(10px)',
                            //     WebkitBackdropFilter: 'blur(10px)',
                            //     border: '1px solid rgba(255, 255, 255, 0.1)',
                            //     padding: 'clamp(2rem, 4vw, 3rem)',
                            //     borderRadius: '1.5rem',
                            //     marginBottom: 'clamp(3rem, 6vw, 6rem)',
                            //     overflow: 'hidden',
                            // }}
                            >
                                <div
                                    ref={partnersRef}
                                    style={{
                                        display: 'flex',
                                        gap: 'clamp(0.75rem, 2vw, 1.5rem)',
                                        overflow: 'hidden',
                                        alignItems: 'center',
                                    }}
                                >
                                    {[...partners, ...partners].map((partner, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                flex: '0 0 auto',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                minWidth: '180px',
                                                height: '110px',

                                                /* Desktop enhancement */
                                                // padding: '1.5rem',
                                                //minWidth: 'clamp(120px, 20vw, 150px)',
                                                // height: '60px',
                                                // background: 'rgba(0, 168, 232, 0.05)',     // ← fixed & completed
                                                // borderRadius: '0.75rem',
                                                padding: '0.75rem',
                                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            }}
                                        // onMouseEnter={(e) => {
                                        //     e.currentTarget.style.background = 'rgba(0, 168, 232, 0.1)';
                                        //     e.currentTarget.style.transform = 'scale(1.05)';
                                        // }}
                                        // onMouseLeave={(e) => {
                                        //     e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                        //     e.currentTarget.style.transform = 'scale(1)';
                                        // }}
                                        >
                                            <img
                                                src={partner.logo}
                                                alt={partner.name}
                                                style={{
                                                    height: '100px',          // ← THIS is the key fix
                                                    maxHeight: '90px',
                                                    width: 'auto',
                                                    // maxWidth: '100%',
                                                    objectFit: 'contain',
                                                    filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))', // ← Add glow
                                                    // filter: 'brightness(0) invert(1)',
                                                }}
                                            />


                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ABOUT THE EVENT Section */}
                    <section
                        style={{
                            padding: 'clamp(3rem, 6vw, 6rem) 0',
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
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
                                    gap: 'clamp(3rem, 5vw, 5rem)',
                                    alignItems: 'center',
                                }}
                                className="about-event-grid"
                            >
                                {/* Left Side - Image Collage */}
                                <div
                                    style={{
                                        position: 'relative',
                                        animation: 'slideInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                    }}
                                >
                                    <div
                                        style={{
                                            position: 'relative',
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(2, 1fr)',
                                            gridTemplateRows: 'repeat(2, 1fr)',
                                            gap: '1.5rem',
                                            minHeight: 'clamp(400px, 50vw, 500px)',
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: 'relative',
                                                borderRadius: '1rem',
                                                overflow: 'hidden',
                                                gridRow: '1 / 2',
                                                gridColumn: '1 / 2',
                                            }}
                                        >
                                            <img
                                                src={img4}
                                                alt="EBL Workshop Session"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1.1)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1)';
                                                }}
                                            />
                                        </div>

                                        <div
                                            style={{
                                                position: 'relative',
                                                borderRadius: '50%',
                                                overflow: 'hidden',
                                                gridRow: '1 / 2',
                                                gridColumn: '2 / 3',
                                                width: 'clamp(140px, 18vw, 180px)',
                                                height: 'clamp(140px, 18vw, 180px)',
                                                justifySelf: 'end',
                                                alignSelf: 'start',
                                            }}
                                        >
                                            <img
                                                src={ebl17}
                                                alt="Networking Session"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1.1)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1)';
                                                }}
                                            />
                                        </div>

                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                width: 'clamp(140px, 18vw, 180px)',
                                                height: 'clamp(140px, 18vw, 180px)',
                                                background: 'linear-gradient(135deg, #00a8e8 0%, #5fc2b8 100%)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                zIndex: 10,
                                                boxShadow: '0 10px 30px rgba(0, 168, 232, 0.5)',
                                                animation: 'pulse 2s ease-in-out infinite',
                                            }}
                                        >
                                            <svg
                                                width="clamp(30px, 5vw, 40px)"
                                                height="clamp(30px, 5vw, 40px)"
                                                viewBox="0 0 40 40"
                                                style={{ marginBottom: '0.5rem' }}
                                            >
                                                <path
                                                    d="M20 5 L23 15 L33 15 L25 22 L28 32 L20 26 L12 32 L15 22 L7 15 L17 15 Z"
                                                    fill="#ffffff"
                                                />
                                            </svg>
                                            <h3
                                                style={{
                                                    fontFamily: 'Montserrat, sans-serif',
                                                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                                                    fontWeight: 700,
                                                    color: '#ffffff',
                                                    margin: 0,
                                                    lineHeight: 1,
                                                }}
                                            >
                                                8
                                            </h3>
                                            <p
                                                style={{
                                                    fontFamily: 'Montserrat, sans-serif',
                                                    fontSize: 'clamp(0.625rem, 1.2vw, 0.75rem)',
                                                    fontWeight: 600,
                                                    color: '#ffffff',
                                                    margin: 0,
                                                    textAlign: 'center',
                                                    letterSpacing: '0.05em',
                                                }}
                                            >
                                                YEARS OF
                                                <br />
                                                IMPACT
                                            </p>
                                        </div>

                                        <div
                                            style={{
                                                position: 'relative',
                                                borderRadius: '50%',
                                                overflow: 'hidden',
                                                gridRow: '2 / 3',
                                                gridColumn: '1 / 2',
                                                width: 'clamp(140px, 18vw, 180px)',
                                                height: 'clamp(140px, 18vw, 180px)',
                                                justifySelf: 'start',
                                                alignSelf: 'end',
                                            }}
                                        >
                                            <img
                                                src={ebl2}
                                                alt="Team Collaboration"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1.1)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1)';
                                                }}
                                            />
                                        </div>

                                        <div
                                            style={{
                                                position: 'relative',
                                                borderRadius: '1rem',
                                                overflow: 'hidden',
                                                gridRow: '2 / 3',
                                                gridColumn: '2 / 3',
                                            }}
                                        >
                                            <img
                                                src={img3}
                                                alt="Participants"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1.1)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1)';
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Content */}
                                <div
                                    style={{
                                        animation: 'slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                    }}
                                >
                                    <p
                                        style={{
                                            textTransform: 'uppercase',
                                            color: '#ffffff',
                                            fontWeight: 400,
                                            letterSpacing: '0.1em',
                                            marginBottom: '1rem',
                                            fontFamily: 'Montserrat, sans-serif',
                                            fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
                                        }}
                                    >
                                        — OUR STORY
                                    </p>
                                    <h2
                                        style={{
                                            fontFamily: 'Montserrat, sans-serif',
                                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                                            fontWeight: 700,
                                            marginBottom: '2rem',
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
                                            ABOUT
                                        </span>{' '}
                                        <span style={{ color: '#ffffff' }}>THE EVENT</span>
                                    </h2>
                                    <p
                                        style={{
                                            fontSize: 'clamp(0.95rem, 1.8vw, 1rem)',
                                            lineHeight: 1.8,
                                            color: 'rgba(255, 255, 255, 0.9)',
                                            fontFamily: 'Roboto, sans-serif',
                                            marginBottom: '2rem',
                                        }}
                                    >
                                        The Employability, Business, and Leadership (EBL) Masterclass is a well-established student-focused initiative that has successfully held seven editions, impacting students through practical learning and exposure to real-world skills.
                                    </p>

                                    <div style={{ marginBottom: '3rem' }}>
                                        <h4
                                            style={{
                                                fontFamily: 'Montserrat, sans-serif',
                                                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                                                fontWeight: 600,
                                                color: '#00a8e8',
                                                marginBottom: '1.5rem',
                                            }}
                                        >
                                            Our event features:
                                        </h4>
                                        {/* <p>For its 8th edition, the EBL Masterclass has been strategically structured into three focused academies, allowing participants to learn with clarity, depth, and purpose:</p> */}
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                            {[
                                                'Expert-led sessions delivered by professionals and practitioners across employability, business, and leadership',
                                                'Practical and hands-on workshops focused on real-world application and skill development',

                                                'Business-focused challenges and activities designed to encourage innovation, problem-solving, and teamwork',
                                                // 'Opportunities for business grants and support linked to outstanding participation and ideas',
                                                'Since the seventh edition, the EBL Masterclass has been structured into three focused academies: Employability, Business (Mastery), and Leadership'

                                            ].map((feature, idx) => (
                                                <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                                    <div
                                                        style={{
                                                            width: 'clamp(25px, 4vw, 30px)',
                                                            height: 'clamp(25px, 4vw, 30px)',
                                                            borderRadius: '50%',
                                                            background: 'linear-gradient(135deg, #00a8e8 0%, #5fc2b8 100%)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            flexShrink: 0,
                                                            fontWeight: 700,
                                                            color: '#ffffff',
                                                            fontFamily: 'Montserrat, sans-serif',
                                                            fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                                                        }}
                                                    >
                                                        ✓
                                                    </div>
                                                    <p
                                                        style={{
                                                            fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                                                            lineHeight: 1.7,
                                                            color: 'rgba(255, 255, 255, 0.9)',
                                                            fontFamily: 'Roboto, sans-serif',
                                                            margin: 0,
                                                        }}
                                                    >
                                                        {feature}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </section>

                    {/* WHY ATTEND Section */}
                    <section
                        style={{
                            padding: 'clamp(3rem, 6vw, 6rem) 0',
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
                            <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
                                <p
                                    style={{
                                        textTransform: 'uppercase',
                                        color: '#ffffff',
                                        fontWeight: 400,
                                        letterSpacing: '0.1em',
                                        marginBottom: '1rem',
                                        fontFamily: 'Montserrat, sans-serif',
                                        fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
                                    }}
                                >
                                    — JOIN US
                                </p>
                                <h2
                                    style={{
                                        fontFamily: 'Montserrat, sans-serif',
                                        fontSize: 'clamp(2rem, 5vw, 4rem)',
                                        fontWeight: 700,
                                        marginBottom: '2rem',
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
                                        WHY
                                    </span>{' '}
                                    <span style={{ color: '#ffffff' }}>ATTEND?</span>
                                </h2>
                                <p
                                    style={{
                                        fontSize: 'clamp(0.95rem, 1.8vw, 1rem)',
                                        lineHeight: 1.8,
                                        color: 'rgba(255, 255, 255, 0.9)',
                                        fontFamily: 'Roboto, sans-serif',
                                        maxWidth: '900px',
                                    }}
                                >
                                    Join students and young professionals who have participated in the EBL Masterclass to build skills, gain exposure, and grow in employability, business, and leadership.
                                </p>
                            </div>

                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                                    gap: 'clamp(1.5rem, 3vw, 2rem)',
                                    marginBottom: 'clamp(2rem, 4vw, 4rem)',
                                }}
                                className="why-attends-grid"
                            >
                                {[
                                    {
                                        title: 'Gain Insights',
                                        description:
                                            'Through expert-led sessions, the EBL Masterclass helps you broaden your horizons and learn about the latest trends in entrepreneurship, technology, and business development from industry leaders.',
                                        image: ebl9,
                                    },
                                    {
                                        title: 'Network With Peers',
                                        description:
                                            'Connect with like-minded individuals, thought leaders, and innovators. Leverage this opportunity to build lasting relationships and partnerships that can transform your entrepreneurial journey.',
                                        image: ebl11,
                                    },
                                    {
                                        title: 'Build Practical Capacity',
                                        description:
                                            'Participate in structured sessions designed to strengthen your thinking, skills, and readiness for real-world opportunities.',
                                        image: ebl14,
                                    },
                                ].map((card, idx) => (
                                    <div
                                        key={idx}
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            backdropFilter: 'blur(10px)',
                                            WebkitBackdropFilter: 'blur(10px)',
                                            border: '2px solid transparent',
                                            borderRadius: '1.5rem',
                                            padding: 0,
                                            overflow: 'hidden',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            animation: `fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.2 + idx * 0.2}s both`,
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-8px)';
                                            e.currentTarget.style.borderColor = '#00a8e8';
                                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 168, 232, 0.3)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.borderColor = 'transparent';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        <div
                                            style={{
                                                height: 'clamp(180px, 25vw, 220px)',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            <img
                                                src={card.image}
                                                alt={card.title}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1.1)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1)';
                                                }}
                                            />
                                        </div>
                                        <div style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}>
                                            <h3
                                                style={{
                                                    fontFamily: 'Montserrat, sans-serif',
                                                    fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                                                    fontWeight: 700,
                                                    marginBottom: '1rem',
                                                    background: 'linear-gradient(135deg, #00a8e8 0%, #5fc2b8 100%)',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    backgroundClip: 'text',
                                                }}
                                            >
                                                {card.title}
                                            </h3>
                                            <p
                                                style={{
                                                    fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                                                    lineHeight: 1.7,
                                                    color: 'rgba(255, 255, 255, 0.9)',
                                                    fontFamily: 'Roboto, sans-serif',
                                                    margin: 0,
                                                    textAlign: 'justify',
                                                }}
                                            >
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
                                    gap: 'clamp(2rem, 4vw, 4rem)',
                                    alignItems: 'start',
                                }}
                                className="video-bottom-grid"
                            >
                                <div>
                                    <p
                                        style={{
                                            textTransform: 'uppercase',
                                            color: '#ffffff',
                                            fontWeight: 400,
                                            letterSpacing: '0.1em',
                                            marginBottom: '1rem',
                                            fontFamily: 'Montserrat, sans-serif',
                                            fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
                                        }}
                                    >
                                        — WATCH
                                    </p>
                                    <h2
                                        style={{
                                            fontFamily: 'Montserrat, sans-serif',
                                            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                                            fontWeight: 700,
                                            lineHeight: 1.2,
                                            marginBottom: 0,
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
                                            EBL MASTERCLASS
                                        </span>
                                        <br />
                                        <span style={{ color: '#ffffff' }}>2025-26 HIGHLIGHTS</span>
                                    </h2>
                                </div>

                                <div>
                                    <p
                                        style={{
                                            fontSize: 'clamp(0.95rem, 1.8vw, 1rem)',
                                            lineHeight: 1.8,
                                            color: 'rgba(255, 255, 255, 0.9)',
                                            fontFamily: 'Roboto, sans-serif',
                                            textAlign: 'justify',
                                        }}
                                    >
                                        Experience the energy and innovation that defines EBL Masterclass. This showcase captures the transformative journey of our participants as they learn, network, compete, and win life-changing opportunities.
                                    </p>
                                </div>
                            </div> */}
                        </div>
                    </section>

                    {/* VIDEO TRAILER Section */}
                    <section
                        style={{
                            padding: 'clamp(3rem, 6vw, 6rem) 0',
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
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
                                    gap: 'clamp(2rem, 4vw, 4rem)',
                                    alignItems: 'center',
                                }}
                                className="video-section-grid"
                            >
                                <div>
                                    <p
                                        style={{
                                            textTransform: 'uppercase',
                                            color: '#ffffff',
                                            fontWeight: 400,
                                            letterSpacing: '0.1em',
                                            marginBottom: '1rem',
                                            fontFamily: 'Montserrat, sans-serif',
                                            fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
                                        }}
                                    >
                                        WATCH
                                    </p>
                                    <h2
                                        style={{
                                            fontFamily: 'Montserrat, sans-serif',
                                            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                                            fontWeight: 700,
                                            marginBottom: 'clamp(2rem, 4vw, 3rem)',
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
                                            EBL MASTERCLASS
                                        </span>
                                        <br />
                                        <span style={{ color: '#ffffff' }}>HIGHLIGHTS</span>
                                    </h2>

                                    {/* Embedded Video Player - plays inline */}
                                    <div
                                        style={{
                                            position: 'relative',
                                            width: '100%',
                                            maxWidth: '600px',
                                            background: '#000000',
                                            borderRadius: 'clamp(1.5rem, 3vw, 2rem)',
                                            padding: 'clamp(0.75rem, 1.5vw, 1rem)',
                                            border: '8px solid #1a1f2e',
                                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
                                            animation: 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: 'relative',
                                                borderRadius: 'clamp(1rem, 2vw, 1.5rem)',
                                                overflow: 'hidden',
                                                background: '#000000',
                                                aspectRatio: '16 / 9',
                                            }}
                                        >
                                            <iframe
                                                src="https://www.youtube.com/embed/HpjT2dqXFcM"
                                                style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    border: 'none',
                                                }}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                title="EBL Masterclass Highlights"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div
                                    style={{
                                        animation: 'slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                    }}
                                >
                                    <p
                                        style={{
                                            fontSize: 'clamp(0.95rem, 1.8vw, 1rem)',
                                            lineHeight: 1.8,
                                            color: 'rgba(255, 255, 255, 0.9)',
                                            fontFamily: 'Roboto, sans-serif',
                                            textAlign: 'justify',
                                        }}
                                    >
                                        Experience the energy and innovation that defines EBL Masterclass. This showcase captures the transformative journey of our participants as they learn, network, compete, and unlock new possibilities for their future.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* COUNTDOWN Section */}
                    <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 0' }}>
                        <div
                            style={{
                                maxWidth: '1280px',
                                margin: '0 auto',
                                padding: '0 clamp(1rem, 3vw, 2rem)',
                            }}
                        >
                            <CountdownSection />
                        </div>
                    </section>
                </div >

                {/* Animations & Responsive Styles */}
                < style > {`
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
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.05);
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scrollSpeakers {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .speakers-scroll-container:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .event-cards-grid {
            grid-template-columns: 1fr !important;
          }

          .about-event-grid {
            grid-template-columns: 1fr !important;
          }

          .why-attends-grid {
            grid-template-columns: 1fr !important;
          }

          .video-section-grid {
            grid-template-columns: 1fr !important;
          }

          .video-bottom-grid {
            grid-template-columns: 1fr !important;
          }

          .speakers-header-grid {
            grid-template-columns: 1fr !important;
          }

          .decorative-circle {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          section {
            padding: 3rem 0 !important;
          }
        }

        /* iPhone 17 and small screens optimization */
        @media (max-width: 430px) {
          .event-cards-grid,
          .about-event-grid,
          .why-attends-grid,
          .video-section-grid,
          .video-bottom-grid,
          .speakers-header-grid {
            gap: 1.5rem !important;
          }
        }

        /* Ultra-wide screens optimization */
        @media (min-width: 1920px) {
          section > div {
            max-width: 1600px !important;
          }
        }
      `}</style >
            </div >
        </>
    );
};

export default Home;



{/* SPEAKERS Section */ }
// <section
//     style={{
//         padding: 'clamp(3rem, 6vw, 6rem) 0',
//         position: 'relative',
//         overflow: 'hidden',
//     }}
// >
//     <div
//         style={{
//             maxWidth: '1280px',
//             margin: '0 auto',
//             padding: '0 clamp(1rem, 3vw, 2rem)',
//         }}
//     >
//         <div
//             style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
//                 gap: 'clamp(2rem, 4vw, 4rem)',
//                 alignItems: 'center',
//                 marginBottom: 'clamp(3rem, 5vw, 4rem)',
//             }}
//             className="speakers-header-grid"
//         >
//             <div>
//                 <p
//                     style={{
//                         textTransform: 'uppercase',
//                         color: '#ffffff',
//                         fontWeight: 400,
//                         letterSpacing: '0.1em',
//                         marginBottom: '1rem',
//                         fontFamily: 'Montserrat, sans-serif',
//                         fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
//                     }}
//                 >
//                     — MEET OUR SPEAKERS
//                 </p>
//                 <h2
//                     style={{
//                         fontFamily: 'Montserrat, sans-serif',
//                         fontSize: 'clamp(2rem, 5vw, 4rem)',
//                         fontWeight: 700,
//                         lineHeight: 1.2,
//                         marginBottom: 0,
//                     }}
//                 >
//                     <span
//                         style={{
//                             background: 'linear-gradient(135deg, #00a8e8 0%, #5fc2b8 100%)',
//                             WebkitBackgroundClip: 'text',
//                             WebkitTextFillColor: 'transparent',
//                             backgroundClip: 'text',
//                         }}
//                     >
//                         INSPIRING VOICES,
//                     </span>
//                     <br />
//                     <span style={{ color: '#ffffff' }}>EXPERT INSIGHTS</span>
//                 </h2>
//             </div>

//             <div>
//                 <p
//                     style={{
//                         fontSize: 'clamp(0.95rem, 1.8vw, 1rem)',
//                         lineHeight: 1.8,
//                         color: 'rgba(255, 255, 255, 0.9)',
//                         fontFamily: 'Roboto, sans-serif',
//                         marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
//                     }}
//                 >
//                     Learn from experienced entrepreneurs, business leaders, and industry professionals who share practical insights from their real-world journeys.
//                 </p>
//                 <button
//                     style={{
//                         display: 'inline-flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         padding: 'clamp(0.75rem, 1.5vw, 0.875rem) clamp(1.5rem, 3vw, 2rem)',
//                         fontFamily: 'Montserrat, sans-serif',
//                         fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
//                         fontWeight: 600,
//                         textDecoration: 'none',
//                         border: 'none',
//                         borderRadius: '9999px',
//                         cursor: 'pointer',
//                         transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//                         background: 'linear-gradient(135deg, #00a8e8 0%, #5fc2b8 100%)',
//                         color: '#ffffff',
//                         boxShadow: '0 0 20px rgba(0, 168, 232, 0.3)',
//                     }}
//                     onMouseEnter={(e) => {
//                         e.currentTarget.style.transform = 'translateY(-2px)';
//                         e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 168, 232, 0.5)';
//                     }}
//                     onMouseLeave={(e) => {
//                         e.currentTarget.style.transform = 'translateY(0)';
//                         e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 168, 232, 0.3)';
//                     }}
//                 >
//                     VIEW ALL SPEAKERS ›
//                 </button>
//             </div>
//         </div>

//         <div
//             style={{
//                 position: 'relative',
//                 overflow: 'hidden',
//                 margin: '0 -2rem',
//             }}
//         >
//             <div
//                 className="speakers-scroll-container"
//                 style={{
//                     display: 'flex',
//                     gap: 'clamp(1.5rem, 3vw, 2rem)',
//                     animation: 'scrollSpeakers 30s linear infinite',
//                     paddingLeft: '2rem',
//                 }}
//             >
//                 {[
//                     {
//                         name: 'Dr. Amina Ogunlesi',
//                         role: '<entrepreneur/>',
//                         image: '/assets/speakers/speaker-1.jpg',
//                     },
//                     {
//                         name: 'Chinedu Okeke',
//                         role: '<tech_founder/>',
//                         image: '/assets/speakers/speaker-2.jpg',
//                     },
//                     {
//                         name: 'Folake Adeyemi',
//                         role: '<business_leader/>',
//                         image: '/assets/speakers/speaker-3.jpg',
//                     },
//                     {
//                         name: 'Ibrahim Yusuf',
//                         role: '<investor/>',
//                         image: '/assets/speakers/speaker-4.jpg',
//                     },
//                     {
//                         name: 'Grace Nwosu',
//                         role: '<startup_coach/>',
//                         image: '/assets/speakers/speaker-5.jpg',
//                     },
//                     {
//                         name: 'Adekunle Williams',
//                         role: '<innovation_expert/>',
//                         image: '/assets/speakers/speaker-6.jpg',
//                     },
//                 ]
//                     .concat([
//                         {
//                             name: 'Dr. Amina Ogunlesi',
//                             role: '<entrepreneur/>',
//                             image: '/assets/speakers/speaker-1.jpg',
//                         },
//                         {
//                             name: 'Chinedu Okeke',
//                             role: '<tech_founder/>',
//                             image: '/assets/speakers/speaker-2.jpg',
//                         },
//                         {
//                             name: 'Folake Adeyemi',
//                             role: '<business_leader/>',
//                             image: '/assets/speakers/speaker-3.jpg',
//                         },
//                         {
//                             name: 'Ibrahim Yusuf',
//                             role: '<investor/>',
//                             image: '/assets/speakers/speaker-4.jpg',
//                         },
//                         {
//                             name: 'Grace Nwosu',
//                             role: '<startup_coach/>',
//                             image: '/assets/speakers/speaker-5.jpg',
//                         },
//                         {
//                             name: 'Adekunle Williams',
//                             role: '<innovation_expert/>',
//                             image: '/assets/speakers/speaker-6.jpg',
//                         },
//                     ])
//                     .map((speaker, index) => (
//                         <div
//                             key={index}
//                             style={{
//                                 position: 'relative',
//                                 width: 'clamp(240px, 30vw, 280px)',
//                                 height: 'clamp(300px, 40vw, 350px)',
//                                 flexShrink: 0,
//                                 borderRadius: '1rem',
//                                 overflow: 'hidden',
//                                 border: '2px solid rgba(0, 168, 232, 0.3)',
//                                 transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//                             }}
//                             onMouseEnter={(e) => {
//                                 e.currentTarget.style.transform = 'translateY(-10px)';
//                                 e.currentTarget.style.borderColor = '#00a8e8';
//                                 e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 168, 232, 0.4)';
//                             }}
//                             onMouseLeave={(e) => {
//                                 e.currentTarget.style.transform = 'translateY(0)';
//                                 e.currentTarget.style.borderColor = 'rgba(0, 168, 232, 0.3)';
//                                 e.currentTarget.style.boxShadow = 'none';
//                             }}
//                         >
//                             <img
//                                 src={speaker.image}
//                                 alt={speaker.name}
//                                 style={{
//                                     width: '100%',
//                                     height: '100%',
//                                     objectFit: 'cover',
//                                     filter: 'grayscale(100%)',
//                                     transition: 'filter 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//                                 }}
//                                 onMouseEnter={(e) => {
//                                     e.currentTarget.style.filter = 'grayscale(0%)';
//                                 }}
//                                 onMouseLeave={(e) => {
//                                     e.currentTarget.style.filter = 'grayscale(100%)';
//                                 }}
//                             />
//                             <div
//                                 style={{
//                                     position: 'absolute',
//                                     bottom: 0,
//                                     left: 0,
//                                     right: 0,
//                                     height: '50%',
//                                     background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.95) 100%)',
//                                     pointerEvents: 'none',
//                                 }}
//                             />
//                             <div
//                                 style={{
//                                     position: 'absolute',
//                                     bottom: 0,
//                                     left: 0,
//                                     right: 0,
//                                     padding: 'clamp(1rem, 2vw, 1.5rem)',
//                                 }}
//                             >
//                                 <p
//                                     style={{
//                                         fontFamily: 'Courier New, monospace',
//                                         fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
//                                         color: '#00a8e8',
//                                         marginBottom: '0.5rem',
//                                         fontWeight: 400,
//                                     }}
//                                 >
//                                     {speaker.role}
//                                 </p>
//                                 <h3
//                                     style={{
//                                         fontFamily: 'Montserrat, sans-serif',
//                                         fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
//                                         fontWeight: 700,
//                                         color: '#ffffff',
//                                         margin: 0,
//                                         lineHeight: 1.2,
//                                     }}
//                                 >
//                                     {speaker.name}
//                                 </h3>
//                             </div>
//                         </div>
//                     ))}
//             </div>
//         </div>
//     </div>
// </section>