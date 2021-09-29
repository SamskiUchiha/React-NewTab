import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/nav.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';

// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCX4yspYZ6IsrpVASLXjf4Ahe6FHs_E1NA",
    authDomain: "chrome-new-tab-49085.firebaseapp.com",
    databaseURL: "https://chrome-new-tab-49085.firebaseio.com",
    projectId: "chrome-new-tab-49085",
    storageBucket: "chrome-new-tab-49085.appspot.com",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
