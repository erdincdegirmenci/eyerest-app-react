import React from 'react';

export default function SettingsThemeScreen({ theme, setTheme, themes, setScreen, t }) {
  return (
    <div style={{ width: '100%', textAlign: 'center', marginTop: 8 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <button onClick={() => setScreen('main')} style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: theme.dark, WebkitAppRegion: 'no-drag' }}>&larr;</button>
        <span style={{ fontWeight: 600, fontSize: 16, color: theme.dark }}>{t.themeSettings}</span>
      </div>
      <div style={{   
        paddingTop: '30px',          
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 24,
        margin: '0 auto',
        maxWidth: 340, }}>
        {themes.map(tObj => (
          <button
            key={tObj.name}
            onClick={() => setTheme({ name: tObj.name, ...tObj })}
            style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              border: theme.name === tObj.name ? `3px solid ${theme.dark}` : '2px solid #e0e0e0',
              background: tObj.color,
              cursor: 'pointer',
              outline: 'none',
              WebkitAppRegion: 'no-drag',
            }}
            title={tObj.name}
          />
        ))}
      </div>
    </div>
  );
} 