/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();  
 
const AuthProvider = ({children}) => {
    //    const user = {thumbnail_url:"https://media.istockphoto.com/id/508345848/photo/grilled-chicken-legs.jpg?s=2048x2048&w=is&k=20&c=XzSthtc6S6rYDxZRRyrJRWtI3xuGgcfcFTbaL42oaDU="}
       const user = null;

        const createUser = (email, password)=>{
            return createUserWithEmailAndPassword(auth, email, password);
        }

        const signInUser =(email, password)=>{
            return signInWithEmailAndPassword(auth, email, password);
        }

        
    const authInfo = {
        user,
        createUser,
        signInUser,        
        }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;