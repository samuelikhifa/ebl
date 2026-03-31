// src/pages/BookTickets.tsx
import { useMemo, useState, type CSSProperties } from 'react';
import { Helmet } from 'react-helmet-async';

/*
  Supabase: align `registrants` columns with the insert() payload (snake_case), e.g.:

  create table public.registrants (
    id uuid primary key default gen_random_uuid(),
    full_name text not null,
    email text not null,
    email_address text,
    whatsapp_number text not null,
    phone_whatsapp text,
    class_level text not null,
    department text not null,
    faculty text not null,
    attended_ebl_before text not null,
    ebl_edition_attended text not null default '',
    previous_ebl_stood_out text not null default '',
    academy_interest text not null,
    academy_choice text,
    grand_finale_present text not null,
    expectations_from_ebl_8 text not null,
    created_at timestamptz default now()
  );

  alter table public.registrants enable row level security;
  create policy "anon insert" on public.registrants for insert to anon with check (true);
  create policy "anon select count" on public.registrants for select to anon using (true);
*/

const SUPABASE_URL = 'https://iettjeyfxrtpbpkffyeh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlldHRqZXlmeHJ0cGJwa2ZmeWVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3OTExMTAsImV4cCI6MjA5MDM2NzExMH0.mWf2MBg84fkJ3jQwgGhK_vC9IcVnj3ctsVu9rkZ5v4g';

/** Map Section 4 academy labels to WhatsApp group invite URLs (replace placeholders). */
const ACADEMY_WHATSAPP_LINKS: Record<string, string> = {
  'Employability Academy': 'https://chat.whatsapp.com/LxvIk09oh7QB5avwyvFoXt',
  'Business (Core) Academy': 'https://chat.whatsapp.com/LNdFpZJn50v0sMjw2hc9W8',
  'Advanced Business Class': 'https://chat.whatsapp.com/BmFiQ469R953ISZ3OUZ5hL',
  'Leadership Academy': 'https://chat.whatsapp.com/KYeOtHOHKNl5GSO3ioTSq6',
};

const CLASS_LEVEL_OPTIONS = ['100', '200', '300', '400', '500', '600', 'Other'] as const;

const ATTENDED_OPTIONS = ['Yes', 'No', 'Maybe'] as const;

const ACADEMY_INTEREST_OPTIONS = [
  'Employability Academy',
  'Business (Core) Academy',
  'Advanced Business Class',
  'Leadership Academy',
] as const;

const YES_NO = ['Yes', 'No'] as const;

const TOTAL_STEPS = 7;

export type EblRegistrationPayload = {
  email: string;
  full_name: string;
  class_level: string;
  department: string;
  faculty: string;
  attended_ebl_before: string;
  ebl_edition_attended: string;
  previous_ebl_stood_out: string;
  academy_interest: string;
  grand_finale_present: string;
  email_address: string;
  phone_whatsapp: string;
  expectations_from_ebl_8: string;
};

type FormState = {
  email: string;
  fullName: string;
  classLevel: string;
  department: string;
  faculty: string;
  attendedBefore: (typeof ATTENDED_OPTIONS)[number] | '';
  editionAttended: string;
  previousStoodOut: string;
  academyInterest: (typeof ACADEMY_INTEREST_OPTIONS)[number] | '';
  grandFinalePresent: (typeof YES_NO)[number] | '';
  phoneWhatsApp: string;
  expectations: string;
};

const emptyForm = (): FormState => ({
  email: '',
  fullName: '',
  classLevel: '',
  department: '',
  faculty: '',
  attendedBefore: '',
  editionAttended: '',
  previousStoodOut: '',
  academyInterest: '',
  grandFinalePresent: '',
  phoneWhatsApp: '',
  expectations: '',
});

