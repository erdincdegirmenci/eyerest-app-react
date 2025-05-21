import React from 'react';
import CircularProgress from './CircularProgress';

export default function MainScreen({ timer, interval, formatTime, theme, isBreakActive, handleStart, handleStop, handleSkip, BUTTON_RED, BUTTON_TEXT, BUTTON_SHADOW, t }) {
  return (
    <>
      <div style={{ margin: '0 auto', marginTop: 0, marginBottom: 0, position: 'relative', width: 150, height: 120 }}>
        <CircularProgress value={timer} max={interval} />
        <div style={{
          margin: '12px 12px 12px 0px',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          fontSize: 34,
          color: theme.dark,
          letterSpacing: 1,
          pointerEvents: 'none',
        }}>{formatTime(timer)}</div>
      </div>
      <div style={{ marginTop: 34, fontWeight: 700, fontSize: 19, color: theme.dark }}>{t.mainTitle}</div>
      <div style={{ color: '#6b7a8f', fontSize: 14, marginBottom: 10, marginTop: 4, fontWeight: 500 }}>{t.mainDesc}</div>
      <div style={{ display: 'flex', gap: 12, marginTop: 8, width: '100%' }}>
        <button
          onClick={isBreakActive ? handleStop : handleStart}
          style={{
            background: isBreakActive ? '#fff' : BUTTON_RED,
            color: isBreakActive ? BUTTON_RED : BUTTON_TEXT,
            border: isBreakActive ? '2px solid #F76C6C' : 'none',
            borderRadius: 12,
            padding: '10px 0',
            fontWeight: 700,
            fontSize: 16,
            cursor: 'pointer',
            WebkitAppRegion: 'no-drag',
            boxShadow: isBreakActive ? '0 2px 8px #f76c6c22' : BUTTON_SHADOW,
            flex: 1
          }}
        >
          {isBreakActive ? t.stop : t.start}
        </button>
        <button onClick={handleSkip} style={{ background: 'white', color: theme.dark, border: 'none', borderRadius: 12, padding: '10px 0', fontWeight: 700, fontSize: 16, cursor: 'pointer', WebkitAppRegion: 'no-drag', boxShadow: '0 2px 8px #b2c9d122', flex: 1 }}>{t.skip}</button>
      </div>
      <div style={{ height: 12 }} />
    </>
  );
} 