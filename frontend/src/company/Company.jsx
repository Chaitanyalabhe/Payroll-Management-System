import { useNavigate } from 'react-router-dom';
import './Company.css';

function Company() {
  const navigate = useNavigate();
  
  // Navigation handlers
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="company-container">
      {/* Top header */}
      <div className="company-top-header">
        <div className="company-logo">
          <span className="company-name">IPS TECHNOLOGIES</span>
          <span className="company-icon">|||</span>
        </div>
        <div className="company-system-title">Payroll Management System</div>
      </div>

      {/* Sidebar */}
      <div className="company-sidebar">
        <div className="company-sidebar-item" onClick={() => handleNavigation('/Dashboard')}>
          <div className="company-sidebar-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span>Dashboard</span>
        </div>
        
        <div className="company-sidebar-item" onClick={() => handleNavigation('/Employees')}>
          <div className="company-sidebar-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
              <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <span>Employees</span>
        </div>
        
        <div className="company-sidebar-item" onClick={() => handleNavigation('/Calendar')}>
          <div className="company-sidebar-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <span>Calendar</span>
        </div>
        
        <div className="company-sidebar-item active" onClick={() => handleNavigation('/Company')}>
          <div className="company-sidebar-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <span>Company</span>
        </div>
        
        <div className="company-sidebar-item bottom-item" onClick={() => handleNavigation('/Settings')}>
          <div className="company-sidebar-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <span>Setting</span>
        </div>
      </div>

      {/* Main content */}
      <div className="company-main-content">
        {/* Company information card */}
        <div className="company-info-card">
          <h1 className="company-info-title">Company Information</h1>
          
          <div className="company-info-form">
            <div className="company-form-group">
              <label className="company-form-label">Company Name</label>
              <input 
                type="text" 
                className="company-form-input" 
                value="IPS Technologies" 
                disabled 
              />
            </div>
            
            <div className="company-form-group">
              <label className="company-form-label">Company Address</label>
              <input
                type="text"
                className="company-form-input"
                value="1096, Ashirwad nagar, Nagpur" 
                disabled 
              />
            </div>
            
            <div className="company-form-group">
              <label className="company-form-label">Contact Email</label>
              <input 
                type="email" 
                className="company-form-input" 
                value="Contact@ipstechnologies.in" 
                disabled 
              />
            </div>
            
            <div className="company-form-group">
              <label className="company-form-label">Contact Number</label>
              <input 
                type="text" 
                className="company-form-input" 
                value="+91 8484875544" 
                disabled 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;