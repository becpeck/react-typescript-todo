import React from 'react';
import { Palette } from 'react-bootstrap-icons';

import ColorDotList from './ColorDotList';

import { ThemePaletteProps } from '../TodoList.interface';

export default function ThemePalette(props: ThemePaletteProps) {
    const { paletteOpen, themeColors, themeMode, togglePaletteOpen, handleChangeColor, setMode } = props;

    return (
        <>
            <div className='icon palette'>
                <Palette onClick={togglePaletteOpen}/>
            </div>
            { paletteOpen &&
                <div className='theme-options'>
                    <ColorDotList
                        themeColors={themeColors}
                        handleChange={handleChangeColor}
                    />
                </div>
            }
        </>
    );
}
