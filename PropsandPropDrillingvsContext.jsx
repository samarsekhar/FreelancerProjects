import React, { createContext, useContext, useState } from 'react';

// Create Context
const ThemeContext = createContext();
const UserContext = createContext();

// Child component using useContext
const ProfileCard = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const user = useContext(UserContext);
  
  return (
    <div style={{ padding: '20px', background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
      <h3>Profile Card</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

const Question3_ContextAPI = () => {
  const [theme, setTheme] = useState('light');
  const [user] = useState({ name: 'John Doe', email: 'john@example.com' });

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <UserContext.Provider value={user}>
        <div>
          <h2>Question 3: Context API (Solution to Prop Drilling)</h2>
          <ProfileCard />
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

export default Question3_ContextAPI;
