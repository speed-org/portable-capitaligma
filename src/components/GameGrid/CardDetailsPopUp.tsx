import { CARD_TYPE } from "../../game/cards/cardConstants";
import { LevelDetails } from "../../game/cards/cardTypes";
import { Container } from "../Container"
import { CARD_PROPERTIES } from "../../game/cards/cardRequirements";
import { Button } from "../Button";
import "./index.css"

interface CardDetailsPopUpProps {
    cardType: CARD_TYPE;
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

export const CardDetailsPopUp = ({cardType}: CardDetailsPopUpProps) => {
    const initialLevelDetails = CARD_PROPERTIES[cardType]?.lvl_initial;
    const secondLevelDetails = CARD_PROPERTIES[cardType]?.lvl_2;
    const thirdLevelDetials = CARD_PROPERTIES[cardType]?.lvl_3;


    function upgradeButton() {
        alert('Button Clicked!');
    }

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
                <Button onClick={upgradeButton}>
                    Upgrade?
                </Button>
            </div>
        </Container>
    )
}