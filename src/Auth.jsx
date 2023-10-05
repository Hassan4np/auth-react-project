import "./app.css"
import {   getAuth, signInWithPopup, signOut } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { app } from "./assets/firebase1.config";
import { useState } from "react";
const auth = getAuth(app);
const provider = new GithubAuthProvider();
const Auth = () => {
    const [name,setname] = useState(null)
   const henglegithubclick=()=>{
    signInWithPopup(auth, provider)
    .then(result=>{
        const users = result.user
        console.log(users)
        setname(users)
    })
    .catch(error=>{
        console.log(error)})
   }
   const hendlesigout=()=>{
    signOut(auth)
    .then(result=>{
        console.log(result)
        setname(null)
    })
    .then(error=>{
        console.log(error)
    })
   }
    return (
        <div>
            <h2>Auth Project</h2>
            {name?<button onClick={hendlesigout}>signout</button>
            :<button onClick={henglegithubclick}>Login gitgub</button>}
            { name&&<div>
                <h4>name:{name.displayName}</h4>
            </div>}
        </div>

    );
};

export default Auth;