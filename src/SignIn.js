import React from 'react'
import './SignIn.css'
import {auth, githubProvider} from './Base'

const SignIn =()=>{
    const authenticate=()=>{
        console.log('mamama')
 auth.signInWithPopup(githubProvider)
    }
    return(
        <button className="SignIn" onClick={authenticate}>Sign in button    </button>
    )

}
export default SignIn