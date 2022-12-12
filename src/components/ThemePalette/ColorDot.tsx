import React from 'react';
import { ThemeColor } from '../types';

type ColorDotProps = {
    themeColor: ThemeColor;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function ColorDot(props: ColorDotProps) {
    const { themeColor, handleChange } = props;

    return (
        <label className='color-dot' id={themeColor.color}>
            <input
                type='radio'
                className='color-input'
                name='theme-color'
                value={themeColor.color}
                onChange={handleChange}
                checked={themeColor.active}
            />
            { themeColor.active &&
                <span id='color-dot-active'/>
            }
        </label>
    );
}
