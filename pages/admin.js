import Head from 'next/head';
import { app } from '../firebase/firebase';
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
const Admin = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
        .then((response) => {
            console.log(response.user)
            sessionStorage.setItem('Token', response.user.accessToken);
            router.push('/dashboard')
        })
        .catch(err => {
            alert('No such admin!!!')
        })
}
useEffect(() => {
  let token = sessionStorage.getItem('Token')

  if(token){
      router.push('/dashboard')
  }
}, [])
    return ( 
     <div className="login-div">
     <div className="logo"></div>
     <div className="title">Admin Login</div>
     <div className="fields">
     <div className="username">
     <input type="email" className="user-input"  onChange={(event) => setEmail(event.target.value)}value={email} placeholder="Email" />
     </div>
     <div className="password">
    <input type="password" className="pass-input" onChange={(event) => setPassword(event.target.value)} value={password} placeholder="Password" /></div>
     </div>
     <button className="signin-button" onClick={signIn}>Login</button>
      <div className="link">
     <a href="#">Forgot password ?</a>
     </div>
     </div>
    )
}

export default Admin