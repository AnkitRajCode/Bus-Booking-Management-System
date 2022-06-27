import Navbar from '../components/Navbar'
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
        <div className='w-full h-screen bg-cover bg-center bg-no-repeat px-20' style={{backgroundImage:'url(/Images/login.svg)'}}>
            <Navbar />
            <div className=" h-[calc(100vh-80px)] flex justify-center items-center">
                <div className="flex flex-col justify-between items-center p-8 w-[500px] backdrop-blur-xl  bg-signup rounded-xl border border-slate-200">
                    <div className='text-3xl font-bold uppercase tracking-wider'>Signup</div>
                    <div className='text-lg font-medium text-center my-10 w-80'>
                        Login and access free and Premium quality UI design for websites.
                    </div>
                    <button className="w-full py-2 bg-signup rounded-md" onClick={signUpWithGoogle}><i className="fa-brands fa-google"></i> Signup</button>
                </div>
            </div>
        </div>
    )
}