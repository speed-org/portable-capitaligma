import { Container } from '../Container';
import './index.css';

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
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};