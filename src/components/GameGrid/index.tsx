import { CardName } from '../../types';
import './index.css';
import { GridCell } from './GridCell';
import { gameConfig } from '../../game/config';
import { PlayerManager } from '../../managers/playerManager';

interface GameGridProps extends React.HTMLAttributes<HTMLDivElement> {
  selectedCardName: CardName | null;
  setSelectedCardName: React.Dispatch<React.SetStateAction<CardName | null>>;
  currentTurn: boolean
  playerManager: PlayerManager
}


export const GameGrid = ({ selectedCardName, setSelectedCardName, currentTurn, style, playerManager, ...props }: GameGridProps) => {

  const rows = Array(gameConfig.gameGridHeightInUnits).fill(null);
  const cols = Array(gameConfig.gameGridWidthInUnits).fill(null);

  return (
    <div
      className="Component:GameGrid"
      {...props}
      style={{
        ...style,
        position: "relative",
      }}
    >
      <img src={gameConfig.gameBackgroundPath} alt="xd" style={{height: "100%", width: "100%", position: "absolute", top:0}} onError={() => "Error!!!"}/>
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
                  playerManager={playerManager}
                ></GridCell>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};