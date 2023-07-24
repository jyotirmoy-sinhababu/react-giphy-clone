import './App.css';

import axios from 'axios';
import { useEffect } from 'react';
import LandingPage from './pages/landingPage/LandingPage';

function App() {
  useEffect(() => {
    axios
      .get(
        'http://api.giphy.com/v1/gifs/trending?api_key=G078G7a8mc4ttRrNNvRqHCSAlv00mr62'
      )
      .then((res) => {
        console.log(res.data);
      });
  });

  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
