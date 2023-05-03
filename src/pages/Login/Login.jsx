/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();  

const Login = () => {
    const {signInUser}= useContext(AuthContext);

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError]= useState("");

    const [email, setEmail]= useState("");
    const[emailError, setEmailError] = useState("");
        

    const handleLogin = event=>{
        event.preventDefault();
        const form = event.target;
        const email =form.email.value;
        const password =form.password.value;
        form.reset();
        console.log(email, password)

        signInUser(email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    
    const handlePassword =(event)=>{
        const passwordInput = event.target.value;
        setPassword(passwordInput);
        form.reset();
        if(passwordInput.length <6){
            setPasswordError("Password must at list 6 characters");
        }
        else{
            setPasswordError("");
        }
    }

    const handleEmail = (event)=>{
        const emailInput = event.target.value;
        setEmail(emailInput);
        if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInput)){
            setEmailError("Please provide a valid email");
        }
        else{
            setEmailError("");
        }
    }

    const handleGoogleSignIn = ()=>{
        signInWithPopup(auth, provider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log("error", error.massage)
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Login !</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            {emailError && <span className='text-red-500'>{emailError}</span> }
                            <input 
                            type="email" 
                            name="email" 
                            placeholder="email"
                            value={email}
                            onChange={handleEmail}                            
                            className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            {passwordError && <span className='text-red-500'>{passwordError}</span> }
                            <input 
                            type="password" 
                            name="password" 
                            placeholder="password" 
                            value={password} 
                            onChange={handlePassword}
                            className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <Link to="/"><button className="btn btn-primary">Login</button></Link>
                        </div>                    
                    </form>
                    <p className='mb-4 ml-8'>
                        <Link to="/register" className="label-text-alt link link-hover">
                            New to this site ? Please Register
                        </Link>
                    </p>
                </div>
                <div>
                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info gap-2"><FaGoogle /> Login with Google</button>
                </div>
                <div>
                    <button className="btn btn-outline btn-success gap-2"><FaGithub /> Login with Github</button>
                </div>                
            </div>
        </div>
    );
};

export default Login;