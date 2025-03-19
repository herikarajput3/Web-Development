import React, { useState } from 'react';

const Form = () => {
    const [data, setData] = useState({
        first: "",
        last: "",
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
        gender: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Make object
        const user = {
            first: data.first,
            // used to store the values of form fields like "First Name," "Last Name," and so on. 
            // These values are updated dynamically as the user types, using the setData function with the spread operator to preserve other existing properties.
            last: data.last,
            email: data.email,
            age: data.age,
            password: data.password,
            confirmPassword: data.confirmPassword,
            gender: data.gender
        };
        // Clear form data after submission
        setData({ first: "", last: "", email: "", age: "", password: "", confirmPassword: "", gender: "" });
        // Display success message
        console.log(user);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form className='form-control mt-3 p-4 shadow rounded' onSubmit={handleSubmit}>
                        <h2 className="text-center mb-4">Registration Form</h2>

                        <div className="form-group mb-3">
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" onChange={(e) => { setData({ ...data, first: e.target.value }) }} value={data.first} required />
                        </div>
                        
                        {/* We put value={data.first} so that form value will not change until we put onChange function */}
                        {/* target refers to the DOM element which is used to access properties like classname, value, and id */}
                        {/* e.target refers to the input field element. -> e.target.value retrieves the current text entered in the input field. */}

                        <div className="form-group mb-3">
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" onChange={(e) => { setData({ ...data, last: e.target.value }) }} value={data.last} required />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={(e) => { setData({ ...data, email: e.target.value }) }} value={data.email} required />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="age">Age:</label>
                            <input type="number" className="form-control" id="age" placeholder="Enter your age" min="1" onChange={(e) => { setData({ ...data, age: e.target.value }) }} value={data.age} required />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="password">Password:</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={(e) => { setData({ ...data, password: e.target.value }) }} value={data.password} required />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" onChange={(e) => { setData({ ...data, confirmPassword: e.target.value }) }} value={data.confirmPassword} required />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="gender">Gender:</label>
                            <select className="form-control" id="gender" onChange={(e) => { setData({ ...data, gender: e.target.value }) }} value={data.gender} required>
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

export default Form;