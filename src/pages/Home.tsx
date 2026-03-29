import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { OptimizedImage } from '../components/ui/OptimizedImage';

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
                {(Object.entries(timeLeft) as [keyof typeof timeLeft, number][]).map(([unit, value]) => (
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
                <link rel="canonical" href="https://ebl.jcinuniben.com/" />

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
                <meta property="og:url" content="https://ebl.jcinuniben.com/" />
                <meta property="og:image" content="https://ebl.jcinuniben.com/ebllogo.webp" />
                <meta property="og:locale" content="en_NG" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="EBL Masterclass 8.0 | JCIN UNIBEN" />
                <meta name="twitter:image" content="https://ebl.jcinuniben.com/ebllogo.webp" />
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
                        <OptimizedImage
                            src={img5}
                            alt="EBL Masterclass conference audience at a JCIN UNIBEN session"
                            priority
                            sizes="100vw"
                            width={1920}
                            height={1080}
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
                                    onMouseEnter={(e: MouseEvent<HTMLElement>) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 168, 232, 0.3)';
                                        e.currentTarget.style.borderColor = '#00a8e8';
                                    }}
                                    onMouseLeave={(e: MouseEvent<HTMLElement>) => {
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
                                            onMouseEnter={(e: MouseEvent<HTMLElement>) => {
                                                e.currentTarget.style.transform = 'scale(1.1) rotate(45deg)';
                                                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 168, 232, 0.6)';
                                            }}
                                            onMouseLeave={(e: MouseEvent<HTMLElement>) => {
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
                                    onMouseEnter={(e: MouseEvent<HTMLElement>) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 168, 232, 0.3)';
                                        e.currentTarget.style.borderColor = '#00a8e8';
                                    }}
                                    onMouseLeave={(e: MouseEvent<HTMLElement>) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    }}
                                >
                                    <div style={{ position: 'relative', height: 'clamp(200px, 30vw, 250px)', overflow: 'hidden' }}>
                                        <OptimizedImage
                                            src={ebl9}
                                            alt="Lagos event location — EBL Masterclass"
                                            sizes="(max-width: 768px) 100vw, min(900px, 100vw)"
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
                                            onMouseEnter={(e: MouseEvent<HTMLElement>) => {
                                                e.currentTarget.style.transform = 'scale(1.1) rotate(45deg)';
                                                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 168, 232, 0.6)';
                                            }}
                                            onMouseLeave={(e: MouseEvent<HTMLElement>) => {
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
                                        // onMouseEnter={(e: MouseEvent<HTMLElement>) => {
                                        //     e.currentTarget.style.background = 'rgba(0, 168, 232, 0.1)';
                                        //     e.currentTarget.style.transform = 'scale(1.05)';
                                        // }}
                                        // onMouseLeave={(e: MouseEvent<HTMLElement>) => {
                                        //     e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                        //     e.currentTarget.style.transform = 'scale(1)';
                                        // }}
                                        >
                                            <OptimizedImage
                                                src={partner.logo}
                                                alt={`${partner.name} partner logo`}
                                                sizes="(max-width: 480px) 80px, 120px"
                                                width={160}
                                                height={100}
                                                style={{
                                                    height: 'clamp(60px, 18vw, 100px)',
                                                    maxHeight: '90px',
                                                    width: 'auto',
                                                    maxWidth: 'min(100%, 200px)',
                                                    objectFit: 'contain',
                                                    filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))',
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
                                            <OptimizedImage
                                                src={img4}
                                                alt="EBL Masterclass workshop session in session"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                                }}
                                                onMouseEnter={(e: MouseEvent<HTMLImageElement>) => {
                                                    e.currentTarget.style.transform = 'scale(1.1)';
                                                }}
                                                onMouseLeave={(e: MouseEvent<HTMLImageElement>) => {
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
                                            <OptimizedImage
                                                src={ebl17}
                                                alt="Networking session at EBL Masterclass"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                                }}
                                                onMouseEnter={(e: MouseEvent<HTMLImageElement>) => {
                                                    e.currentTarget.style.transform = 'scale(1.1)';
                                                }}
                                                onMouseLeave={(e: MouseEvent<HTMLImageElement>) => {
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
                                            <OptimizedImage
                                                src={ebl2}
                                                alt="Team collaboration at EBL Masterclass"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                                }}
                                                onMouseEnter={(e: MouseEvent<HTMLImageElement>) => {
                                                    e.currentTarget.style.transform = 'scale(1.1)';
                                                }}
                                                onMouseLeave={(e: MouseEvent<HTMLImageElement>) => {
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
                                            <OptimizedImage
                                                src={img3}
                                                alt="EBL Masterclass participants"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                                }}
                                                onMouseEnter={(e: MouseEvent<HTMLImageElement>) => {
                                                    e.currentTarget.style.transform = 'scale(1.1)';
                                                }}
                                                onMouseLeave={(e: MouseEvent<HTMLImageElement>) => {
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
                                        onMouseEnter={(e: MouseEvent<HTMLElement>) => {
                                            e.currentTarget.style.transform = 'translateY(-8px)';
                                            e.currentTarget.style.borderColor = '#00a8e8';
                                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 168, 232, 0.3)';
                                        }}
                                        onMouseLeave={(e: MouseEvent<HTMLElement>) => {
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
                                            <OptimizedImage
                                                src={card.image}
                                                alt={card.title}
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                                }}
                                                onMouseEnter={(e: MouseEvent<HTMLImageElement>) => {
                                                    e.currentTarget.style.transform = 'scale(1.1)';
                                                }}
                                                onMouseLeave={(e: MouseEvent<HTMLImageElement>) => {
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
//                     onMouseEnter={(e: MouseEvent<HTMLElement>) => {
//                         e.currentTarget.style.transform = 'translateY(-2px)';
//                         e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 168, 232, 0.5)';
//                     }}
//                     onMouseLeave={(e: MouseEvent<HTMLElement>) => {
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
//                             onMouseEnter={(e: MouseEvent<HTMLElement>) => {
//                                 e.currentTarget.style.transform = 'translateY(-10px)';
//                                 e.currentTarget.style.borderColor = '#00a8e8';
//                                 e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 168, 232, 0.4)';
//                             }}
//                             onMouseLeave={(e: MouseEvent<HTMLElement>) => {
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
//                                 onMouseEnter={(e: MouseEvent<HTMLElement>) => {
//                                     e.currentTarget.style.filter = 'grayscale(0%)';
//                                 }}
//                                 onMouseLeave={(e: MouseEvent<HTMLElement>) => {
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