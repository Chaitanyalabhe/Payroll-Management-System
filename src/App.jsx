import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AdminLogin from './admin login/AdminLogin';
import Dashboard from './dashboard/Dashboard';
import Employees from './employees/Employees';
import Calendar from './calendar/Calendar';
import Company from './company/Company';
import Settings from './settings/Settings';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/Company" element={<Company/>} />
        <Route path="/Settings" element={<Settings/>} />
        <Route path="/AdminLogin" element={<AdminLogin/>} />
        
      </Routes>
    </Router>
  );
}

export default App;