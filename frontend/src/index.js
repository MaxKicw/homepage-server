import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
var keystone = require('keystone');

ReactDOM.render(<App />, document.getElementById('root'));


// Set up our keystone instance
keystone.init({
  // The name of the KeystoneJS application
  'name': 'Keystone CMS',
  // Paths to our application static files
  'static': [],
  // Keystone includes an updates framework, 
  // which you can enable by setting the auto update option to true.
  // Updates provide an easy way to seed your database, 
  // transition data when your models change, 
  // or run transformation scripts against your database.
  'auto update': true,
  // The url for your MongoDB connection
  'mongo': 'mongodb://localhost/keystonereactcms',
  // Whether to enable built-in authentication for Keystone's Admin UI,
  'auth': true,
  // The key of the Keystone List for users, required if auth is set to true
  'user model': 'User',
  // The encryption key to use for your cookies.
  'cookie secret': '6D61822FBEAED8635A4A52241FEC3',
});

// Load your project's Models
keystone.import('./server/models');

// Add routes later 

// Start Keystone
keystone.start();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
