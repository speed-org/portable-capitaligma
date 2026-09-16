import { CardName } from '../../types';
import './index.css';
import { GridCell } from './GridCell';
import { gameConfig } from '../../game/config';

interface GameGridProps extends React.HTMLAttributes<HTMLDivElement> {
  selectedCardName: CardName | null;
  setSelectedCardName: React.Dispatch<React.SetStateAction<CardName | null>>;
  currentTurn: boolean
}


export const GameGrid = ({ selectedCardName, setSelectedCardName, currentTurn, style, ...props }: GameGridProps) => {

  const rows = Array(gameConfig.gameGridHeightInUnits).fill(null);
  const cols = Array(gameConfig.gameGridWidthInUnits).fill(null);
  
  return (
    <div
      className="Component:GameGrid"
      {...props}
      style={{
        ...style,
        backgroundImage: `url(${gameConfig.gameBackgroundPath})`,
      }}
    >
      <table className='GameGrid:table'>
        <tbody>
          {rows.map((_, i) => (
            <tr key={i}>
              {cols.map((_, j) => (
                <GridCell
                  coordinates={[i,j]} selectedCardName={selectedCardName}
                  key={`GameGridCell:${i},${j}`}
                  setSelectedCardName={setSelectedCardName}
                  currentTurn={currentTurn}
                ></GridCell>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};