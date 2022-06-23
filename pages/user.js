import Head from 'next/head';
// import { app } from '../firebase/firebase';
import { useEffect } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { useState } from 'react';
import { useRouter } from 'next/router';
export default function User(){
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signUpWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((response) => {
                sessionStorage.setItem('Token', response.user.accessToken)
                console.log(response.user)
                router.push('/profile')
            })
    }

    useEffect(() => {
        let token = sessionStorage.getItem('Token')

        if(token){
            router.push('/profile')
        }
    }, [])
    return ( 
        <div className="login-div">
        <div className="logo"></div>
        <div className="title">Passenger Login</div>
        <br>
        </br>
        <button className="signin-button" onClick={signUpWithGoogle}>Google</button>
        </div>
    )
}