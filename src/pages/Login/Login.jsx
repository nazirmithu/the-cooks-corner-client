/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signInUser, GoogleSignIn, GithubSignIn, } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");


    const handleLogin = event => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        

        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                error.message
            })
    }

    const handlePassword = (event) => {
        const passwordInput = event.target.value;
        setPassword(passwordInput);
        if (passwordInput.length < 6) {
            setPasswordError("Password must at list 6 characters");
        }
        else {
            setPasswordError("");
        }
    }

    const handleEmail = (event) => {
        const emailInput = event.target.value;
        setEmail(emailInput);
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInput)) {
            setEmailError("Please provide a valid email");
        }
        else {
            setEmailError("");
        }
    }

    const handleGoogleSignIn = () => {
        GoogleSignIn()
        navigate(from, { replace: true })
    }

    const handleGithubSignIn = () => {
        GithubSignIn()
        navigate(from, { replace: true })
    }


    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="mt-4 mb-4 text-5xl font-bold">Please Login !</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-md bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            {emailError && <span className='text-red-500'>{emailError}</span>}
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
                            {passwordError && <span className='text-red-500'>{passwordError}</span>}
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
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='mb-4 ml-8'>
                        <Link to="/register" className="label-text-alt link link-hover text-green-300">
                            New to this site ? Please Register
                        </Link>
                    </p>
                </div>
                <div>
                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info gap-2"><FaGoogle /> Login with Google</button>
                </div>
                <div>
                    <button onClick={handleGithubSignIn} className="btn btn-outline btn-success gap-2"><FaGithub /> Login with Github</button>
                </div>
            </div>
        </div>
    );
};

export default Login;