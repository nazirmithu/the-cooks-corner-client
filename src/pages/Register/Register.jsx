/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link} from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);    

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(email, name, photo, password)
        form.reset()
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handlePassword = (event) => {
        const passwordInput = event.target.value;
        setPassword(passwordInput);

        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(passwordInput)) {
            setPasswordError("Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character");
        }
        else {
            setPasswordError("");
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Register</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="photo" name="photo" placeholder="photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            {passwordError && <span className='text-red-500'>{passwordError}</span>}
                            <input
                                type="password"
                                name="password"
                                placeholder="Your Password"
                                value={password}
                                onChange={handlePassword}
                                className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <Link to="/"><button className="btn btn-primary">Register</button></Link>
                        </div>
                    </form>
                    <p className='mb-4 ml-8'>
                        <Link to="/Login" className="label-text-alt link link-hover">
                            Already Have an Account ? Please Login
                        </Link>
                    </p>
                </div>
                <div>
                    <button className=' outline outline-offset-2 outline-1'>Login with Google</button>
                </div>
                <div>
                    <button className='outline outline-offset-2 outline-1'>Login with Github</button>
                </div>
            </div>
        </div>
    );
};

export default Register;