function getSupabaseClient(): SupabaseBrowserClient {
  const w = window as unknown as {
    supabase?: { createClient: (url: string, key: string) => SupabaseBrowserClient };
  };
  if (!w.supabase?.createClient) {
    throw new Error('Supabase JS client not loaded. Ensure the CDN script is in index.html.');
  }
  return w.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

type SupabaseBrowserClient = {
  from: (table: string) => SupabaseTable;
};

type SupabaseTable = {
  select: (
    columns: string,
    options?: { count: 'exact'; head: boolean },
  ) => Promise<{ count: number | null; error: { message: string } | null }>;
  insert: (row: Record<string, unknown>) => Promise<{ error: { message: string } | null }>;
};

const inputStyle: CSSProperties = {
  width: '100%',
  boxSizing: 'border-box',
  padding: 'clamp(0.65rem, 1.5vw, 0.875rem) clamp(0.75rem, 2vw, 1rem)',
  fontFamily: 'Roboto, sans-serif',
  fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
  color: '#ffffff',
  background: 'rgba(255, 255, 255, 0.08)',
  border: '1px solid rgba(0, 168, 232, 0.35)',
  borderRadius: 'clamp(0.5rem, 1.2vw, 0.75rem)',
  outline: 'none',
};

const labelStyle: CSSProperties = {
  display: 'block',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
  fontWeight: 600,
  color: 'rgba(255, 255, 255, 0.95)',
  marginBottom: 'clamp(0.35rem, 1vw, 0.5rem)',
};

const fieldWrapStyle: CSSProperties = {
  marginBottom: 'clamp(1rem, 2.5vw, 1.25rem)',
};

const sectionTitleStyle: CSSProperties = {
  fontFamily: 'Montserrat, sans-serif',
  fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
  fontWeight: 700,
  color: '#ffffff',
  marginBottom: 'clamp(1rem, 2.5vw, 1.5rem)',
  paddingBottom: '0.75rem',
  borderBottom: '1px solid rgba(0, 168, 232, 0.35)',
};

function buildPayload(form: FormState): EblRegistrationPayload {
  return {
    email: form.email.trim(),
    full_name: form.fullName.trim(),
    class_level: form.classLevel,
    department: form.department.trim(),
    faculty: form.faculty.trim(),
    attended_ebl_before: form.attendedBefore,
    ebl_edition_attended: form.editionAttended.trim(),
    previous_ebl_stood_out: form.previousStoodOut.trim(),
    academy_interest: form.academyInterest,
    grand_finale_present: form.grandFinalePresent,
    email_address: form.email.trim(),
    phone_whatsapp: form.phoneWhatsApp.trim(),
    expectations_from_ebl_8: form.expectations.trim(),
  };
}

function validateStep(step: number, form: FormState): string | null {
  switch (step) {
    case 1:
      if (!form.email.trim()) return 'Email is required.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return 'Enter a valid email address.';
      return null;
    case 2:
      if (!form.fullName.trim()) return 'Full Name is required.';
      if (!form.classLevel) return 'Class / Level is required.';
      if (!form.department.trim()) return 'Department is required.';
      if (!form.faculty.trim()) return 'Faculty is required.';
      return null;
    case 3:
      if (!form.attendedBefore) return 'Please answer whether you have attended any EBL Masterclass before.';
      if (form.attendedBefore === 'Yes') {
        if (!form.editionAttended.trim()) {
          return 'If YES, which EBL Masterclass edition did you attend? is required.';
        }
        if (!form.previousStoodOut.trim()) {
          return 'What stood out for you from the previous EBL Masterclass? is required.';
        }
      }
      return null;
    case 4:
      if (!form.academyInterest) return 'Please select which academy you are interested in this time.';
      return null;
    case 5:
      if (!form.grandFinalePresent) return 'Will you be present at the EBL Grand Finale? is required.';
      return null;
    case 6:
      if (!form.email.trim()) return 'Email Address is required.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return 'Enter a valid email address.';
      if (!form.phoneWhatsApp.trim()) return 'Phone Number (WhatsApp) is required.';
      return null;
    case 7:
      // if (!form.expectations.trim()) return 'What are you expecting from EBL Masterclass 8.0? is required.';
      return null;
    default:
      return null;
  }
}

function validateAll(form: FormState): string | null {
  for (let s = 1; s <= TOTAL_STEPS; s++) {
    const err = validateStep(s, form);
    if (err) return err;
  }
  return null;
}

const BookTickets = () => {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [step, setStep] = useState(1);
  const [stepError, setStepError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const progressPercent = useMemo(() => (step / TOTAL_STEPS) * 100, [step]);

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const goNext = () => {
    setStepError(null);
    const err = validateStep(step, form);
    if (err) {
      setStepError(err);
      return;
    }
    setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  };

  const goPrev = () => {
    setStepError(null);
    setStep((s) => Math.max(1, s - 1));
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    const err = validateAll(form);
    if (err) {
      setSubmitError(err);
      return;
    }

    const payload = buildPayload(form);
    const waUrl = ACADEMY_WHATSAPP_LINKS[form.academyInterest];
    if (!waUrl) {
      setSubmitError('No WhatsApp link configured for the selected academy.');
      return;
    }

    setSubmitting(true);
    try {
      const client = getSupabaseClient();
      const { error } = await client.from('registrants').insert({
        full_name: payload.full_name,
        email: payload.email,
        email_address: payload.email_address,
        whatsapp_number: payload.phone_whatsapp,
        phone_whatsapp: payload.phone_whatsapp,
        class_level: payload.class_level,
        department: payload.department,
        faculty: payload.faculty,
        attended_ebl_before: payload.attended_ebl_before,
        ebl_edition_attended: payload.ebl_edition_attended,
        previous_ebl_stood_out: payload.previous_ebl_stood_out,
        academy_interest: payload.academy_interest,
        academy_choice: payload.academy_interest,
        grand_finale_present: payload.grand_finale_present,
        expectations_from_ebl_8: payload.expectations_from_ebl_8,
      });

      if (error) {
        setSubmitError(error.message);
        setSubmitting(false);
        return;
      }
      setSuccess(true);
      setSubmitting(false);
      window.setTimeout(() => {
        window.location.assign(waUrl);
      }, 2200);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong.');
      setSubmitting(false);
    }
  };

  const radioGroupStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 'clamp(0.5rem, 2vw, 0.75rem)',
  };

  const radioOptionStyle = (selected: boolean): CSSProperties => ({
    padding: 'clamp(0.5rem, 1.5vw, 0.65rem) clamp(0.85rem, 2vw, 1.1rem)',
    fontFamily: 'Roboto, sans-serif',
    fontSize: 'clamp(0.85rem, 1.6vw, 0.95rem)',
    color: '#ffffff',
    background: selected ? 'rgba(0, 168, 232, 0.25)' : 'rgba(255, 255, 255, 0.06)',
    border: selected ? '2px solid rgba(0, 168, 232, 0.7)' : '1px solid rgba(0, 168, 232, 0.3)',
    borderRadius: 'clamp(0.5rem, 1.2vw, 0.75rem)',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  });

  return (
    <>
      <Helmet>
        <title>Register | EBL Masterclass 8.0 – Book Your Ticket</title>
        <link rel="canonical" href="https://ebl.jcinuniben.com/BookTickets" />
        <meta
          name="description"
          content="Register for EBL Masterclass 8.0 by JCIN UNIBEN. Multi-step registration for employability, business, and leadership academies."
        />
        <meta property="og:url" content="https://ebl.jcinuniben.com/BookTickets" />
        <meta property="og:title" content="Register | EBL Masterclass 8.0" />
        <meta property="og:image" content="https://ebl.jcinuniben.com/ebllogo.webp" />
        <meta name="robots" content="index, follow" />
      </Helmet>
    <div style={{ fontFamily: 'Roboto, sans-serif', color: '#ffffff', position: 'relative' }}>
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

      <section
        style={{
          padding: 'clamp(2rem, 4vw, 3rem) 0',
          background: 'linear-gradient(180deg, #000000 0%, #0d1117 50%, #1a1f2e 100%)',
          position: 'relative',
        }}
      >
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
          </div>

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

            <div style={{ position: 'relative', zIndex: 1 }}>
              {success && (
                <div
                  role="status"
                  style={{
                    textAlign: 'center',
                    padding: 'clamp(1.5rem, 4vw, 2rem)',
                    marginBottom: '1rem',
                    background: 'rgba(0, 168, 232, 0.15)',
                    border: '1px solid rgba(0, 168, 232, 0.45)',
                    borderRadius: 'clamp(0.75rem, 2vw, 1rem)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
                      color: '#5fc2b8',
                      margin: 0,
                    }}
                  >
                    Registration submitted successfully! Redirecting you to your academy WhatsApp group…
                  </p>
                </div>
              )}

              {/* Progress */}
              <div style={{ marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '0.65rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
                      fontWeight: 600,
                      color: 'rgba(255, 255, 255, 0.9)',
                    }}
                  >
                    Section {step} of {TOTAL_STEPS}
                  </span>
                  <span style={{ fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)', color: 'rgba(255,255,255,0.55)' }}>
                    {Math.round(progressPercent)}% complete
                  </span>
                </div>
                <div
                  style={{
                    height: '8px',
                    borderRadius: '9999px',
                    background: 'rgba(255,255,255,0.1)',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${(step / TOTAL_STEPS) * 100}%`,
                      maxWidth: '100%',
                      background: 'linear-gradient(90deg, #00a8e8 0%, #5fc2b8 100%)',
                      borderRadius: '9999px',
                      transition: 'width 0.35s ease',
                    }}
                  />
                </div>
              </div>

              <form
                onSubmit={step === TOTAL_STEPS ? handleFinalSubmit : (e) => e.preventDefault()}
                noValidate
              >
                {/* SECTION 1 */}
                {step === 1 && (
                  <div>
                    <h3 style={sectionTitleStyle}>SECTION 1: Registration</h3>
                    <div style={fieldWrapStyle}>
                      <label htmlFor="reg_email" style={labelStyle}>
                        Email <span style={{ color: '#f4b942' }}>*</span>
                      </label>
                      <input
                        id="reg_email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        style={inputStyle}
                      />
                    </div>
                  </div>
                )}

                {/* SECTION 2 */}
                {step === 2 && (
                  <div>
                    <h3 style={sectionTitleStyle}>SECTION 2: Personal Information</h3>
                    <div style={fieldWrapStyle}>
                      <label htmlFor="full_name" style={labelStyle}>
                        Full Name <span style={{ color: '#f4b942' }}>*</span>
                      </label>
                      <input
                        id="full_name"
                        name="full_name"
                        type="text"
                        autoComplete="name"
                        value={form.fullName}
                        onChange={(e) => updateField('fullName', e.target.value)}
                        style={inputStyle}
                      />
                    </div>
                    <div style={fieldWrapStyle}>
                      <label htmlFor="class_level" style={labelStyle}>
                        Class / Level <span style={{ color: '#f4b942' }}>*</span>
                      </label>
                      <select
                        id="class_level"
                        name="class_level"
                        value={form.classLevel}
                        onChange={(e) => updateField('classLevel', e.target.value)}
                        style={{ ...inputStyle, cursor: 'pointer' }}
                      >
                        <option value="">Select class / level</option>
                        {CLASS_LEVEL_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div style={fieldWrapStyle}>
                      <label htmlFor="department" style={labelStyle}>
                        Department <span style={{ color: '#f4b942' }}>*</span>
                      </label>
                      <input
                        id="department"
                        name="department"
                        type="text"
                        value={form.department}
                        onChange={(e) => updateField('department', e.target.value)}
                        style={inputStyle}
                      />
                    </div>
                    <div style={fieldWrapStyle}>
                      <label htmlFor="faculty" style={labelStyle}>
                        Faculty <span style={{ color: '#f4b942' }}>*</span>
                      </label>
                      <input
                        id="faculty"
                        name="faculty"
                        type="text"
                        value={form.faculty}
                        onChange={(e) => updateField('faculty', e.target.value)}
                        style={inputStyle}
                      />
                    </div>
                  </div>
                )}

                {/* SECTION 3 */}
                {step === 3 && (
                  <div>
                    <h3 style={sectionTitleStyle}>SECTION 3: EBL Masterclass Experience</h3>
                    <div style={fieldWrapStyle}>
                      <span style={labelStyle}>
                        Have you attended any EBL Masterclass before? <span style={{ color: '#f4b942' }}>*</span>
                      </span>
                      <div style={radioGroupStyle} role="radiogroup" aria-label="Attended EBL before">
                        {ATTENDED_OPTIONS.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => updateField('attendedBefore', opt)}
                            style={radioOptionStyle(form.attendedBefore === opt)}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                    {form.attendedBefore === 'Yes' && (
                      <>
                        <div style={fieldWrapStyle}>
                          <label htmlFor="edition_attended" style={labelStyle}>
                            If YES, which EBL Masterclass edition did you attend?{' '}
                            <span style={{ color: '#f4b942' }}>*</span>
                          </label>
                          <input
                            id="edition_attended"
                            name="edition_attended"
                            type="text"
                            value={form.editionAttended}
                            onChange={(e) => updateField('editionAttended', e.target.value)}
                            style={inputStyle}
                          />
                        </div>
                        <div style={fieldWrapStyle}>
                          <label htmlFor="stood_out" style={labelStyle}>
                            What stood out for you from the previous EBL Masterclass?{' '}
                            <span style={{ color: '#f4b942' }}>*</span>
                          </label>
                          <textarea
                            id="stood_out"
                            name="stood_out"
                            rows={4}
                            value={form.previousStoodOut}
                            onChange={(e) => updateField('previousStoodOut', e.target.value)}
                            style={{
                              ...inputStyle,
                              resize: 'vertical',
                              minHeight: '100px',
                            }}
                          />
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* SECTION 4 */}
                {step === 4 && (
                  <div>
                    <h3 style={sectionTitleStyle}>SECTION 4: EBL Academy Interest</h3>
                    <div style={fieldWrapStyle}>
                      <label htmlFor="academy_interest" style={labelStyle}>
                        Which academy are you interested in this time?{' '}
                        <span style={{ color: '#f4b942' }}>*</span>
                      </label>
                      <select
                        id="academy_interest"
                        name="academy_interest"
                        value={form.academyInterest}
                        onChange={(e) =>
                          updateField(
                            'academyInterest',
                            e.target.value as FormState['academyInterest'],
                          )
                        }
                        style={{ ...inputStyle, cursor: 'pointer' }}
                      >
                        <option value="">Select an academy</option>
                        {ACADEMY_INTEREST_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* SECTION 5 */}
                {step === 5 && (
                  <div>
                    <h3 style={sectionTitleStyle}>SECTION 5: Event Commitment</h3>
                    <div style={fieldWrapStyle}>
                      <span style={labelStyle}>
                        Will you be present at the EBL Grand Finale? <span style={{ color: '#f4b942' }}>*</span>
                      </span>
                      <div style={radioGroupStyle} role="radiogroup" aria-label="Grand Finale attendance">
                        {YES_NO.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => updateField('grandFinalePresent', opt)}
                            style={radioOptionStyle(form.grandFinalePresent === opt)}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* SECTION 6 */}
                {step === 6 && (
                  <div>
                    <h3 style={sectionTitleStyle}>SECTION 6: Contact Information</h3>
                    <div style={fieldWrapStyle}>
                      <label htmlFor="contact_email" style={labelStyle}>
                        Email Address <span style={{ color: '#f4b942' }}>*</span>
                      </label>
                      <input
                        id="contact_email"
                        name="contact_email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        style={inputStyle}
                      />
                    </div>
                    <div style={fieldWrapStyle}>
                      <label htmlFor="phone_whatsapp" style={labelStyle}>
                        Phone Number (WhatsApp) <span style={{ color: '#f4b942' }}>*</span>
                      </label>
                      <input
                        id="phone_whatsapp"
                        name="phone_whatsapp"
                        type="tel"
                        autoComplete="tel"
                        placeholder="e.g. +234 800 000 0000"
                        value={form.phoneWhatsApp}
                        onChange={(e) => updateField('phoneWhatsApp', e.target.value)}
                        style={inputStyle}
                      />
                    </div>
                  </div>
                )}

                {/* SECTION 7 */}
                {step === 7 && (
                  <div>
                    <h3 style={sectionTitleStyle}>SECTION 7: Expectations</h3>
                    <div style={fieldWrapStyle}>
                      <label htmlFor="expectations" style={labelStyle}>
                        What are you expecting from EBL Masterclass 8.0? <span style={{ color: '#f4b942' }}>*</span>
                      </label>
                      <textarea
                        id="expectations"
                        name="expectations"
                        rows={5}
                        value={form.expectations}
                        onChange={(e) => updateField('expectations', e.target.value)}
                        style={{
                          ...inputStyle,
                          resize: 'vertical',
                          minHeight: '120px',
                        }}
                      />
                    </div>
                  </div>
                )}

                {(stepError || submitError) && (
                  <p
                    role="alert"
                    style={{
                      color: '#ffb4b4',
                      fontSize: 'clamp(0.875rem, 1.6vw, 1rem)',
                      marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
                      lineHeight: 1.5,
                    }}
                  >
                    {submitError ?? stepError}
                  </p>
                )}

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 'clamp(0.75rem, 2vw, 1rem)',
                    justifyContent: 'space-between',
                    marginTop: 'clamp(1.25rem, 3vw, 1.75rem)',
                  }}
                >
                  <button
                    type="button"
                    onClick={goPrev}
                    disabled={step === 1 || submitting || success}
                    style={{
                      padding: 'clamp(0.75rem, 2vw, 0.9rem) clamp(1.25rem, 3vw, 1.75rem)',
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                      fontWeight: 600,
                      color: '#ffffff',
                      background:
                        step === 1 || submitting || success ? 'rgba(255,255,255,0.08)' : 'rgba(255, 255, 255, 0.12)',
                      border: '1px solid rgba(0, 168, 232, 0.4)',
                      borderRadius: '9999px',
                      cursor: step === 1 || submitting || success ? 'not-allowed' : 'pointer',
                      opacity: step === 1 || submitting || success ? 0.5 : 1,
                    }}
                  >
                    Previous
                  </button>

                  {step < TOTAL_STEPS ? (
                    <button
                      type="button"
                      onClick={goNext}
                      disabled={submitting || success}
                      style={{
                        marginLeft: 'auto',
                        padding: 'clamp(0.75rem, 2vw, 0.9rem) clamp(1.5rem, 4vw, 2rem)',
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                        fontWeight: 600,
                        color: '#ffffff',
                        background: 'linear-gradient(135deg, #00a8e8 0%, #5fc2b8 100%)',
                        border: 'none',
                        borderRadius: '9999px',
                        cursor: submitting || success ? 'not-allowed' : 'pointer',
                        boxShadow: '0 0 20px rgba(0, 168, 232, 0.3)',
                      }}
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={submitting || success}
                      style={{
                        marginLeft: 'auto',
                        padding: 'clamp(0.75rem, 2vw, 0.9rem) clamp(1.5rem, 4vw, 2rem)',
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                        fontWeight: 600,
                        color: '#ffffff',
                        background: 'linear-gradient(135deg, #00a8e8 0%, #5fc2b8 100%)',
                        border: 'none',
                        borderRadius: '9999px',
                        cursor: submitting || success ? 'wait' : 'pointer',
                        opacity: success ? 0.6 : 1,
                        boxShadow: '0 0 20px rgba(0, 168, 232, 0.3)',
                      }}
                    >
                      {submitting ? 'Submitting…' : 'Submit registration'}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
    </>
  );
};

export default BookTickets;
