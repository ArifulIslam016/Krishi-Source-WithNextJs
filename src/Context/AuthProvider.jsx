"use client";

import React, { useEffect, useState } from 'react';
import { Authcontext } from './Context';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';

const AuthProvider = ({children}) => {
        const [user,setUser]=useState(null)
    const [loading, setLoading]=useState(true)
    const googleProvider=new GoogleAuthProvider()
  const CreateUser=(email,Password,)=>{
    return createUserWithEmailAndPassword(auth,email,Password,)
  }
  const Signin=(email,Password)=>{
return signInWithEmailAndPassword(auth,email,Password)
  }
  const SocialLogin=()=>{
    return signInWithPopup(auth,googleProvider)
  }
  const Signout=()=>{
    return signOut(auth).then(()=>{
              localStorage.setItem("isLoggedIn", JSON.stringify(false));

    })
  }
  const updateUserProfile=(updatedinfo)=>{
    return updateProfile(auth.currentUser,updatedinfo)
  }

  useEffect(()=>{
  const unsubscribe=  onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
if(currentUser){
            localStorage.setItem("isLoggedIn", JSON.stringify(true));

}else{
    localStorage.setItem("isLoggedIn", JSON.stringify(false));

}
    })
    return ()=> unsubscribe()
  },[])
    const userInfo={
        CreateUser,
        Signin,
        Signout,
        SocialLogin,
        user,
        updateUserProfile,
        loading
    }

    return (
       <Authcontext value={userInfo}>
        {children}
       </Authcontext>
    );
};

export default AuthProvider;