import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,getIdToken, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
const { useState, useEffect } = require("react");


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
   
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const singInGoogle = () => {
       return signInWithPopup(auth, googleProvider);
            
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
          })
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                getIdToken(user)
                .then(idToken => localStorage.setItem('idToken',idToken))
              setUser(user)
            } 
          });
          return unsubscribe;
    },[])

    return{
        user,
        singInGoogle,
        logOut
    }
  
      
};
export default useFirebase;