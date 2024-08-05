import React from 'react';

function LanguageButtons({ changeLanguage }) {
  return (
    <div>
      <button onClick={() => changeLanguage('English')}>English</button>
      <button onClick={() => changeLanguage('Chinese')}>Chinese</button>
      <button onClick={() => changeLanguage('Spanish')}>Spanish</button>
      <button onClick={() => changeLanguage('Haitian')}>Haitian</button>
      <button onClick={() => changeLanguage('Portuguese')}>Portuguese</button>
    </div>
  );
}

export default LanguageButtons;
