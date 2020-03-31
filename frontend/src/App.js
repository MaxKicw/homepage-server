import React from 'react';
import {Helmet} from "react-helmet";
import {BrowserRouter} from 'react-router-dom';
import Login from './components/Login/Login';
import Welcome from './components/Welcome/Welcome';
import {Route} from "react-router-dom";
import Creditcard from './components/Creditcard/Creditcard';
import Box from './components/Box/Box';
import Article from './components/Article/Article';
import Langswitch from './components/Langswitch/Langswitch';
import Background from './components/Background/Background';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Maximilian Wick</title>
        </Helmet>
        <Langswitch/>
            <Login/>
              <Welcome/>
            <Creditcard/>
            <Route path="/" exact component={Box}/>
            <Route path="/article" component={Article}/>
        <Background/>
      </div>
    </BrowserRouter>
  );
}

export default App;

