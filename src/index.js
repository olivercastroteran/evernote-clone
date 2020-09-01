import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD1xOx5idVA-uypMiYAM-uUXPKFSgzXZNU',
  authDomain: 'evernote-clone-71916.firebaseapp.com',
  databaseURL: 'https://evernote-clone-71916.firebaseio.com',
  projectId: 'evernote-clone-71916',
  storageBucket: 'evernote-clone-71916.appspot.com',
  messagingSenderId: '752930217106',
  appId: '1:752930217106:web:d9c0ebbf5dbe69f2395a4b',
  measurementId: 'G-LQHEM2DG0F',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
