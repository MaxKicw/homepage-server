import React from 'react';
import Login from './components/Login/Login';
import Creditcard from './components/Creditcard/Creditcard';
import Langswitch from './components/Langswitch/Langswitch';
import './App.css';

function App() {
  return (
    <div className="App">
      <Langswitch></Langswitch>
      <Login></Login>
      <Creditcard></Creditcard>
    </div>
  );
}

export default App;

