import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import { app } from "../firebase/firebase.config";
export const AuthContext=createContext('null');
const auth=getAuth(app);
const AuthProvider = ({children}) => {
    const googleProvider= new GoogleAuthProvider();
    const googleLogin=()=>{
        signInWithPopup(auth,googleProvider).then((result)=>{
        const user=result.user;
        console.log(user);
       });
    }

    const authInfo={googleLogin}
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;