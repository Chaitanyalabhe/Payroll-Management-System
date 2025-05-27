import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Calendar.css';

function Calendar() {
  const navigate = useNavigate();

  // Get current date
  const today = new Date();

  // Initialize state with current date information
  const [currentDate, setCurrentDate] = useState(today);
  const [selectedDate, setSelectedDate] = useState(null);

  // When component mounts, set selected date to today
  useEffect(() => {
    // Set the initial selected date to today
    setSelectedDate(today.getDate());
    
    // Optional: Add any additional initialization here
  }, []);

  // Format month and year for display
  const monthNames = [
    'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
    'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
  ];

  const currentMonthDisplay = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

  // Navigation handlers
  const handleNavigation = (path) => {
    navigate(path);
  };

  // Handle month navigation
  const handlePrevMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + 1);
      return newDate;
    });
  };

  // Generate calendar days for current month
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // Get the first day of the month
    const firstDay = new Date(year, month, 1);
    // Get the last day of the month
    const lastDay = new Date(year, month + 1, 0);
    
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    const calendarDays = [];
    
    // Add empty placeholders for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      calendarDays.push({ day: "", date: null });
    }
    
    // Add actual days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dateString = date.toISOString().split('T')[0];
      calendarDays.push({ day, date: dateString });
    }
    
    return calendarDays;
  };

  const calendarDays = generateCalendarDays();
  const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  // Check if a calendar day is today
  const isToday = (dayNumber) => {
    if (!dayNumber) return false;
    
    const todayDate = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();
    
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    
    return (
      dayNumber === todayDate &&
      currentMonth === todayMonth &&
      currentYear === todayYear
    );
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
        
        <div className="sidebar-item active" onClick={() => handleNavigation('/Calendar')}>
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
        {/* Calendar container */}
        <div className="calendar-container">
          {/* Calendar header with month navigation */}
          <div className="calendar-header">
            <button className="month-nav prev" onClick={handlePrevMonth}>
              &lt;
            </button>
            <h2 className="current-month">{currentMonthDisplay}</h2>
            <button className="month-nav next" onClick={handleNextMonth}>
              &gt;
            </button>
          </div>
          
          {/* Weekday headers */}
          <div className="weekdays-header">
            {weekdays.map((day, index) => (
              <div key={index} className="weekday">
                {day}
              </div>
            ))}
          </div>
          
          {/* Calendar grid */}
          <div className="calendar-grid">
            {calendarDays.map((day, index) => {
              // Determine the classes for this day
              const isTodayDay = isToday(day.day);
              const isSelectedDay = day.day === selectedDate && !isTodayDay;
              
              let dayClass = 'calendar-day';
              if (day.day === "") dayClass += ' empty';
              if (isSelectedDay) dayClass += ' selected';
              if (isTodayDay) dayClass += ' today';
              
              return (
                <div 
                  key={index}
                  className={dayClass}
                  onClick={() => day.day && setSelectedDate(day.day)}
                >
                  {day.day}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;