import './App.css';

import { Route, Routes } from 'react-router-dom';

import LandingPage from './pages/landingPage/LandingPage';
import DataProvider from './dataProvider/DataProvider';

function App() {
  return (
    <DataProvider>
      <Routes>
        {' '}
        <LandingPage />
      </Routes>
    </DataProvider>
  );
}

export default App;
