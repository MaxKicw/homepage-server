import React from 'react';
import ReactDOM from 'react-dom';
//Added for Routing
import {BrowserRouter as Router} from "react-router-dom";
//End
//Added for Communication between Back and Frontend
import {ApolloProvider} from "react-apollo";
import client from "./utils/apolloClients";
import {createStore} from "redux";
import reducer from './store/reducer';
import { Provider } from "react-redux";
//End
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer);

ReactDOM.render(
    <Router>
        <ApolloProvider client={client}>
            <Provider store={store}>
                <App/>
            </Provider>
        </ApolloProvider>
    </Router>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
