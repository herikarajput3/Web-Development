import React from 'react'
import { useForm } from 'react-hook-form'
import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const handleGoogleSignup = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Pre-fill the form fields with Google user data
            setValue('name', user.displayName || '');
            setValue('email', user.email || '');
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
                        <div className='card m-3 border-primary shadow'>
                            <div className='card-header text-center fs-3 bg-light'>Register</div>
                            <div className='card-body'>

                                <form action="" className='form-control' onSubmit={handleSubmit(onsubmit)}>

                                    <div className='mb-2 form-group'>
                                        <label htmlFor="name" className='form-label'>Name:</label>
                                        <input type='text' className='form-control' {...register('name', {
                                            required: 'Name is required',
                                            pattern: {
                                                value: /^[A-Za-z\s]+$/i,
                                                message: 'Only alphabets and spaces are allowed'
                                            }
                                        })} placeholder='Enter Name' />
                                        {errors.name && <span className='text-danger'>{errors.name.message}</span>}
                                    </div>
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
                                    <div className='mb-2 form-group'>
                                        <label htmlFor='phone' className='form-label'>Phone:</label>
                                        <input type='number' className='form-control' {...register('phone', {
                                            required: 'Phone is required',
                                            pattern: {
                                                value: /^[0-9]{10}$/,
                                                message: 'Phone number must be 10 digits'
                                            }
                                        })} placeholder='Enter Phone' />
                                        {errors.phone && <span className='text-danger'>{errors.phone.message}</span>}
                                    </div>
                                    <div className='mb-2 form-group'>
                                        <label htmlFor='address' className='form-label'>Address:</label>
                                        <textarea type='text' className='form-control' {...register('address', {
                                            required: 'Address is required',
                                            minLength: {
                                                value: 15,
                                                message: 'Address must be at least 15 characters'
                                            }
                                        })} placeholder='Enter Address' />
                                        {errors.address && <span className='text-danger'>{errors.address.message}</span>}
                                    </div>
                                    <button type='submit' className='btn btn-outline-primary w-100'>Register</button>
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
                                    <i class="fa-brands fa-google me-2 fs-5"></i>
                                    Sign up with Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register