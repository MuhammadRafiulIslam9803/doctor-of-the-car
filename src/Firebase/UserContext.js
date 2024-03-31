import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from './firebaseconfig';
export const AuthContext = createContext()

const auth = getAuth(app)
const UserContext = ({ children }) => {
    const [user, setUser] = useState({})
    const [loding ,setLoading] = useState(true)

    const createUser = (email ,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }
    const handleSingin =(email ,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth ,email , password)
    }
    const provider = new GoogleAuthProvider()
    const googleSingIn = ()=>{
        setLoading(true)
       return signInWithPopup(auth ,provider)
    }
    const handleLogoutUser =()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe =onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])
    const authInfo = { 
        user ,
        loding,
        createUser,
        handleSingin,
        googleSingIn,
        handleLogoutUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;