import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const employees = [
  { name: 'Rahul Sharma',    initials: 'RS', position: 'Data Analyst',      age: 25, status: 'Permanent', id: 'EMP-001' },
  { name: 'Vinita Kulkarni', initials: 'VK', position: 'HR Manager',        age: 27, status: 'Permanent', id: 'EMP-002' },
  { name: 'Suyash Khapre',   initials: 'SK', position: 'Junior Developer',  age: 23, status: 'Intern',    id: 'INT-003' },
  { name: 'Nikhil Joshi',    initials: 'NJ', position: 'Senior Developer',  age: 30, status: 'Permanent', id: 'EMP-004' },
  { name: 'Rutika Patil',    initials: 'RP', position: 'HR Executive',      age: 26, status: 'Permanent', id: 'EMP-005' },
  { name: 'Atharv Deshmukh', initials: 'AD', position: 'Junior Developer',  age: 24, status: 'Intern',    id: 'INT-006' },
];

const navItems = [
  {
    label: 'Dashboard', path: '/dashboard', badge: null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1" y="1" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="10" y="1" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="1" y="10" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="10" y="10" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    )
  },
  {
    label: 'Employees', path: '/employees', badge: '52',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M12 15v-1.5A3 3 0 009 10.5H4.5a3 3 0 00-3 3V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="6.75" cy="5.25" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16.5 15v-1.5a3 3 0 00-2.25-2.9M12 3.1a3 3 0 010 5.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    label: 'Payroll', path: '/payroll', badge: null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1.5" y="3" width="15" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 9h8M5 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M5.5 3V2M12.5 3V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    label: 'Calendar', path: '/calendar', badge: null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1.5" y="3" width="15" height="13.5" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 1.5V4.5M6 1.5V4.5M1.5 7.5H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    label: 'Company', path: '/company', badge: null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2 16V6a2 2 0 012-2h10a2 2 0 012 2v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M1 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 16v-5h4v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 8h1M11 8h1M6 11h1M11 11h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
];

function Dashboard() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState('/dashboard');

  const today = new Date().toLocaleDateString('en-IN', {
    weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
  });

  const handleNav = (path) => {
    setActiveNav(path);
    navigate(path);
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,600&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

      <div className="dashboard-container">
        {/* Background */}
        <div className="dash-bg-orb1" />
        <div className="dash-bg-orb2" />
        <div className="dash-bg-grid" />

        {/* ── Top Header ── */}
        <header className="top-header">
          <div className="header-top-bar" />

          <div className="header-brand">
            <div className="header-brand-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="6" width="18" height="13" rx="2" stroke="white" strokeWidth="1.6"/>
                <path d="M7 11h10M7 14h6" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
                <path d="M8 6V5a1 1 0 011-1h6a1 1 0 011 1v1" stroke="white" strokeWidth="1.6"/>
              </svg>
            </div>
            <div>
              <div className="header-brand-name">PayrollPro</div>
              <div className="header-brand-tag">IPS Technologies</div>
            </div>
          </div>

          <div className="header-center">
            <span className="header-title">
              <strong>Payroll</strong> Management System
            </span>

            <div className="header-search">
              <div className="header-search-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M10 10l2.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
              </div>
              <input placeholder="Search employees, payroll…" />
            </div>
          </div>

          <div className="header-actions">
            <div className="header-btn" title="Notifications">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1.5A4.5 4.5 0 003.5 6v2.5L2 10h12l-1.5-1.5V6A4.5 4.5 0 008 1.5z" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M6.5 12a1.5 1.5 0 003 0" stroke="currentColor" strokeWidth="1.3"/>
              </svg>
              <div className="notif-dot" />
            </div>

            <div className="header-btn" title="Settings" onClick={() => handleNav('/settings')}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.2 3.2l1.4 1.4M11.4 11.4l1.4 1.4M3.2 12.8l1.4-1.4M11.4 4.6l1.4-1.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
            </div>

            <div className="header-avatar" title="Admin">AD</div>
          </div>
        </header>

        {/* ── Sidebar ── */}
        <aside className="sidebar">
          <div className="sidebar-section-label">Main Menu</div>

          {navItems.map((item) => (
            <div
              key={item.path}
              className={`sidebar-item${activeNav === item.path ? ' active' : ''}`}
              onClick={() => handleNav(item.path)}
            >
              <div className="sidebar-icon">{item.icon}</div>
              <span>{item.label}</span>
              {item.badge && <div className="sidebar-badge">{item.badge}</div>}
            </div>
          ))}

          <div className="sidebar-spacer" />

          <div
            className={`sidebar-item${activeNav === '/settings' ? ' active' : ''}`}
            onClick={() => handleNav('/settings')}
          >
            <div className="sidebar-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M9 1.5v2M9 14.5v2M1.5 9h2M14.5 9h2M3.7 3.7l1.4 1.4M12.9 12.9l1.4 1.4M3.7 14.3l1.4-1.4M12.9 5.1l1.4-1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span>Settings</span>
          </div>

          <div className="sidebar-footer">
            <div className="sidebar-user-avatar">A</div>
            <div>
              <div className="sidebar-user-name">Admin</div>
              <div className="sidebar-user-role">Super Admin</div>
            </div>
          </div>
        </aside>

        {/* ── Main Content ── */}
        <main className="main-content">

          {/* Page Header */}
          <div className="page-header">
            <div className="page-header-left">
              <h1 className="page-title">Dashboard</h1>
              <p className="page-subtitle">Welcome back, Admin — here's what's happening today</p>
            </div>
            <div className="page-date">
              <div className="date-dot" />
              {today}
            </div>
          </div>

          {/* ── Stats Cards ── */}
          <div className="stats-container">
            <div className="stats-card">
              <div className="stats-card-top">
                <div className="stats-icon-wrap blue">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M12 15v-1.5A3 3 0 009 10.5H4.5a3 3 0 00-3 3V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="6.75" cy="5.25" r="3" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div className="stats-trend up">↑ 4%</div>
              </div>
              <div className="stats-number">52</div>
              <div className="stats-title">Total Employees</div>
              <div className="stats-label">Active this month</div>
            </div>

            <div className="stats-card">
              <div className="stats-card-top">
                <div className="stats-icon-wrap green">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="1.5" y="3" width="15" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M5 9h8M5 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="stats-trend up">↑ 12%</div>
              </div>
              <div className="stats-number">₹4.2L</div>
              <div className="stats-title">Monthly Payroll</div>
              <div className="stats-label">April 2025 processed</div>
            </div>

            <div className="stats-card">
              <div className="stats-card-top">
                <div className="stats-icon-wrap amber">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M9 5v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="stats-trend neutral">→ 0%</div>
              </div>
              <div className="stats-number">8</div>
              <div className="stats-title">Active Interns</div>
              <div className="stats-label">2 ending this month</div>
            </div>

            <div className="stats-card">
              <div className="stats-card-top">
                <div className="stats-icon-wrap red">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 1.5L1.5 16.5h15L9 1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M9 7.5v3.5M9 13v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="stats-trend down">↑ 17</div>
              </div>
              <div className="stats-number">17</div>
              <div className="stats-title">Resigned</div>
              <div className="stats-label">Since Jan 2025</div>
            </div>
          </div>

          {/* ── Bottom Grid ── */}
          <div className="bottom-grid">

            {/* Employee Table */}
            <div className="employee-list-section">
              <div className="employee-list-header">
                <h2>Employee List</h2>
                <div className="list-header-right">
                  <button className="filter-btn">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M1 3h10M3 6h6M5 9h2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                    Filter
                  </button>
                  <button className="see-all-btn" onClick={() => handleNav('/EmployeesList')}>
                    See all
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              <table className="employee-table">
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Position</th>
                    <th>Age</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((emp, i) => (
                    <tr key={i} onClick={() => navigate(`/employee/${i}`)}>
                      <td>
                        <div className="emp-name-cell">
                          <div className={`emp-avatar av${i}`}>{emp.initials}</div>
                          <div>
                            <div className="emp-name">{emp.name}</div>
                            <div className="emp-id">{emp.id}</div>
                          </div>
                        </div>
                      </td>
                      <td>{emp.position}</td>
                      <td>{emp.age}</td>
                      <td>
                        <span className={`status-badge ${emp.status.toLowerCase()}`}>
                          <span className="status-dot" />
                          {emp.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Right Panel */}
            <div className="right-panel">

              {/* Payroll Summary */}
              <div className="quick-card">
                <div className="quick-card-title">Payroll Summary</div>
                <div className="payroll-month">April 2025</div>

                <div className="payroll-bar-wrap">
                  <div className="payroll-bar-label">
                    <span>Processed</span>
                    <span>87%</span>
                  </div>
                  <div className="payroll-bar">
                    <div className="payroll-bar-fill" style={{ width: '87%' }} />
                  </div>
                </div>

                <div className="payroll-bar-wrap">
                  <div className="payroll-bar-label">
                    <span>Attendance</span>
                    <span>92%</span>
                  </div>
                  <div className="payroll-bar">
                    <div className="payroll-bar-fill green" style={{ width: '92%' }} />
                  </div>
                </div>

                <div className="payroll-bar-wrap">
                  <div className="payroll-bar-label">
                    <span>Slip Generated</span>
                    <span>61%</span>
                  </div>
                  <div className="payroll-bar">
                    <div className="payroll-bar-fill amber" style={{ width: '61%' }} />
                  </div>
                </div>
              </div>

              {/* Activity Feed */}
              <div className="activity-card">
                <div className="quick-card-title">Recent Activity</div>

                <div className="activity-item">
                  <div className="activity-icon blue">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="5.5" stroke="#3B82F6" strokeWidth="1.3"/>
                      <path d="M7 4v3.5l2 2" stroke="#3B82F6" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="activity-text"><strong>Atharv Deshmukh</strong> joined as intern</div>
                    <div className="activity-time">2 hours ago</div>
                  </div>
                </div>

                <div className="activity-item">
                  <div className="activity-icon green">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <rect x="1.5" y="2.5" width="11" height="9" rx="1.5" stroke="#10B981" strokeWidth="1.3"/>
                      <path d="M4 7h6M4 9.5h3" stroke="#10B981" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="activity-text">Payroll for <strong>March</strong> processed</div>
                    <div className="activity-time">Yesterday, 4:30 PM</div>
                  </div>
                </div>

                <div className="activity-item">
                  <div className="activity-icon amber">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1L1.5 12h11L7 1z" stroke="#F59E0B" strokeWidth="1.3" strokeLinejoin="round"/>
                      <path d="M7 5.5v2.5M7 10v.5" stroke="#F59E0B" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="activity-text"><strong>2 interns</strong> contracts expiring soon</div>
                    <div className="activity-time">Apr 30, 2025</div>
                  </div>
                </div>

                <div className="activity-item">
                  <div className="activity-icon green">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="4.5" r="2.5" stroke="#10B981" strokeWidth="1.3"/>
                      <path d="M2 12c0-2.761 2.239-4 5-4s5 1.239 5 4" stroke="#10B981" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="activity-text"><strong>Nikhil Joshi</strong> updated profile</div>
                    <div className="activity-time">2 days ago</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Dashboard;