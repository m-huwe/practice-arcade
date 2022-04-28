import './Styles/App.css';
import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.js'
import ArcadeContext from './Context/ArcadeContext'; 
import HomePage from './Pages/Home_Page';
import AboutPage from './Pages/About_Page';
import Game1 from './Pages/Game_1_Page';
import Game2 from './Pages/Game_2_Page';
import Game3 from './Pages/Game_3_Page';

const initialState = {

};


function App() {
  const [state, dispatch] = useState(initialState)

  return (
    <div className='App'>
      <ArcadeContext.Provider value={[state, dispatch]}>
      <div>
        <Header />
      </div>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='Game1' element={<Game1 />} />
        <Route path='Game2' element={<Game2 />} />
        <Route path='Game3' element={<Game3 />} />
        <Route path='About' element={<AboutPage />} />
      </Routes>
      </ArcadeContext.Provider>
    </div>
  );
}

export default App;
