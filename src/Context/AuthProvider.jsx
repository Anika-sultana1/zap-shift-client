import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../firebase.init';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';


const AuthProvider = ({children}) => {

const [user, setUser] = useState(null)
const [loading, setLoading] = useState(false);
const registerUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

const signInUser = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

const googleProvider = new GoogleAuthProvider()

const signInUserGoogle = ()=>{
    setLoading(true)
return signInWithPopup(googleProvider, auth)

}

const logOut = ()=>{
    setLoading(true)
    return signOut(auth);
}

// observeUseState 
useEffect( ()=>{

 const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{

    setUser(currentUser)
setLoading(false)
 })

 return ()=>{
    unsubscribe();
 }

},[])


const authInfo = {
user,
loading,
 setUser,
    registerUser,
    signInUser,
    signInUserGoogle ,
    logOut ,
}

    return (
       <AuthContext value={authInfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;