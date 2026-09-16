import { useState } from "react"
import { CardName } from "../../types"
import { CardComponent } from "../CardComponent"
import { isFirstPlayerTurn } from "../../game/state/playerHelpers";
import { gameConfig } from "../../game/config";

interface GridCellProps {
    selectedCardName: CardName | null;
    coordinates: [number, number];
    setSelectedCardName: React.Dispatch<React.SetStateAction<CardName | null>>
    currentTurn: boolean
}

export const GridCell = ({selectedCardName, coordinates, setSelectedCardName, currentTurn}: GridCellProps) => {
    const [cellContent, setCellContent] = useState<CardName|null>(null)
    const handleCellClick = () => {
        const middleCellIndex = Math.floor(gameConfig.gameGridHeightInUnits/2)

        console.log(coordinates)

        if (isFirstPlayerTurn(currentTurn) && coordinates[0] >= middleCellIndex) return;
        if (!isFirstPlayerTurn(currentTurn) && coordinates[0] < middleCellIndex) return;

        if (selectedCardName && !cellContent) {
            setCellContent(selectedCardName)
            setSelectedCardName(null)
        };    
    }
    return (
        <td onClick={handleCellClick} className='cell'>
            {cellContent && 
                <CardComponent name={cellContent}/>
            }
        </td>
    )
}