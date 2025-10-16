import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Get theme preference from localStorage on component mount
    const savedTheme = localStorage.getItem('themePreference');
    if (savedTheme) {
      const isDark = savedTheme === 'dark';
      setIsDarkMode(isDark);
      applyTheme(isDark);
    }
  }, []);

  const applyTheme = (dark) => {
    if (dark) {
      document.body.style.backgroundColor = '#1a1a1a';
      document.body.style.color = '#ffffff';
    } else {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
    }
  };

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    // Save to localStorage
    localStorage.setItem('themePreference', newDarkMode ? 'dark' : 'light');

    // Apply theme changes
    applyTheme(newDarkMode);
  };

  const containerStyle = {
    padding: '20px',
    minHeight: '100vh',
    backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
    color: isDarkMode ? '#ffffff' : '#000000',
    transition: 'all 0.3s ease'
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: isDarkMode ? '#ffffff' : '#333333',
    color: isDarkMode ? '#000000' : '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px'
  };

  const contentStyle = {
    padding: '20px',
    border: `2px solid ${isDarkMode ? '#ffffff' : '#333333'}`,
    borderRadius: '8px',
    marginTop: '20px'
  };

  return (
    <div style={containerStyle}>
      <h1>Student Portal</h1>
      <button style={buttonStyle} onClick={toggleTheme}>
        {isDarkMode ? '☀️ Switch to Light Mode' : '🌙 Switch to Dark Mode'}
      </button>

      <div style={contentStyle}>
        <h2>Student Information</h2>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Student ID:</strong> S12345</p>
        <p><strong>Course:</strong> Computer Science</p>
        <p><strong>Grade:</strong> A</p>
        <p><strong>Email:</strong> john.doe@university.edu</p>
      </div>

      <div style={{ marginTop: '20px', fontSize: '14px', opacity: 0.7 }}>
        <p>Theme preference saved in localStorage. Refresh the page to see it persist!</p>
        <p>Current theme: <strong>{isDarkMode ? 'Dark' : 'Light'}</strong></p>
      </div>
    </div>
  );
};

export default ThemeToggle;