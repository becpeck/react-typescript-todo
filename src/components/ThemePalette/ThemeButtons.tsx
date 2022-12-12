import React from 'react';
import { ThemeMode } from '../types';
import { THEME_MODES } from '../constants';

type ThemeButtonsProps = {
    themeMode: ThemeMode;
    setMode: (mode: ThemeMode) => void;
}

export default function ThemeButtons(props: ThemeButtonsProps) {
    const { themeMode, setMode } = props;

    const isLight = () => (themeMode === THEME_MODES.LIGHT);
    const isDark = () => (themeMode === THEME_MODES.DARK);
    const isAuto = () => (themeMode === THEME_MODES.AUTO);

    return (
        <div id='theme-mode-buttons'>
            <button disabled={isLight()} onClick={() => setMode(THEME_MODES.LIGHT)}>Light</button>
            <button disabled={isDark()} onClick={() => setMode(THEME_MODES.DARK)}>Dark</button>
            <button disabled={isAuto()} onClick={() => setMode(THEME_MODES.AUTO)}>Auto</button>
        </div>
    );
}
