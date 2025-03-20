import React from 'react';
import { useForm } from 'react-hook-form';

// install react-hook-form: npm install react-hook-form

const Form3 = () => {
    const { register, handleSubmit, reset } = useForm();

    // destructing of the form: Instead of taking the whole box (useForm()), you are picking just the tools you need from it. This is called destructuring.

    // const formTools = useForm(); // You take the whole box.
    // const register = formTools.register; // Pick the `register` tool.
    // const handleSubmit = formTools.handleSubmit; // Pick the `handleSubmit` tool.
    // const reset = formTools.reset; // Pick the `reset` tool.
    // --> Here we have to take a variable in which we take whole properties of useForm(); then we pick one by one in it.

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form className='form-control mt-3 p-4 shadow rounded' onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="text-center mb-4">Registration Form</h2>

                        <div className="form-group mb-3">
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" {...register('firstName')} required />

                            {/* register('firstName') registers the input field with the form using the key 'firstName' */}

                            {/* <input {...register('firstName')} /> */}

                            {/* Equivalent to */}

                            {/* <input
                                    name="firstName"
                                    onChange={register('firstName').onChange}
                                    onBlur={register('firstName').onBlur}
                                    ref={register('firstName').ref}
                                /> 
                                --> It adds all the necessary attributes to the input field.
                            */}
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" {...register('lastName')} required />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" {...register('email')} required />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="age">Age:</label>
                            <input type="number" className="form-control" id="age" placeholder="Enter your age" min="1" {...register('age')} required />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="password">Password:</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password" {...register('password')} required />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" {...register('confirmPassword')} required />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="gender">Gender:</label>
                            <select className="form-control" id="gender" {...register('gender')} required>
                                <option value="" disabled>Select your gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-outline-primary btn-block" >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form3;