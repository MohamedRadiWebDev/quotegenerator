

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

const App = () => {
  const [advice, setAdvice] = useState('');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    setAnimate(false);
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice);
        setAnimate(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="app">
      <div className="card">
      <h1 className={`heading ${animate ? 'animate' : ''}`}>{advice}</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;

