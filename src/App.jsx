import './App.css';

import axios from 'axios';
import { useEffect } from 'react';
import LandingPage from './pages/landingPage/LandingPage';

function App() {
  useEffect(() => {
    axios
      .get(
        'http://api.giphy.com/v1/gifs/trending?api_key=cccCgrhtpNLJUQnNJ86pbguPLzWjscn7'
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
