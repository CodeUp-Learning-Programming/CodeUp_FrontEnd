import React, { useState } from 'react';
// import Amy from './themes/Amy.json';
// import MonokaiBrightTheme from './themes/Monokai Bright.json';
// import Monokai from './themes/Monokai.json';
function TemasComprados({ handleThemeChange }) {
  const themeOptions = [
    { name: 'Visual Studio', value: 'vs' },
    { name: 'Visual Studio Dark', value: 'vs-dark' },
    { name: 'High Contrast Black', value: 'hc-black' },
    // { name: 'Amy', value: Amy },
    // { name: 'Monokai Bright', value: 'Monokai Bright' },
    // { name: 'Monokai', value: 'Monokai' }
  ];

  return (
    <div>
      <select id='selectTemas' onChange={handleThemeChange}>
        {themeOptions.map((theme, index) => (
          <option key={index} value={theme.value}>
            {theme.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TemasComprados;
