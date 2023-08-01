import './App.css';

import { Route, Routes } from 'react-router-dom';

import LandingPage from './pages/landingPage/LandingPage';
import DataProvider from './dataProvider/DataProvider';
import ContainerPage from './pages/containerPage/ContainerPage';
import TrendingDetailsPage from './pages/detailsPage/tendingDetails/TrendingDetailsPage';
import EmojiDetailsPage from './pages/detailsPage/emojiDetails/EmojiDetailsPage';

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route index element={<ContainerPage />} />
          <Route path='/trendDtls' element={<TrendingDetailsPage />} />
          <Route path='/emojiDtls' element={<EmojiDetailsPage />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
