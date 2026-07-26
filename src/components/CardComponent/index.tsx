import React from 'react';
import { getCardImagePath } from '../../utils/cardHelpers';
import { CardName } from '../../types';

interface CardProps {
    name: CardName;
    onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ name, onClick }) => {

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
                src={getCardImagePath(name)} 
                alt={name}
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