import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
export const AuthContext=createContext('null');
const auth=getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState([]);
    const [loading,setLoading]=useState(true);
    const googleProvider= new GoogleAuthProvider();
    const facebookProvider= new FacebookAuthProvider();

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
        .then((result)=>{
            const userInfo=result.user;
            console.log(userInfo);
        })
    }

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
        .then((result)=>{
            const userInfo=result.user;
            console.log(userInfo);
        })
    }

    const forgetPass=(email)=>{
        return sendPasswordResetEmail(auth,email)
    }
    const googleLogin=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider).then((result)=>{
            const info=result.user;
            console.log(info);
        });
    }

    const facebookLogin=()=>{
        setLoading(true);
        return signInWithPopup(auth,facebookProvider)
        .then((result)=>{
            const info=result.user;
            console.log(info);
        })
    }
    const userLogout=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            if(currentUser){
                setLoading(false);
                setUser(currentUser);
                console.log(currentUser);
            }
            else{
                setUser('')
            }
        })
        return ()=>{
            return unsubscribe();
        }
    },[])
    const authInfo={googleLogin,user,userLogout,facebookLogin,createUser,signIn,forgetPass,loading}
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;