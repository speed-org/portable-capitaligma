import React from 'react';
import { CARD_LEVEL, CARD_TYPE } from '../../constants';

interface CardProps {
    type: CARD_TYPE;
    level: CARD_LEVEL;
    onClick?: () => void;
}

const getImagePath = (type: CARD_TYPE, level: CARD_LEVEL): string => {
    const formattedLevel = level.replace('_', ''); 

    if (type === CARD_TYPE.FARM && level === CARD_LEVEL.LVL_1) {
        return `/assets/entities/farm-lvl1-v1.webp`;
    }
    if (type === CARD_TYPE.HOUSE && level === CARD_LEVEL.LVL_1) {
        return `/assets/entities/house-lvl1-v1.webp`;
    }
    if (type === CARD_TYPE.HOUSE && level === CARD_LEVEL.LVL_2) {
        return `/assets/entities/house-lvl-2.webp`;
    }

    return `/assets/entities/${type}-${formattedLevel}.webp`;
};

export const Card: React.FC<CardProps> = ({ type, level, onClick }) => {
    const imageSrc = getImagePath(type, level);

    return (
        <div 
            onClick={onClick}
            style={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                cursor: onClick ? 'pointer' : 'default',
                userSelect: 'none',
                transition: 'transform 0.2s',
                borderRadius: '8px',
                overflow: 'hidden',
            }}
            onMouseEnter={(e) => onClick && (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => onClick && (e.currentTarget.style.transform = 'scale(1)')}
        >
            <img 
                src={imageSrc} 
                alt={`${type} ${level}`}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }} 
                
                onError={(e) => {
                    e.currentTarget.style.display = 'none';
                }}
            />
        </div>
    );
};