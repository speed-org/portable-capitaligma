import { useState } from "react"
import { CardName } from "../../types"
import { CardComponent } from "../CardComponent"
import { isFirstPlayerTurn } from "../../game/state/playerHelpers";
import { gameConfig } from "../../game/config";
import { CardDetailsPopUp } from "./CardDetailsPopUp";
import { generateCardName, parseCardName } from "../../game/cards/cardHelpers";
import { CARD_LEVEL } from "../../game/cards/cardConstants";

interface GridCellProps {
    selectedCardName: CardName | null;
    coordinates: [number, number];
    setSelectedCardName: React.Dispatch<React.SetStateAction<CardName | null>>
    currentTurn: boolean
}


export const GridCell = ({selectedCardName, coordinates, setSelectedCardName, currentTurn}: GridCellProps) => {
    const [cellContent, setCellContent] = useState<CardName|null>(null);
    const [seeDetails, setSeeDetails] = useState<boolean>(false);


    const handleCellClick = () => {
        const middleCellIndex = Math.floor(gameConfig.gameGridHeightInUnits/2)

        console.log(coordinates)

        if (isFirstPlayerTurn(currentTurn) && coordinates[0] >= middleCellIndex) return;
        if (!isFirstPlayerTurn(currentTurn) && coordinates[0] < middleCellIndex) return;

        if (selectedCardName && !cellContent) {
            setCellContent(selectedCardName)
            setSelectedCardName(null)
            return
        };

        if (cellContent) {
            setSeeDetails(!seeDetails)
        }

    }

    function upgradeCellContent(cellContent: CardName) {
        const {cardLevel} = parseCardName(cellContent)
        let level = cardLevel.at(-1)
        if (!level) return;

        const newLevel = (Number(level) + 1).toString()
        const newCardName = cellContent.replace(level, newLevel) as CardName

        setCellContent(newCardName)
    }

    return (
        <td onClick={handleCellClick} className='cell'>
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
