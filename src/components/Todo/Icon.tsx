import React from 'react';

import { IconProps } from './TodoList.interface';

export default function Icon(props: IconProps) {
    const { type, handleClick } = props;

    return (
        <span className={type.CLASS_NAME} onClick={handleClick}>{type.ICON}</span>
    );
}
