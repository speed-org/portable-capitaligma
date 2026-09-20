import { CARD_LEVEL, CARD_TYPE } from "../../game/cards/cardConstants";
import { CardCost, CardDependency, CardProfit, LevelDetails } from "../../game/cards/cardTypes";
import { Container } from "../Container"
import { CARD_PROPERTIES } from "../../game/cards/cardRequirements";
import { Button } from "../Button";

interface CardDetailsPopUpProps {
    cardType: CARD_TYPE;

}




function hasKey<T extends object>(obj: T, key: PropertyKey): key is keyof T {
    return Object.prototype.hasOwnProperty.call(obj, key);
};

function getKeyName (key: string) {
    key.toLowerCase()
    return key.slice(2)
};


function getSomrthing (obj: object) {
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
    let costSummary = getSomrthing(levelDetails.cost)
    let profitSummary = getSomrthing(levelDetails.profit)
    let dependencySummary = getSomrthing(levelDetails.depenends || {})
    

    return {costSummary, profitSummary, dependencySummary}
}






export const CardDetailsPopUp = ({cardType}: CardDetailsPopUpProps) => {

    const initialLevelDetails = CARD_PROPERTIES[cardType]?.lvl_initial;
    const secondLevelDetails = CARD_PROPERTIES[cardType]?.lvl_2;
    const thirdLevelDetials = CARD_PROPERTIES[cardType]?.lvl_3;

    function parseLevelDetails(levelDetails: LevelDetails) {
        // Cost
        let costDetails = ''

        if (levelDetails.cost.inCoins) {
            costDetails += `${levelDetails.cost.inCoins} Coins`
            console.log('it has cost in coins')
        }
        if (levelDetails.cost.inMaterials) {
            costDetails += `${levelDetails.cost.inMaterials} Materials`
            console.log('it has cost in materials')
        }
        if (levelDetails.cost.inPopulation) {
            costDetails += `${levelDetails.cost.inPopulation} Population`
            console.log('it has cost in population')
        }

        console.log('level cost summary:', costDetails)

        let dependencyDetails = ''

        if (levelDetails.depenends?.onCards) {
            dependencyDetails += `${levelDetails.depenends.onCards} Cards`
            console.log('it has dependnecy on cards')
        }
        if (levelDetails.depenends?.onCoins) {
            dependencyDetails += `${levelDetails.depenends.onCoins} Coins`
            console.log('it has dependnecy on coings')
        }
        if (levelDetails.depenends?.onPopulation) {
            dependencyDetails += `${levelDetails.depenends.onPopulation} Population`
            console.log('it has dependnecy on population')
        }
        if (levelDetails.depenends?.onPopulationCoverage) {
            dependencyDetails += `${levelDetails.depenends.onPopulationCoverage} Population Coverage`
            console.log('it has dependnecy on population coverage')
        }
        if (levelDetails.depenends?.onProgress) {
            dependencyDetails += `${levelDetails.depenends.onProgress} Progress`
            console.log('it has dependnecy on progress')
        }

        console.log('level dependency summary:', dependencyDetails)

        let profitDetails = ''

        if (levelDetails.profit.inCoins) {
            profitDetails += `${levelDetails.profit.inCoins} Coins`
            console.log('it has profit in coins')
        }
        if (levelDetails.profit.inMaterials) {
            profitDetails += `${levelDetails.profit.inMaterials} Materials`
            console.log('it has profit in materials')
        }
        if (levelDetails.profit.inPopulation) {
            profitDetails += `${levelDetails.profit.inPopulation} Population`
            console.log('it has profit in population')
        }
        if (levelDetails.profit.inPopulationCoverage) {
            profitDetails += `${levelDetails.profit.inPopulationCoverage} Population Coverage`
            console.log('it has profit in population coverage')
        }
        if (levelDetails.profit.inProgress) {
            profitDetails += `${levelDetails.profit.inProgress} Progress`
            console.log('it has profit in progress')
        }

        console.log('level profit summary:', profitDetails)

        return {costDetails, dependencyDetails, profitDetails}

        
    }

    function upgradeButton() {
        alert('Button Clicked!');
    }

    return (
        <Container style={{width: 'max-content', height: 'fit-content', border: '1px solid black', padding: '5px', backgroundColor: 'white', position: 'absolute', top:0, right: 0, zIndex:5} }>
            <p>{cardType}</p>
            <p></p>
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