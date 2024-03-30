import React, { useContext } from 'react';
import login from '../../assets/images/login/login.svg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Firebase/UserContext';

const SingUp = () => {
    const { googleSingIn ,createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const SingUpWithGoogle = () =>{
        googleSingIn().then(result=>{
            const user = result.user;
            if (user.uid){
                navigate('/home')
            } 
        })
        .catch(error =>console.error(error))
    }
    const handleSingUp = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUser(email, password).then((userCredential) => {
            const user = userCredential.user;
            if (user.uid) {
                alert('Registration Successful')
                navigate('/login')
            }
        })
        .catch((error) => console.error(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col-2 ">
                <div className="text-center lg:text-left">
                    <img className='mr-5' src={login} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSingUp} className="card-body">
                        <h1 className="text-5xl font-bold mb-4">Sing Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-outline btn-warning">Sing Up</button>
                        </div>
                        <label className="label">
                            <Link to='/login' className="label-text-alt link link-hover">Already Have An Account?</Link>
                        </label>
                        <div className="form-control mt-6">
                            <button onClick={SingUpWithGoogle} className="btn btn-outline btn-warning">SingUp With Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingUp;