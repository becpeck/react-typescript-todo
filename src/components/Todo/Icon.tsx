import React from 'react';

import { IconProps } from './TodoList.interface';

export default function Icon(props: IconProps) {
    const { variant, handleClick } = props;

    return (
        <span className={`icon ${variant.CLASS_NAME}`} onClick={handleClick}>{variant.ICON}</span>
    );
}
