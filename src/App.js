import React from 'react';
import './App.css';
import EightBall from './EightBall';
import Answers from './Answers';
import './EightBall.css'


function App() {
  return (
    <>
      <EightBall answers={Answers}/>

    </>
  );
}

export default App;
