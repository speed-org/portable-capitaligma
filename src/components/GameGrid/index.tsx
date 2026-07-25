import { Card } from '../Card-component/Card';
import { Container } from '../Container';
import './index.css';
import { CARD_LEVEL, CARD_TYPE} from '../../constants';

interface GameGridProps {
  widthInUnits?: number;
  heightInUnits?: number;
  width: string;
  height: string;
  bgPath: string;
}
export const GameGrid = ({ widthInUnits = 10, heightInUnits = 8, width, height, bgPath }: GameGridProps) => {

  const rows = Array(heightInUnits).fill(null);
  const cols = Array(widthInUnits).fill(null);
  
  return (
    <Container
      className="Component:GameGrid"
      style={{
        width,
        height,
        backgroundImage: `url(${bgPath})`,
      }}
    >
      <table className='GameGrid:table'>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {cols.map((col, j) => (
                <td className="cell" key={j}>
                  <Card level={CARD_LEVEL.LVL_1} type={CARD_TYPE.FARM} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};