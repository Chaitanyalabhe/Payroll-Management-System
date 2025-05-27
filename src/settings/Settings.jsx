import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Settings.css';
// Import the avatar image
import kunalImage from '../assets/kunal.png';

function Settings() {
  const navigate = useNavigate();
  
  // Use the imported image
  const userInfo = {
    name: 'Kunal Shende',
    avatar: kunalImage
  };

  // Navigation handlers
  const handleNavigation = (path) => {
    navigate(path);
  };

  // Handlers for settings actions
  const handleChangePassword = () => {
    // Implement password change functionality
    console.log('Change password clicked');
  };

  const handleLogout = () => {
    // Implement logout functionality
    console.log('Logout clicked');
    // navigate('/login');
  };

  return (
    <div className="settings-dashboard-container">
      {/* Top header */}
      <div className="settings-top-header">
        <div className="settings-company-logo">
          <span className="settings-company-name">IPS TECHNOLOGIES</span>
          <span className="settings-company-icon">|||</span>
        </div>
        <div className="settings-system-title">Payroll Management System</div>
      </div>

      {/* Sidebar */}
      <div className="settings-sidebar">
        <div className="settings-sidebar-item" onClick={() => handleNavigation('/Dashboard')}>
          <div className="settings-sidebar-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span>Dashboard</span>
        </div>
        
        <div className="settings-sidebar-item" onClick={() => handleNavigation('/Employees')}>
          <div className="settings-sidebar-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
              <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <span>Employees</span>
        </div>
        
        <div className="settings-sidebar-item" onClick={() => handleNavigation('/Calendar')}>
          <div className="settings-sidebar-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <span>Calendar</span>
        </div>
        
        <div className="settings-sidebar-item" onClick={() => handleNavigation('/Company')}>
          <div className="settings-sidebar-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <span>Company</span>
        </div>
        
        <div className="settings-sidebar-item settings-active settings-bottom-item" onClick={() => handleNavigation('/Settings')}>
          <div className="settings-sidebar-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <span>Setting</span>
        </div>
      </div>

      {/* Main content */}
      <div className="settings-main-content">
        <div className="settings-container">
          <h1 className="settings-heading">Settings</h1>
          
          <div className="settings-profile-section">
            <div className="settings-avatar-container">
              <img
                src={userInfo.avatar}
                alt="Profile"
                className="settings-avatar"
              />
            </div>
            <h2 className="settings-user-name">{userInfo.name}</h2>
          </div>
          
          <div className="settings-buttons-container">
            <button className="settings-button" onClick={handleChangePassword}>
              Change Password
            </button>
            
            

            <button className="settings-button settings-logout-button" onClick={() => handleNavigation('/AdminLogin')}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;