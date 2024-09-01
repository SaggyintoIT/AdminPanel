import React, { useState, useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';

import './css/style.css';
import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import AdminLoginPage from './admin/admin';

function App() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {!isLoggedIn ? (
        <AdminLoginPage onLogin={handleLogin} />
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      )}
    </>
  );
}

export default App;
