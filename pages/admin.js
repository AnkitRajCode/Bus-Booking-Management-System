import Navbar from '../components/Navbar';
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
      <div className='w-full h-screen bg-cover bg-center bg-no-repeat px-20' style={{backgroundImage:'url(/Images/login.svg)'}}>
            <Navbar />
            <div className=" h-[calc(100vh-80px)] flex justify-center items-center">
                <div className="flex flex-col space-y-6 justify-between items-center p-8 w-[500px] backdrop-blur-xl  bg-signup rounded-xl border border-slate-200">
                    <div className='text-3xl font-bold uppercase tracking-wider'>Admin Login</div>
                    <input className='w-full rounded-md bg-signup p-2 focus:outline-none' type="email" onChange={(event) => setEmail(event.target.value)}value={email} placeholder="Email"  />
                    <input className='w-full rounded-md bg-signup p-2 focus:outline-none' type="password" onChange={(event) => setPassword(event.target.value)} value={password} placeholder="Password" />
                    <button className="w-full py-2 bg-signup rounded-md" onClick={signIn}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Admin