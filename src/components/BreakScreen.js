import React from 'react';

export default function BreakScreen({ breakTimer, formatTime, theme, handleRested, t }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <div>
        <img src={process.env.PUBLIC_URL + '/mainicon2.png'} alt="eye" style={{ width: 64, height: 64 }} />
      </div>
      <div style={{ fontWeight: 700, fontSize: 18, color: theme.dark, marginBottom: 6 }}>{t.breakTitle}</div>
      <ul style={{ color: '#6b7a8f', fontSize: 13, margin: 0, paddingLeft: 18, marginBottom: 18, textAlign: 'left' }}>
        <li>{t.breakAdvice1}</li>
        <li>{t.breakAdvice2}</li>
        <li>{t.breakAdvice3}</li>
      </ul>
      <button onClick={handleRested} style={{ background: theme.color, color: 'white', border: 'none', borderRadius: 8, padding: '10px 32px', fontWeight: 600, fontSize: 16, cursor: 'pointer', WebkitAppRegion: 'no-drag', boxShadow: '0 2px 8px #b2c9d155' }}>{t.rested}</button>
    </div>
  );
} 