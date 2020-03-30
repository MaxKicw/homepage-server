import React from 'react';
import {Helmet} from "react-helmet";
import Login from './components/Login/Login';
import Welcome from './components/Welcome/Welcome';
import Creditcard from './components/Creditcard/Creditcard';
import Box from './components/Box/Box';
import Langswitch from './components/Langswitch/Langswitch';
import Waring from './components/Warning/Warning';
import Background from './components/Background/Background';
import './App.css';

function App() {
  return (
    <div className="App">
       <Helmet>
        <meta charSet="utf-8" />
        <title>Maximilian Wick</title>
      </Helmet>
      <Langswitch/>
        <Waring/>
          <Login/>
            <Welcome/>
          <Creditcard/>
          <Box/>
      <Background/>
    </div>
  );
}

export default App;

