import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/app.css'
import { firebase } from './firebase';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';

// v9 compat packages are API compatible with v8 code
// import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const App = (props) => {
  return(
    <Routes {...props}/>
  )
}


firebase.auth().onAuthStateChanged((user)=>{
    console.log(user)
  ReactDOM.render(<App user={user}/>,document.getElementById('root'));
})