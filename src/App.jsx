import './App.css';

import LandingPage from './pages/landingPage/LandingPage';
import DataProvider from './dataProvider/DataProvider';

function App() {
  return (
    <DataProvider>
      <>
        <LandingPage />
      </>
    </DataProvider>
  );
}

export default App;
