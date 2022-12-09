import React from 'react';
import { Square, CheckSquare, Pencil, XLg, PlusLg } from 'react-bootstrap-icons';

import { IconProps } from './TodoList.interface';
import { ICONS } from './constants';

export default function Icon(props: IconProps) {
    const { variant, handleClick } = props;

    const getIcon = (variant: IconProps['variant']) => {
        switch (variant) {
            case ICONS.EMPTY_BOX: return <Square />;
            case ICONS.CHECKED_BOX: return <CheckSquare />;
            case ICONS.PENCIL: return <Pencil />;
            case ICONS.X_REMOVE: return <XLg />;
            case ICONS.PLUS: return <PlusLg />;
            case ICONS.NO_ICON: return <></>;
        }
    }

    return (
        <span className={`icon ${variant}`} onClick={handleClick}>{getIcon(variant)}</span>
    );
}
