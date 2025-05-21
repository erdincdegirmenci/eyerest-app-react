import React from 'react';

export default function TopBar({ isBreakActive, theme, onMenuClick }) {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 8,
      position: 'relative',
      WebkitAppRegion: 'drag'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ position: 'relative', width: 48, height: 48, marginBottom: '20px'}}>
          <img src={process.env.PUBLIC_URL + '/mainicon.png'} alt="logo" style={{ width: 48, height: 48 }} />
          {isBreakActive && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 48,
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}>
              <svg width="36" height="36" viewBox="0 0 28 28">
                <circle cx="14" cy="14" r="13" fill="#F76C6C" stroke="#fff" strokeWidth="2" />
                <rect x="8" y="13" width="12" height="2" rx="1" fill="#fff" />
              </svg>
            </div>
          )}
        </div>
        <span style={{ fontWeight: 700, fontSize: 22, color: theme.dark }}>EyeRest</span>
      </div>
      <button
        style={{
          background: 'none',
          border: 'none',
          fontSize: 24,
          cursor: 'pointer',
          color: theme.dark,
          WebkitAppRegion: 'no-drag',
          position: 'absolute',
          right: 0,
          top: 0
        }}
        title="Ayarlar"
        onClick={onMenuClick}
      >
        &#8942;
      </button>
    </div>
  );
} 