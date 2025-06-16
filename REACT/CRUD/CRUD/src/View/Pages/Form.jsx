import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const [userdata, setUserdata] = useState([]);

    // Handle form submission (POST)
    const handleForm = async (data) => {
        try {
            await axios.post('http://localhost:3001/user', data);
            reset();
            getData(); // Refresh the data after submission
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    // Fetch data (GET)
    const getData = async () => {
        try {
            const result = await axios.get('http://localhost:3001/user');
            setUserdata(result.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Delete user (DELETE)
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/user/${id}`);
            getData(); // Refresh the data after deletion
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    // Fetch data on component mount
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    {/* Form */}
                    <div className="card shadow-sm mb-4">
                        <div className="card-body">
                            <h5 className="card-title text-center">User Form</h5>
                            <form onSubmit={handleSubmit(handleForm)}>
                                <div className="mb-3">
                                    <label htmlFor="fname" className="form-label">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fname"
                                        className="form-control"
                                        {...register('fname', { required: true })}
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title text-center">User List</h5>
                            <table className="table table-striped table-bordered">
                                <thead className="table-dark">
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userdata.length > 0 ? (
                                        userdata.map((user, index) => (
                                            <tr key={user.id}>
                                                <td>{index + 1}</td>
                                                <td>{user.fname}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-warning btn-sm me-2"
                                                        onClick={() => navigate(`/update/${user.id}`)}
                                                    >
                                                        Update
                                                    </button>
                                                    <button
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() => handleDelete(user.id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="3" className="text-center">
                                                No data found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
