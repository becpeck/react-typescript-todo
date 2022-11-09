import React from 'react';

export default function Icon(props: any) {
    const { type, handleClick } = props;

    return (
        <span className={type.className} onClick={handleClick}>{type.icon}</span>
    );
}
