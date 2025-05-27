import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  
  // Sample data for the employee list
  const employees = [
    { name: 'Rahul Sharma', position: 'Data Analyst', age: 25, status: 'Permanent' },
    { name: 'Vinita kulkarni', position: 'HR', age: 27, status: 'Permanent' },
    { name: 'Suyash Khapre', position: 'Junior Developer', age: 23, status: 'Intern' },
    { name: 'Nikhil', position: 'Senior Developer', age: 30, status: 'Permanent' },
    { name: 'Rutika', position: 'HR', age: 26, status: 'Permanent' },
    { name: 'Atharv deshmukh', position: 'Junior Developer', age: 24, status: 'Intern' },
  ];

  // Navigation handlers
  const handleNavigation = (path) => {
    navigate(path);
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
        <div className="sidebar-item active" onClick={() => handleNavigation('/Dashboard')}>
          <div className="sidebar-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span>Dashboard</span>
        </div>
        
        <div className="sidebar-item" onClick={() => handleNavigation('/Employees')}>
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
        {/* Stats cards */}
        <div className="stats-container">
          <div className="stats-card">
            <div className="stats-title">Total Employees</div>
            <div className="stats-number">52</div>
            <div className="stats-label">Employee</div>
          </div>
          
          <div className="stats-card">
            <div className="stats-title1">Resigned Employees</div>
            <div className="stats-number">17</div>
            <div className="stats-label">Employee</div>
          </div>
        </div>

        {/* Employee list section */}
        <div className="employee-list-section">
          <div className="employee-list-header">
            <h2>Employee List</h2>
            <button className="see-all-btn" onClick={() => handleNavigation('/EmployeesList')}>See all <span className="arrow">→</span></button>
          </div>
          
          <table className="employee-table">
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Position</th>
                <th>Age</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={index} onClick={() => handleNavigation(`/employee/${index}`)}>
                  <td>{employee.name}</td>
                  <td>{employee.position}</td>
                  <td>{employee.age}</td>
                  <td className={employee.status.toLowerCase()}>{employee.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;