import React from 'react';

import './index.css';

interface GameGridProps {
  widthInUnits?: number;
  heightInUnits?: number;
  width: number;
  height: number;
}
export const GameGrid = ({ widthInUnits = 10, heightInUnits = 8, width, height }: GameGridProps) => {

  const rows = Array(heightInUnits).fill(null);
  const cols = Array(widthInUnits).fill(null);
  
  return (
    <div style={{ 
      width: width + "px", 
      height: height + "px", 
      border: "1px solid black",
      boxSizing: "border-box"
    }}>
      <table style={{
        width: "100%", 
        height: "100%", 
        tableLayout: "fixed",
        borderCollapse: "collapse"
      }}>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {cols.map((col, j) => (
                <td className="cell" key={j} style={{ textAlign: "center", fontSize: "12px" }}>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};