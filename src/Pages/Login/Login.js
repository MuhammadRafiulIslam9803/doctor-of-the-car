import React, { useContext, useState } from 'react';
import login from '../../assets/images/login/login.svg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Firebase/UserContext';

const Login = () => {
    const {handleSingin} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;

        handleSingin(email ,password).then((userCredential)=>{
            const user = userCredential.user;
            if(user.uid){
                alert('login successfully')
                navigate('/home')
            }
        })
        .catch(error => console.log(error))

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col-2">
                <div className="text-center lg:text-left">

                    <img className='mt-8 mr-5' src={login} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-bold mb-4">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to='/forgetPassword' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-outline btn-warning">Login</button>
                        </div>
                        <label className="label">
                            <Link to='/registration' className="label-text-alt link link-hover">New to Car Doctor please SingUp?</Link>
                        </label>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;