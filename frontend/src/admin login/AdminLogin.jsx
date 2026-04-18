import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [activeRole, setActiveRole] = useState('admin');
  const [fieldErrors, setFieldErrors] = useState({ username: false, password: false });
  const navigate = useNavigate();
  const usernameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setFieldErrors({ username: false, password: false });

    if (!username && !password) {
      setError('Please enter your username and password.');
      setFieldErrors({ username: true, password: true });
      return;
    }
    if (!username) {
      setError('Username is required.');
      setFieldErrors({ username: true, password: false });
      return;
    }
    if (!password) {
      setError('Password is required.');
      setFieldErrors({ username: false, password: true });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (username === 'admin' && password === 'admin123') {
        setLoading(false);
        setSuccess(true);
        setTimeout(() => navigate('/dashboard'), 1200);
      } else {
        setLoading(false);
        setError('Invalid credentials. Please check your username and password.');
        setFieldErrors({ username: true, password: true });
        setPassword('');
      }
    }, 1400);
  };

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=DM+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Animated Background */}
      <div className="login-bg">
        <div className="bg-grid" />
        <div className="bg-accent-bar" />
      </div>

      <div className="login-wrapper">
        {/* ── Left Panel ── */}
        <div className="login-left">
          <div className="brand-logo">
            <div className="brand-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="6" width="18" height="13" rx="2" stroke="white" strokeWidth="1.6"/>
                <path d="M7 11h10M7 14h6" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
                <path d="M8 6V5a1 1 0 011-1h6a1 1 0 011 1v1" stroke="white" strokeWidth="1.6"/>
              </svg>
            </div>
            <div>
              <div className="brand-name">PayrollPro</div>
              <div className="brand-tagline">Enterprise Edition</div>
            </div>
          </div>

          <div className="left-hero">
            <div className="left-eyebrow">
              <div className="eyebrow-dot" />
              <span className="eyebrow-text">Payroll Intelligence Platform</span>
            </div>

            <h1 className="left-heading">
              Automate your<br />
              <em>payroll</em> with<br />
              precision
            </h1>

            <p className="left-desc">
              Streamline intern salary processing, attendance tracking,
              and salary slip generation — all from one secure dashboard.
            </p>

            <div className="stats-row" style={{ marginBottom: 48 }}>
              <div className="stat-item">
                <div className="stat-value">100<span>%</span></div>
                <div className="stat-label">Automated</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">0<span>s</span></div>
                <div className="stat-label">Manual errors</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">∞</div>
                <div className="stat-label">Scalable</div>
              </div>
            </div>

            <div className="feature-list">
              {[
                'Automated salary slip generation',
                'Real-time attendance tracking',
                'Role-based access control',
                'Monthly payroll statistics dashboard',
              ].map((f) => (
                <div className="feature-item" key={f}>
                  <div className="feature-check">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="#10B981" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div className="left-footer">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <rect x="1" y="5" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M3.5 5V3.5a2.5 2.5 0 015 0V5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            Secured with end-to-end encryption · © 2025 PayrollPro
          </div>
        </div>

        {/* ── Right Panel — Form ── */}
        <div className="login-right">
          <div className="login-card">

            {/* Mobile brand */}
            <div className="mobile-brand">
              <div className="brand-icon" style={{ width: 38, height: 38, borderRadius: 10 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="6" width="18" height="13" rx="2" stroke="white" strokeWidth="1.6"/>
                  <path d="M7 11h10M7 14h6" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
                  <path d="M8 6V5a1 1 0 011-1h6a1 1 0 011 1v1" stroke="white" strokeWidth="1.6"/>
                </svg>
              </div>
              <span className="mobile-brand-name">PayrollPro</span>
            </div>

            <div className="form-header">
              <h2 className="form-title">Welcome back</h2>
              <p className="form-subtitle">Sign in to your admin account to continue</p>
            </div>

            {/* Role selector */}
            <div className="role-selector">
              {['admin', 'hr', 'finance'].map((role) => (
                <button
                  key={role}
                  className={`role-btn${activeRole === role ? ' active' : ''}`}
                  onClick={() => { setActiveRole(role); setError(''); setFieldErrors({ username: false, password: false }); }}
                  type="button"
                >
                  {role.charAt(0).toUpperCase() + role.slice(1)}
                </button>
              ))}
            </div>

            {/* Error */}
            <div className={`form-error${error ? ' show' : ''}`}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" flexShrink="0">
                <circle cx="7" cy="7" r="6" stroke="#EF4444" strokeWidth="1.4"/>
                <path d="M7 4v3.5M7 9.5v.5" stroke="#EF4444" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              {error}
            </div>

            <form onSubmit={handleSubmit} noValidate>
              {/* Username */}
              <div className="field-group">
                <div className="field-label">
                  <span>Username</span>
                </div>
                <div className="field-wrap">
                  <div className="field-icon">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <circle cx="7.5" cy="5" r="3" stroke="currentColor" strokeWidth="1.3"/>
                      <path d="M1.5 13.5c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <input
                    ref={usernameRef}
                    type="text"
                    className={`field-input${fieldErrors.username ? ' error' : ''}`}
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => { setUsername(e.target.value); setError(''); setFieldErrors(p => ({ ...p, username: false })); }}
                    autoComplete="username"
                    autoFocus
                  />
                </div>
              </div>

              {/* Password */}
              <div className="field-group">
                <div className="field-label">
                  <span>Password</span>
                  <a href="#">Forgot password?</a>
                </div>
                <div className="field-wrap">
                  <div className="field-icon">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <rect x="2.5" y="6.5" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                      <path d="M4.5 6.5V4.5a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className={`field-input${fieldErrors.password ? ' error' : ''}`}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setError(''); setFieldErrors(p => ({ ...p, password: false })); }}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="eye-btn"
                    onClick={() => setShowPassword(v => !v)}
                    tabIndex={-1}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M2 2l12 12M6.5 6.6A2 2 0 0011 9.4M4.2 4.3C2.8 5.3 1.8 6.7 1.5 8c.8 3.1 3.8 5 6.5 5 1.2 0 2.3-.3 3.3-.9M6 3.2A7 7 0 018 3c2.7 0 5.7 1.9 6.5 5-.3 1-.8 2-1.6 2.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M1.5 8c.8-3.1 3.8-5 6.5-5s5.7 1.9 6.5 5c-.8 3.1-3.8 5-6.5 5S2.3 11.1 1.5 8z" stroke="currentColor" strokeWidth="1.3"/>
                        <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.3"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Remember */}
              <div className="remember-row">
                <label className="checkbox-wrap">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  <div className="checkbox-custom">
                    <svg className="checkbox-check" width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </label>
                <span
                  className="remember-label"
                  onClick={() => setRemember(v => !v)}
                >
                  Keep me signed in for 30 days
                </span>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className={`submit-btn${loading ? ' loading' : ''}${success ? ' success' : ''}`}
              >
                <div className="btn-spinner" />
                <span className="btn-text">
                  {success ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }}>
                        <path d="M3 8l3.5 3.5L13 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Access granted
                    </>
                  ) : loading ? 'Verifying credentials…' : 'Sign in to dashboard'}
                </span>
                {!loading && !success && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            </form>

            <div className="form-divider">
              <div className="divider-line" />
              <span className="divider-text">Secure access</span>
              <div className="divider-line" />
            </div>

            <div className="security-row">
              <div className="sec-badge"><div className="sec-dot" /> SSL Encrypted</div>
              <div className="sec-badge"><div className="sec-dot" /> Role-based</div>
              <div className="sec-badge"><div className="sec-dot" /> Session protected</div>
            </div>

            <div className="card-footer">
              Authorized personnel only · Unauthorized access is prohibited<br />
              © 2025 PayrollPro · HR &amp; Payroll Management System
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;