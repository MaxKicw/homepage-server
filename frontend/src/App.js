import React from 'react';
import Login from './components/Login/Login';
import Creditcard from './components/Creditcard/Creditcard';
import Langswitch from './components/Langswitch/Langswitch';
import Waring from './components/Warning/Warning';
import './App.css';

function App() {
  return (
    <div className="App">
      <Langswitch></Langswitch>
      <Waring></Waring>
      <Login></Login>
      {/* <Creditcard></Creditcard> */}
    </div>
  );
}

export default App;

