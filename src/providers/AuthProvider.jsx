import { FacebookAuthProvider, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
export const AuthContext=createContext('null');
const auth=getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState([]);

    const googleProvider= new GoogleAuthProvider();
    const facebookProvider= new FacebookAuthProvider();
    const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider).then((result)=>{
            const info=result.user;
            console.log(info);
        });
    }

    const facebookLogin=()=>{
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
    const authInfo={googleLogin,user,userLogout,facebookLogin}
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;