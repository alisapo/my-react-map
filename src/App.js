import React, { useEffect, useState } from 'react';

import axios from 'axios';

import MapComponent from './components/MapComponent'

import './App.css';

function App() {
  const [incidents, setIncidents] = useState([]);
  
  useEffect(() => {
    axios.get('https://data.sfgov.org/resource/wr8u-xric.json', {
      params: {
        "$limit": 100,
        "$$app_token": 'lb1fieevDcRSzaeeamdVq9nrK'
      }
    })
      .then((res) => {
        setIncidents(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <div>
      <MapComponent incidents={incidents} />
    </div>
  );
}

export default App;
