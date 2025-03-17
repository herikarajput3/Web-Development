import React, { useState } from 'react';

const Form = () => {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            first,
            last,
            email,
            age,
            password,
            confirmPassword,
            gender
        };
        setFirst('');
        setLast('');
        setEmail('');
        setAge('');
        setPassword('');
        setConfirmPassword('');
        setGender('');
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
                            <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" onChange={(e) => { setFirst(e.target.value) }} value={first} required />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" onChange={(e) => { setLast(e.target.value) }} value={last} required />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={(e) => { setEmail(e.target.value) }} value={email} required />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="age">Age:</label>
                            <input type="number" className="form-control" id="age" placeholder="Enter your age" min="1" onChange={(e) => { setAge(e.target.value) }} value={age} required />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password">Password:</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={(e) => { setPassword(e.target.value) }} value={password} required />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" onChange={(e) => { setConfirmPassword(e.target.value) }} value={confirmPassword} required />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="gender">Gender:</label>
                            <select className="form-control" id="gender" onChange={(e) => { setGender(e.target.value) }} value={gender} required>
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