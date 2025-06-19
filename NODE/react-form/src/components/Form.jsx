import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Form = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await axios.post('http://localhost:3000/image', data);
            console.log("Form data: ", res.data);
            reset();
        } catch (error) {
            console.error("Error uploading user data: ", error);
        }

    };
    return (
        <div className="container w-25 mt-5">
            <h2 className="text-center mb-3">User Registration</h2>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name"
                        {...register('name', { required: true })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email"
                        {...register('email', { required: true })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password"
                        {...register('password', { required: true })} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="image" className="form-label">Upload Image</label>
                    <input type="file" className="form-control" id="image"
                        {...register('image', { required: true })} />
                </div>
                {/* <div className='mb-3'>
                    <label htmlFor="textFile" className="form-label">Upload Document</label>
                    <input type="file" className="form-control" id="textFile"
                        {...register('textFile', { required: true })} />
                </div> */}
                <button type="submit" className="btn btn-outline-dark p-2">Register</button>
            </form>
        </div>
    );
};

export default Form;