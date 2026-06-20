import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Game } from './pages/Game';

function App() {
  const NotFound = () => <p>Not Found</p>;
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/game' element={<Game/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
