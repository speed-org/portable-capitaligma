import React from 'react';
import { getCardImagePath } from '../../game/cards/cardHelpers';
import { CardName } from '../../types';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    name: CardName;
}

export const CardComponent: React.FC<CardProps> = ({ name, style, ...props }) => {
    const [imagePath, setImagePath] = React.useState(getCardImagePath(name));
    return (
        <div 
            style={{
                ...style,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                userSelect: 'none',
                borderRadius: '8px',
                boxSizing: 'border-box',
                margin: 0,
                padding: 0
            }}
            {...props}
        >
            <img 
                src={imagePath} 
                alt={name}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    cursor: 'pointer'
                }} 
                
                onError={(e) => {
                    setImagePath('/assets/entities/v1/default_dard_icon.svg');
                }}
            />
        </div>
    );
};
