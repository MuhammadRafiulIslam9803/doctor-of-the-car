import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from './firebaseconfig';
export const AuthContext = createContext()

const auth = getAuth(app)
const UserContext = ({ children }) => {
    const [user, setUser] = useState({})

    const createUser = (email ,password)=>{
        return createUserWithEmailAndPassword(auth , email , password)
    }
    const handleSingin =(email ,password) =>{
        return signInWithEmailAndPassword(auth ,email , password)
    }
    const provider = new GoogleAuthProvider()
    const googleSingIn = ()=>{
       return signInWithPopup(auth ,provider)
    }

    // useEffect(() => {
    //     const unSubscribe =onAuthStateChanged(auth, (currentUser) => {
    //         setUser(currentUser)
    //     })
    //     return () => {
    //         unSubscribe()
    //     }
    // }, [])
    const authInfo = { 
        user ,
        createUser,
        handleSingin,
        googleSingIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;