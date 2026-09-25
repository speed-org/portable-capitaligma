import { CARD_CATEGORY_TO_CARD_TYPE_MAP, CARD_CATEGORY, CARD_TYPE } from '../../game/cards/cardConstants'
import { getLowestLevelCardNameByCardType } from '../../game/cards/cardHelpers';
import { CardComponent } from '../CardComponent';
import {CardName, PlayerBoard} from '../../types'
import './index.css'
import { isPossibleToBuildCard } from '../../game/state/buildHelpers';

interface SideBarProps {
    setSelectedCardName: React.Dispatch<React.SetStateAction<CardName | null>>;
    selectedCardName: CardName | null
    currentPlayerBoard: PlayerBoard
}

export const SideBar = ({ setSelectedCardName, selectedCardName, currentPlayerBoard }: SideBarProps) => {
    const handleStyle = (cardType: CARD_TYPE) => {
        if (selectedCardName === getLowestLevelCardNameByCardType(cardType)) {
            console.log('selected!!!', selectedCardName)
            return {border: '2px dashed red'}   
        }
        return {}
    }

    const handleCardClick = (cardType: CARD_TYPE) => {
        const selectedCardName = getLowestLevelCardNameByCardType(cardType)
        if (!isPossibleToBuildCard(currentPlayerBoard, cardType)) {
            return;
        }
        setSelectedCardName(selectedCardName)
    }

    return (
        <div className="Component:SideBar">
            <h2>Pick Ur Card</h2>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            { Object.entries(CARD_CATEGORY_TO_CARD_TYPE_MAP).map(([category, cardTypes]) => (
                category !== CARD_CATEGORY.LEADERSHIP &&
                <li key={category+cardTypes.join(':')} style={{ marginBottom: '0' }}>
                    <h3 style={{ margin: '0', marginTop: '1rem' }}>{category}</h3>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', gap: '0.5rem' }}>
                        {cardTypes.map((cardType) => (
                            <li
                                key={getLowestLevelCardNameByCardType(cardType)}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    backgroundColor: !isPossibleToBuildCard(currentPlayerBoard, cardType)? 'rgba(0,0,0,0.5)' : ''
                                }}
                            >
                                <CardComponent
                                    name={getLowestLevelCardNameByCardType(cardType)}
                                    onClick={() => handleCardClick(cardType)}
                                    style={{...handleStyle(cardType), width: '4rem', height: '4rem'}}
                                />
                                <span>{cardType}</span>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
            </ul>
        </div>
    );
}