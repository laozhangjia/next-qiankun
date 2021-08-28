/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/

import {registerMicroApps, start} from 'qiankun'

registerMicroApps([
    {
        name: 'next-app',
        entry: '//localhost:3100/next-app', // http://localhost:8080/child/vue-hash/
        container: '#root',
        activeRule: '/next-app',
    },
]);

start();
