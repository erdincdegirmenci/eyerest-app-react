import React, { useState, useEffect } from 'react';
import formatTime from './helpers/formatTime';
import { THEMES } from './themes';
import { translations } from './i18n';
import TopBar from './components/TopBar';
import Menu from './components/Menu';
import MainScreen from './components/MainScreen';
import BreakScreen from './components/BreakScreen';
import SettingsTimeScreen from './components/SettingsTimeScreen';
import SettingsThemeScreen from './components/SettingsThemeScreen';

const DEFAULT_BREAK_DURATION = 5;
const DEFAULT_INTERVAL = 5;

const BUTTON_RED = '#F76C6C';
const BUTTON_TEXT = '#fff';
const BUTTON_SHADOW = '0 2px 8px #f76c6c33';
const CARD_SHADOW = '0 8px 32px #b2c9d155';
const CARD_RADIUS = 24;

function App() {
  const [screen, setScreen] = useState('main');
  const [interval, setIntervalValue] = useState(DEFAULT_INTERVAL);
  const [breakDuration] = useState(DEFAULT_BREAK_DURATION);
  const [timer, setTimer] = useState(interval);
  const [endTime, setEndTime] = useState(null);
  const [breakTimer, setBreakTimer] = useState(breakDuration);
  const [tempInterval, setTempInterval] = useState(interval);
  const [theme, setTheme] = useState(THEMES[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isBreakActive, setIsBreakActive] = useState(false);
  const [language, setLanguage] = useState('tr');
  const t = translations[language];

  // Electron API'sini güvenli bir şekilde kullan
  const electron = window.electron;

  useEffect(() => {
    if (screen !== 'main') return;
    if (!endTime) return;
    const tick = () => {
      const now = Date.now();
      const remaining = Math.max(0, Math.round((endTime - now) / 1000));
      setTimer(remaining);
      if (remaining === 0) {
        setScreen('break');
        setBreakTimer(breakDuration);
        showAppWindow();
        setIsBreakActive(false);
      }
    };
    tick();
    const intervalId = setInterval(tick, 1000);
    return () => clearInterval(intervalId);
  }, [endTime, screen, breakDuration]);

  useEffect(() => {
    if (screen !== 'break') return;
    if (breakTimer === 0) {
      return;
    }
    const breakTimeout = setTimeout(() => setBreakTimer(t => t - 1), 1000);
    return () => clearTimeout(breakTimeout);
  }, [breakTimer, screen]);

  const handleStart = () => {
    setEndTime(Date.now() + interval * 1000);
    setTimer(interval);
    setIsBreakActive(true);
  };

  const handleSkip = () => {
    setTimer(interval);
    setEndTime(null);
    setIsBreakActive(false);
    if (electron) {
      electron.send('hide-app');
    }
  };

  const handleStop = () => {
    setTimer(interval);
    setEndTime(null);
    setIsBreakActive(false);
  };

  const handleRested = () => {
    setScreen('main');
    handleStart();
  };

  const handleSaveSettings = () => {
    setIntervalValue(tempInterval);
    setTimer(tempInterval);
    setScreen('main');
  };

  useEffect(() => {
    const preventDoubleClick = e => {
      if (e.detail === 2) e.preventDefault();
    };
    window.addEventListener('mousedown', preventDoubleClick, true);
    return () => window.removeEventListener('mousedown', preventDoubleClick, true);
  }, []);

  function goToMainScreen() {
    setScreen('main');
    setTimer(interval);
    setEndTime(null);
    setIsBreakActive(false);
    setBreakTimer(breakDuration);
    setMenuOpen(false);
  }

  function showAppWindow() {
    if (electron) {
      electron.send('show-app-window');
    }
  }

  function handleQuit() {
    if (electron) {
      electron.send('hide-app');
    }
  }

  const handleLanguageChange = (newLang) => {
    setLanguage(newLang);
    if (electron) {
      electron.send('change-language', newLang);
    }
  };

  return (
    <div style={{
      width: '100%',
      height: '360px',
      background: theme.bg,
      borderRadius: CARD_RADIUS,
      boxShadow: theme.cardShadow || CARD_SHADOW,
      padding: '24px 24px 20px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      fontFamily: 'Inter, Arial, sans-serif',
      position: 'relative',
      WebkitAppRegion: 'drag',
      userSelect: 'none',
      overflow: 'hidden',
      boxSizing: 'border-box',
    }}>
      <TopBar isBreakActive={isBreakActive} theme={theme} onMenuClick={() => setMenuOpen(!menuOpen)} />
      {menuOpen && (
        <>
          <div
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 9,
              background: 'transparent',
            }}
          />
          <Menu
            theme={theme}
            goToMainScreen={goToMainScreen}
            handleQuit={handleQuit}
            setScreen={setScreen}
            setMenuOpen={setMenuOpen}
            language={language}
            onLanguageSwap={handleLanguageChange}
            t={t}
          />
        </>
      )}
      {screen === 'main' && (
        <MainScreen
          timer={timer}
          interval={interval}
          formatTime={formatTime}
          theme={theme}
          isBreakActive={isBreakActive}
          handleStart={handleStart}
          handleStop={handleStop}
          handleSkip={handleSkip}
          BUTTON_RED={BUTTON_RED}
          BUTTON_TEXT={BUTTON_TEXT}
          BUTTON_SHADOW={BUTTON_SHADOW}
          t={t}
        />
      )}
      {screen === 'break' && (
        <BreakScreen
          breakTimer={breakTimer}
          formatTime={formatTime}
          theme={theme}
          handleRested={handleRested}
          language={language}
          t={t}
        />
      )}
      {screen === 'settings-time' && (
        <SettingsTimeScreen
          theme={theme}
          tempInterval={tempInterval}
          setTempInterval={setTempInterval}
          handleSaveSettings={handleSaveSettings}
          setScreen={setScreen}
          BUTTON_RED={BUTTON_RED}
          BUTTON_TEXT={BUTTON_TEXT}
          t={t}
        />
      )}
      {screen === 'settings-theme' && (
        <SettingsThemeScreen
          theme={theme}
          setTheme={setTheme}
          themes={THEMES}
          setScreen={setScreen}
          t={t}
        />
      )}
    </div>
  );
}

export default App;
