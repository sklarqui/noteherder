import Rebase from 're-base'

import firebase from 'firebase/app'
import database from 'firebase/app'

const app = firebase.initializeApp({
    apiKey: "Your API Key Here",
    authDomain: "YOUR-APP.firebaseapp.com",
    databaseURL: "https://YOUR-APP.firebaseio.com",
    projectId: "YOUR-APP",
    storageBucket: "",
    messagingSenderId: ""
  })
  