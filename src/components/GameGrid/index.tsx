import './index.css';
import { GridCell } from './GridCell';
import { gameConfig } from '../../game/config';


export const GameGrid = () => {

  const rows = Array(gameConfig.gameGridHeightInUnits).fill(null);
  const cols = Array(gameConfig.gameGridWidthInUnits).fill(null);

  return (
    <div
      className="Component:GameGrid"
      style={{
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
                  coordinates={[i,j]}
                  key={`GameGridCell:${i},${j}`}
                ></GridCell>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};