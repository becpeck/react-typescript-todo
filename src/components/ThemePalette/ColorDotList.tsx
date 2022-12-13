import React from 'react';
import ColorDot from './ColorDot';
import { ThemeColor } from '../../types';

type ColorDotListProps =  {
    themeColors: ThemeColor[];
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function ColorDotList(props: ColorDotListProps) {
    const { themeColors, handleChange } = props;

    return (
        <div id='color-dot-list'>
            {
                themeColors.map(themeColor => 
                    <ColorDot
                        key={themeColor.color}
                        themeColor={themeColor}
                        handleChange={handleChange}
                    />
                )
            }
        </div>
    );
}
