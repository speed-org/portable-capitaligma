import { CARD_LEVEL, CARD_TYPE } from "../../game/cards/cardConstants";
import { LevelDetails } from "../../game/cards/cardTypes";
import { Container } from "../Container"
import { CARD_PROPERTIES } from "../../game/cards/cardRequirements";
import { Button } from "../Button";
import { hasKey } from "../../helpers";
import { generateCardName, UNIQUE_LEVEL_CARD_NAME, getHighestLevelCardNameByCardType } from "../../game/cards/cardHelpers";
import "./index.css"
import { CardName } from "../../types";

interface CardDetailsPopUpProps {
    cardType: CARD_TYPE;
    currentCellContent: CardName;
    upgradeLevel: (cardName: CardName) => void;
};

function getKeyName (key: string) {
    key.toLowerCase()
    return key.slice(2)
};


function generateKeyDetailsSummary (obj: object) {
    let summary = ''

    Object.keys(obj).map((key) => {
        if (hasKey(obj, key)) {
            const value = obj[key]
            summary += `${value} ${getKeyName(key)} `
        }
    })

    return summary
}

const evaluateCost = (levelDetails: LevelDetails) => {
    let costSummary = generateKeyDetailsSummary(levelDetails.cost)
    let profitSummary = generateKeyDetailsSummary(levelDetails.profit)
    let dependencySummary = generateKeyDetailsSummary(levelDetails.depenends || {})
    

    return {costSummary, profitSummary, dependencySummary}
}

function isCardTypeUnique(cardType:CARD_TYPE) {
    const cardName = generateCardName(cardType, CARD_LEVEL.UNIQUE)
    return Object.values(UNIQUE_LEVEL_CARD_NAME).includes(cardName)
}

function isMaxLevelCardName(cardType:CARD_TYPE, currentCellContent:CardName) {
    if (currentCellContent === getHighestLevelCardNameByCardType(cardType)) {
        return true
    }
    return false
}

export const CardDetailsPopUp = ({cardType, currentCellContent, upgradeLevel}: CardDetailsPopUpProps) => {
    const initialLevelDetails = CARD_PROPERTIES[cardType]?.lvl_initial;
    const secondLevelDetails = CARD_PROPERTIES[cardType]?.lvl_2;
    const thirdLevelDetials = CARD_PROPERTIES[cardType]?.lvl_3;

    return (
        <Container className="Component-CardDetailsPopUp">
            
            <p>{cardType.charAt(0).toUpperCase() + cardType.slice(1)}</p>
            {initialLevelDetails?.cost &&
                <p>Cost: {evaluateCost(initialLevelDetails).costSummary}</p>
            }
            {initialLevelDetails?.depenends &&
                <p>Dependency: {evaluateCost(initialLevelDetails).dependencySummary}</p>
            }
            {initialLevelDetails?.profit &&
                <p> Profit: {evaluateCost(initialLevelDetails).profitSummary}</p>
            }
            <div style={{display: 'flex', gap: '10px', padding:'10px'}}>  

                {!isCardTypeUnique(cardType) && !isMaxLevelCardName(cardType, currentCellContent) &&
                    <Button onClick={() => upgradeLevel(currentCellContent)}>
                    Upgrade?
                    </Button>
                }
            </div>
        </Container>
    )
}