import React from 'react';
import Login from './components/Login/Login';
import Welcome from './components/Welcome/Welcome';
import Creditcard from './components/Creditcard/Creditcard';
import Box from './components/Box/Box';
import Card from './components/Card/Card';
import Langswitch from './components/Langswitch/Langswitch';
import Waring from './components/Warning/Warning';
import Background from './components/Background/Background';
import './App.css';

function App() {
  return (
    <div className="App">
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

