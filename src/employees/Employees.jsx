import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Employees.css';

function Employees() {
  // Use the useNavigate hook from react-router-dom
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    // Actually navigate to the path instead of just logging
    navigate(path);
    console.log(`Navigating to: ${path}`);
  };

  return (
    <div className="dashboard-container">
      {/* Top header */}
      <div className="top-header">
        <div className="company-logo">
          <span className="company-name">IPS TECHNOLOGIES</span>
          <span className="company-icon">|||</span>
        </div>
        <div className="system-title">Payroll Management System</div>
      </div>

      {/* Sidebar */}
      <div className="sidebar">
      <div className="sidebar-item" onClick={() => handleNavigation('/Dashboard')}>
          <div className="sidebar-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span>Dashboard</span>
        </div>
        
        <div className="sidebar-item active">
          <div className="sidebar-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
              <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <span>Employees</span>
        </div>
        
        <div className="sidebar-item" onClick={() => handleNavigation('/Calendar')}>
          <div className="sidebar-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <span>Calendar</span>
        </div>
        
        <div className="sidebar-item" onClick={() => handleNavigation('/Company')}>
          <div className="sidebar-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <span>Company</span>
        </div>
        
        <div className="sidebar-item bottom-item" onClick={() => handleNavigation('/Settings')}>
          <div className="sidebar-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <span>Setting</span>
        </div>
      </div>

      {/* Main content */}
      <div className="main-content">
        {/* Employee Cards */}
        <div className="employee-cards">
          <div className="employee-card" onClick={() => handleNavigation('/EmployeesList')}>
            <div className="card-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="card-content">
              <h3>Employees List</h3>
            </div>
          </div>

          <div className="employee-card" onClick={() => handleNavigation('/AddEmployee')}>
            <div className="card-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="card-content">
              <h3>Add New Employee</h3>
            </div>
          </div>
        </div>

        <div className="employee-cards">
          <div className="employee-card" onClick={() => handleNavigation('/EditEmployee')}>
            <div className="card-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="2"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="card-content">
              <h3>Edit/Delete Employee</h3>
            </div>
          </div>

          <div className="employee-card" onClick={() => handleNavigation('/GeneratePayslip')}>
            <div className="card-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                <line x1="7" y1="9" x2="17" y2="9" stroke="currentColor" strokeWidth="2"/>
                <line x1="7" y1="13" x2="17" y2="13" stroke="currentColor" strokeWidth="2"/>
                <line x1="7" y1="17" x2="14" y2="17" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="card-content">
              <h3>Generate Payslip</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employees;