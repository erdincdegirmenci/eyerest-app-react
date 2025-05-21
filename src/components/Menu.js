import React from 'react';

export default function Menu({ theme, goToMainScreen, handleQuit, setScreen, setMenuOpen, language, onLanguageSwap, t }) {
  return (
    <div className="eyerest-menu" style={{
      position: 'absolute',
      top: 36,
      right: 24,
      background: '#fff',
      borderRadius: 12,
      boxShadow: '0 4px 16px #b2c9d122',
      zIndex: 10,
      minWidth: 160,
      padding: '8px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
    }}>
      <button onClick={() => { setScreen('settings-time'); setMenuOpen(false); }} style={{ background: 'none', border: 'none', textAlign: 'left', padding: '10px 18px', fontSize: 16, color: theme.dark, cursor: 'pointer', width: '100%', WebkitAppRegion: 'no-drag' }}>{t.settingsTime}</button>
      <button onClick={() => { setScreen('settings-theme'); setMenuOpen(false); }} style={{ background: 'none', border: 'none', textAlign: 'left', padding: '10px 18px', fontSize: 16, color: theme.dark, cursor: 'pointer', width: '100%', WebkitAppRegion: 'no-drag' }}>{t.settingsTheme}</button>
      <button onClick={() => { goToMainScreen(); setMenuOpen(false); }} style={{ background: 'none', border: 'none', textAlign: 'left', padding: '10px 18px', fontSize: 16, color: theme.dark, cursor: 'pointer', width: '100%', WebkitAppRegion: 'no-drag' }}>{t.mainScreen}</button>
      <button onClick={() => { handleQuit(); setMenuOpen(false); }} style={{ background: 'none', border: 'none', textAlign: 'left', padding: '10px 18px', fontSize: 16, color: '#F76C6C', cursor: 'pointer', width: '100%', WebkitAppRegion: 'no-drag' }}>{t.quit}</button>
      <button
        onClick={() => { onLanguageSwap('tr'); setMenuOpen(false); }}
        disabled={language === 'tr'}
        style={{ background: 'none', border: 'none', textAlign: 'left', padding: '10px 18px', fontSize: 16, color: theme.dark, cursor: language === 'tr' ? 'default' : 'pointer', width: '100%', WebkitAppRegion: 'no-drag', fontWeight: language === 'tr' ? 700 : 400 }}
      >
        Türkçe
      </button>
      <button
        onClick={() => { onLanguageSwap('en'); setMenuOpen(false); }}
        disabled={language === 'en'}
        style={{ background: 'none', border: 'none', textAlign: 'left', padding: '10px 18px', fontSize: 16, color: theme.dark, cursor: language === 'en' ? 'default' : 'pointer', width: '100%', WebkitAppRegion: 'no-drag', fontWeight: language === 'en' ? 700 : 400 }}
      >
        English
      </button>
    </div>
  );
} 