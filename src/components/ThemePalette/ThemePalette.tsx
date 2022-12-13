import React from 'react';
import { Palette } from 'react-bootstrap-icons';

import ColorDotList from './ColorDotList';
import ThemeButtons from './ThemeButtons';

import { ThemeColor, ThemeMode } from '../../types';

type ThemePaletteProps = {
  paletteOpen: boolean;
  themeColors: ThemeColor[];
  themeMode: ThemeMode;
  togglePaletteOpen: () => void;
  handleChangeColor: React.ChangeEventHandler<HTMLInputElement>;
  setMode: (mode: ThemeMode) => void;
}

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
          <ThemeButtons
            themeMode={themeMode}
            setMode={setMode}
          />
        </div>
      }
    </>
  );
}
