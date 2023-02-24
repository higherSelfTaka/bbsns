import {createContext, useContext, useEffect, useState} from 'react'
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
  
} from 'firebase/auth'

import {auth} from '../../firebase'


const UserContext = createContext();

export const AuthContextProvider=({children})=> {
 const [user, setUser] = useState({})

    // signup
    const  createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // signin 
    const signIn =(email, password)=>{
      return signInWithEmailAndPassword(auth, email, password);
    }
    // Google sign in 
    const googleSignIn =()=>{
        const provider= new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    } 

    // logout
    const logout = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
       const unsub = onAuthStateChanged(auth, (currentUser)=>{
          console.log(currentUser)
          setUser(currentUser)
         
       })
       return ()=>{
        unsub()
       }
    },[])

　

   return (
    <UserContext.Provider value={{createUser, user, setUser, logout, signIn, googleSignIn}}>
        {children}
    </UserContext.Provider>
   )
}



export const UserAuth = () => {
    return useContext(UserContext);
  };