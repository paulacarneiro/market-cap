import { Routes, Route } from 'react-router-dom';

import Dashboard from './routes/dashboard-page/dashboard-page';
import Coin from './routes/coin-page/coin-page';

import './App.scss';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route  path='/' element={<Dashboard />} />
        <Route path='/:id' element={<Coin />} />
      </Routes>
    </div>
    
  );
}

export default App;
