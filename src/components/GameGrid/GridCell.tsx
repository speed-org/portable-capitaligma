import { useState } from "react"
import { CardName } from "../../types"
import { CardComponent } from "../CardComponent"
import { gameConfig } from "../../game/config";
import { CardDetailsPopUp } from "./CardDetailsPopUp";
import { parseCardName, getCardNameLevel, getNextLevelCardName } from "../../game/cards/cardHelpers";
import { useGameHooks } from '../../hooks/gameHook';


interface GridCellProps {
    coordinates: [number, number];
}

export const GridCell = ({coordinates}: GridCellProps) => {
    const gameHooks = useGameHooks()
    const [cellContent, setCellContent] = useState<CardName|null>(null);
    const [seeDetails, setSeeDetails] = useState<boolean>(false);


    const handleCellClick = () => {
        const middleCellIndex = Math.floor(gameConfig.gameGridHeightInUnits/2)

        console.log(coordinates)

        if (gameHooks.isFirstPlayerTurn && coordinates[0] >= middleCellIndex) return;
        if (!gameHooks.isFirstPlayerTurn && coordinates[0] < middleCellIndex) return;

        // where it fails 
        console.log("trying to render selected card name:",gameHooks.selectedCardName)
        console.log("current cell content:",cellContent)

        if (gameHooks.selectedCardName && !cellContent) {
            setCellContent(gameHooks.selectedCardName)
            gameHooks.playerManager.handleCardBuild({cardName: gameHooks.selectedCardName})
            gameHooks.changeCardName(gameHooks.selectedCardName)
            return
        };

        if (cellContent) {
            setSeeDetails(!seeDetails)
        }

    }

    function upgradeCellContent(cellContent: CardName) {
        const newCardName = getNextLevelCardName(cellContent)
        
        newCardName && setCellContent(newCardName);
    }


    return (
        <td onClick={handleCellClick} className='cell' colSpan={cellContent? getCardNameLevel(cellContent) : 1} rowSpan={1}>
            {cellContent && 
            <> 
                <CardComponent name={cellContent}/>
                { seeDetails &&
                    <CardDetailsPopUp cardType={parseCardName(cellContent).cardType} currentCellContent={cellContent} upgradeLevel={upgradeCellContent} />
                }
            </>
            }
        </td>
    )
}
