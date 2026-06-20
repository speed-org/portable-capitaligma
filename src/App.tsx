import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GameGrid } from './components/GameGrid';

function App() {
  return (
    <div style={{ 
      width: "100%", 
      height: "100vh", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      gap: "20px", // Añade espacio entre cada grid
      backgroundColor: "#fafafa"
    }}>
      <GameGrid widthInUnits={16} heightInUnits={9} width={1280} height={720} />
    </div>
  );
}

export default App;