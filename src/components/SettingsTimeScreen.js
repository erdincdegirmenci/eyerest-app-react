import React from 'react';

export default function SettingsTimeScreen({ theme, tempInterval, setTempInterval, handleSaveSettings, setScreen, BUTTON_RED, BUTTON_TEXT, t }) {
  return (
    <div style={{ width: '100%', textAlign: 'center', marginTop: 8 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <button onClick={() => setScreen('main')} style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: theme.dark, WebkitAppRegion: 'no-drag' }}>&larr;</button>
        <span style={{ fontWeight: 600, fontSize: 16, color: theme.dark }}>{t.timeSettings}</span>
      </div>
      <div style={{
        background: '#fff',
        borderRadius: 12,
        boxShadow: theme.cardShadow,
        padding: 16,
        marginBottom: 18,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: 180
      }}>
        <div style={{ fontWeight: 600, fontSize: 16, color: theme.dark, marginBottom: 8 }}>{t.breakInterval}</div>
        <div style={{
          position: 'relative',
          width: 140,
          marginBottom: 8,
          background: '#fff',
          borderRadius: 8,
          border: '1.5px solid #e0e0e0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 500,
          fontSize: 20,
          color: theme.dark,
          boxSizing: 'border-box',
          height: 48
        }}>
          <input
            type="number"
            min={1}
            max={120}
            value={tempInterval ? Math.round(tempInterval / 60) : ""}
            onChange={e => {
              if (e.target.value === "") {
                setTempInterval("");
              } else {
                let val = Math.max(1, Math.min(120, Number(e.target.value)));
                setTempInterval(val * 60);
              }
            }}
            style={{
              border: 'none',
              outline: 'none',
              fontSize: 20,
              width: 60,
              textAlign: 'center',
              color: theme.dark,
              background: 'transparent',
              fontWeight: 500,
              padding: 0,
              marginRight: 4,
              appearance: 'textfield',
              WebkitAppRegion: 'no-drag',
            }}
          />
          <span style={{ fontSize: 16, color: theme.dark, opacity: 0.7 }}>dakika</span>
          <div style={{
            position: 'absolute',
            left: 8,
            right: 8,
            bottom: 4,
            height: 4,
            borderRadius: 2,
            background: theme.color,
            opacity: 0.3
          }} />
        </div>
        <button
          onClick={handleSaveSettings}
          style={{
            background: BUTTON_RED,
            color: BUTTON_TEXT,
            border: 'none',
            borderRadius: 12,
            padding: '12px 0',
            fontWeight: 700,
            fontSize: 17,
            cursor: 'pointer',
            WebkitAppRegion: 'no-drag',
            boxShadow: theme.buttonShadow,
            width: '100%',
            marginTop: 8
          }}
        >
          {t.save}
        </button>
      </div>
    </div>
  );
} 