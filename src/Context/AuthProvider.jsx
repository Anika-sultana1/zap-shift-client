import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../firebase.init';



const AuthProvider = ({children}) => {

const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true);
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
return signInWithPopup(auth,googleProvider)

}

const logOut = ()=>{
    setLoading(true)
    return signOut(auth);
}
const forGetPassword = (email)=>{
    return sendPasswordResetEmail(auth, email)
}

const updateUserProfile = (updatedProfile)=>{

return updateProfile(auth.currentUser,updatedProfile)

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
 forGetPassword,
    registerUser,
    signInUser,
    signInUserGoogle ,
    updateUserProfile,
    logOut ,
}

    return (
       <AuthContext value={authInfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;