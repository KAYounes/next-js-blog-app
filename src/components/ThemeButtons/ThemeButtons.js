'use client';
import React from 'react';
import styles from './themeButtons.module.css';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';

function ThemeButtons({}) {
  const { setThemeLight, setThemeDark, setThemeAuto } = React.useContext(ThemeContext);

  const themes = ['light', 'dark', 'system'];

  const buttonsDOM = themes.map(function (theme) {
    return (
      <div className={styles['button-group__button-wrapper']}>
        <button className={styles['button']}>{theme}</button>
      </div>
    );
  });
  return (
    <div>
      <div className={styles['button-group']}>{buttonsDOM}</div>
    </div>
  );
}

export default ThemeButtons;
