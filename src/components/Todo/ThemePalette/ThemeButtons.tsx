import React from 'react';

import { ThemeButtonsProps } from '../TodoList.interface';
import { THEME_MODES } from '../constants';

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
