/**
 * Created by tom on 3/23/2018.
 */
import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyASXho2cjnkvytdjuvVv2vUpVl424b0fxA",
    authDomain: "catch-of-the-day-pccodewarrior.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-pccodewarrior.firebaseio.com"
});


const base = Rebase.createClass(firebaseApp.database());

//named export
export {firebaseApp};

//default export
export default base;
