import './App.css';

import { Route, Routes } from 'react-router-dom';

import LandingPage from './pages/landingPage/LandingPage';
import DataProvider from './dataProvider/DataProvider';
import ContainerPage from './pages/containerPage/ContainerPage';
import TrendingDetailsPage from './pages/detailsPage/tendingDetails/TrendingDetailsPage';
import EmojiDetailsPage from './pages/detailsPage/emojiDetails/EmojiDetailsPage';
import SearchDtlPage from './pages/detailsPage/searchDtls/SearchDtlPage';
import NavRouteDetailsPage from './pages/detailsPage/navRouteDtls/NavRouteDetailsPage';

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route index element={<ContainerPage />} />
          <Route path='/trendDtls' element={<TrendingDetailsPage />} />
          <Route path='/emojiDtls' element={<EmojiDetailsPage />} />
          <Route path='/searchDtls' element={<SearchDtlPage />} />
          <Route path='navRoute' element={<NavRouteDetailsPage />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
