import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
state = {
 	greetings:"大家好朋友",
};
componentDidMount = () => {
	this.fetchData();
};
fetchData = () => {
    fetch(new Request ('https://www.maximilian-wick.de/api', {
            method: 'GET',
            headers: new Headers({
                    'Content-Type':'application/json',
                    'Origin':"https://www.maximilian-wick.de",
                    'Access-Control-Request-Methode':"GET",
		    'Access-Control-Request-Headers':"X-Custom-Header",
            }),
    }))
    .then(function(response){
            return response.json()
    })
    .then(function(res){
	console.log(res);
    });
};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
	  <p>{this.state.greetings}</p>
        </header>
      </div>
    );
  }
}

export default App;
