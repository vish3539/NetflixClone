import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from '../seed';

// we need to somehow seed the database

// we need a config here
const config = {
  apiKey: 'AIzaSyDkr-aQ15C-qVtDd5hnuTB1ScNQzY2QMeA',
  authDomain: 'netflixclonestyled.firebaseapp.com',
  databaseURL: 'https://netflixclonestyled.firebaseio.com',
  projectId: 'netflixclonestyled',
  storageBucket: 'netflixclonestyled.appspot.com',
  messagingSenderId: '620370561371',
  appId: '1:620370561371:web:50ecc1773d5942c58d327e',
};

const firebase = Firebase.initializeApp(config);
//seedDatabase(firebase)
export { firebase };
