import React, { useState } from 'react';

// import '../css/login.css';

import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
import 'firebase/auth';  // If using Firebase storage

function UserLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showlogout, setLogout] = useState(true);

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(email, password);
      
    }

    //Add login event
    const onClickLogin = () => {
        const auth = firebase.auth()
        const promise = auth.signInWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));
 
    }

    const onClickSignUp = () => {
        const auth = firebase.auth()
        const promise = auth.createUserWithEmailAndPassword(email,password);
        promise.catch(e => console.log(e.message));
    }

    const onCLickLogout = () => {
        firebase.auth().signOut();
        setEmail("");
        setPassword("");
        alert("Logged out");
    }

    const islogin = () => setLogout(true)
    const islogout = () => setLogout(false)

    firebase.auth().onAuthStateChanged(firebaseUser => {
        
        if(firebaseUser) {
            // console.log(firebaseUser);
            // console.log('logged in!!');
            islogin();
            // console.log("show login: " + showlogout);
        } else {
            // console.log('Not logged in');
            // setLogout(false);
            islogout();
            // console.log("show logout: " + showlogout);
        }
    })

    

    return (
    <div className="container">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Email:</label>
                <input
                    className="form-control" 
                    type="email" 
                    name="email"
                    value={email} 
                    onChange={e => setEmail(e.target.value)}>
                    </input>
            </div>

            <div className="form-group">
                <label>Password:</label>
                <input 
                    className="form-control"
                    type="password"
                    name="password" 
                    value={password}  
                    onChange={e => setPassword(e.target.value)}>
                </input>
            </div>

            <button type="submit" onClick={onClickLogin} id="btnLogin" className="btn btn-primary">Log in</button>

            <button type="submit" onClick={onClickSignUp} id="btnSignUp" className="btn btn-primary">Sign Up</button>

            <button type="submit" onClick={onCLickLogout} id="btnLogout" className="btn btn-primary" style={{display: showlogout ? 'inline' : 'none'}} >Log Out</button>
        </form>
    </div>
    );


}

export default UserLogin;
