import React, { useState } from 'react';
import Amy from './themes/Amy.json';
import MonokaiBrightTheme from './themes/Monokai Bright.json';
import Monokai from './themes/Monokai.json';

export function TemasComprados() {
  const listaTemas = ['Visual Studio', 'Visual Studio Dark', 'High Contrast Black', Amy, MonokaiBrightTheme, Monokai];

  const [selectedTheme, setTheme] = useState(0);

  const handleThemeChange = (event) => {
    const selectedValue = parseInt(event.target.value, 10); // Parse the value as an integer

    if (selectedValue === 0) {
      monaco.editor.setTheme('vs');
    } else if (selectedValue === 1) {
      monaco.editor.setTheme('vs-dark');
    } else if (selectedValue === 2) {
      monaco.editor.setTheme('hc-black');
    } else {
      monaco.editor.defineTheme('meu-tema', listaTemas[selectedValue]);
      monaco.editor.setTheme('meu-tema');
    }

    setTheme(selectedValue); // Update the selected theme in the component's state
  };

  return (
    <div>
      <select id='selectTemas' value={selectedTheme} onChange={handleThemeChange}>
        {listaTemas.map((theme, index) => (
          <option key={index} value={index}>
            {theme}
          </option>
        ))}
      </select>
    </div>
  );
}
