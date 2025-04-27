import React from 'react'
import { useForm } from 'react-hook-form'
import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm();
    const provider = new GoogleAuthProvider();

    const handleGoogleSignup = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // navigate to the dashboard

        } catch (error) {
            console.error('Google Sign-in Error:', error);
        }
    };
    const onSubmit = (data) => {
        console.log(data);
        reset();
    }
    return (
        <>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-5'>
                        <div className='card m-3 shadow'>
                            <div className='card-header text-center fs-3 bg-light'>Login</div>
                            <div className='card-body'>

                                <form action="" className='form-control' onSubmit={handleSubmit(onsubmit)}>

                                    <div className='mb-2 form-group'>
                                        <label htmlFor="email" className='form-label'>Email:</label>
                                        <input type='email' className='form-control' {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Invalid email address'
                                            }
                                        })} placeholder='Enter Email' />
                                        {errors.email && <span className='text-danger'>{errors.email.message}</span>}
                                    </div>
                                    <div className='mb-2 form-group'>
                                        <label htmlFor="password" className='form-label'>Password:</label>
                                        <input type='password' className='form-control' {...register('password', {
                                            required: 'Password is required',
                                            minLength: {
                                                value: 8,
                                                message: 'Password must be at least 8 characters'
                                            }
                                        })} placeholder='Enter Password' />
                                        {errors.password && <span className='text-danger'>{errors.password.message}</span>}
                                    </div>
                                    <button type='submit' className='btn btn-outline-primary w-100'>Login</button>
                                </form>
                                <div className='d-flex align-items-center my-3'>
                                    <hr className="flex-grow-1" />
                                    <span className='mx-2 text-muted'>OR</span>
                                    <hr className="flex-grow-1" />
                                </div>
                                <button
                                    type='button'
                                    className='btn border-secondary w-100 mb-3'
                                    onClick={handleGoogleSignup}
                                >
                                    <img src='./public/Images/google_logo.png' alt="Google Logo" style={{ width: '25px', height: '25px' }} className='me-2' />
                                    Sign in with Google
                                </button>
                                <div className='text-center'>
                                    <p>Not a member? <Link to='/register'>Sign up now</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login