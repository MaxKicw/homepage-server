import React from 'react';
import Login from './components/Login/Login';
import Welcome from './components/Welcome/Welcome';
import Creditcard from './components/Creditcard/Creditcard';
import Langswitch from './components/Langswitch/Langswitch';
import Waring from './components/Warning/Warning';
import Background from './components/Background/Background';
import './App.css';

function App() {
  return (
    <div className="App">
      <Langswitch></Langswitch>
        <Waring></Waring>
          <Login></Login>
            <Welcome></Welcome>
          <Creditcard></Creditcard>
      <Background></Background>
    </div>
  );
}

export default App;

