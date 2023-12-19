import { useState } from 'react';
import './scss/App.scss';
import Navbar from './components/Navbar/Navbar';
import Button from './components/Button/Button';
import AirlinePage from './pages/AirlinePage/AirlinePage';
import AirportPage from './pages/AirportPage/AirportPage';
import TripPage from './pages/TripPage/TripPage';

function App() {
  const [page, setPage] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <div className='menu'>
        <span>Category</span>
        <div>
          <Button text={"Airline Search"} isActive={page === 0} onClick={() => setPage(0)} />
          <Button text={"Airport Search"} isActive={page === 1} onClick={() => setPage(1)} />
          <Button text={"Trip Recommendation"} isActive={page === 2} onClick={() => setPage(2)} />
        </div>
      </div>
      {page === 0 ? <AirlinePage/> : (page === 1 ? <AirportPage /> : <TripPage />)}
    </div>
  );
}

export default App;
