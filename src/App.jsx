import './App.css';

import { Route, Routes } from 'react-router-dom';

import LandingPage from './pages/landingPage/LandingPage';
import DataProvider from './dataProvider/DataProvider';
import ContainerPage from './pages/containerPage/ContainerPage';

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route index element={<ContainerPage />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
