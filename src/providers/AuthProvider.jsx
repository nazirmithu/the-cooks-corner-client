/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
 
const AuthProvider = ({children}) => {
    //    const user = {thumbnail_url:"https://media.istockphoto.com/id/508345848/photo/grilled-chicken-legs.jpg?s=2048x2048&w=is&k=20&c=XzSthtc6S6rYDxZRRyrJRWtI3xuGgcfcFTbaL42oaDU="}
    //    const user = null;
    const [user, setUser] = useState(null);
       
    const createUser = (email, password)=>{
            return createUserWithEmailAndPassword(auth, email, password);
        }

        const signInUser =(email, password)=>{
            return signInWithEmailAndPassword(auth, email, password);
        }

        const handleGoogleSignIn = ()=>{
          return  signInWithPopup(auth, googleProvider)
            .then(result=>{
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error=>{
                console.log("error", error.massage)
            })
        }

        const handleGithubSignIn =()=>{
            return signInWithPopup(auth, githubProvider)
            .then(result=>{
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error=>{
                console.log(error)
            })
        }

        const handleSignOut =()=>{
            return signOut(auth)
            .then(result=>{
                console.log(result)
                setUser(null);
            })
            .catch(error=>{
                console.log(error)
            })
        }
        
    const authInfo = {
        user,
        createUser,
        signInUser,
        handleGoogleSignIn,
        handleGithubSignIn,
        handleSignOut        
        }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;