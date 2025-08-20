// change theme using button

import React, { useContext } from 'react';
import { ThemeContext, ThemeProvider } from './ThemeContext';

const ThemeContent = () => {
  const { isDark, toggleTheme, styles, cardStyle } = useContext(ThemeContext);

  return (
    <div style={styles}>
      <h1>{isDark ? 'Dark Mode' : 'Light Mode'}</h1>
      <button onClick={toggleTheme}>
        Switch to {isDark ? 'Light' : 'Dark'} Theme
      </button>
      <p>This is some sample text that changes with the theme.</p>
      <div style={cardStyle}>
        <h3>Card Component</h3>
        <p>This card also adapts to the theme.</p>
      </div>
    </div>
  );
};

const UseContextTheme = () => {
  return (
    <ThemeProvider>
      <ThemeContent />
    </ThemeProvider>
  );
};

export default UseContextTheme;
