import React from 'react'
import './SignIn.css'
import {auth, githubProvider} from './Base'

const SignIn =()=>{
    const authenticate=()=>{
        
 auth.signInWithPopup(githubProvider)
    }
    return(
        <div>
        <button className="SignIn" onClick={authenticate}>Sign in with Github</button>
        <button className="SignIn" onClick={authenticate}>Sign in with Google</button>
        </div>
    )

}
export default SignIn