import React from 'react';
import logo from './logo.svg';
import Query from './components/query/query';
import CATEGORIES_QUERY from "./querys/category/categories";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Query query={CATEGORIES_QUERY} id={null}>
        {({data:{categories}})=>{
          return(<p>{categories[0].name}</p>)
        }}
        </Query>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
