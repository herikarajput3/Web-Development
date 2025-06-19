import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Form = () => {
    const [userData, setUserData] = useState([]);
    const [formData, setFormData] = useState({ fname: "", lname: "" });
    const [editingUser, setEditingUser] = useState(null);

    const fetchUsers = async () => {
        const res = await axios.get('http://localhost:3000/users');
        setUserData(res.data);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingUser) {
                // Update user
                await axios.put(`http://localhost:3000/users/${editingUser.id}`, formData);
                setEditingUser(null);
            } else {
                // Create user
                await axios.post('http://localhost:3000/users', formData);
            }
            setFormData({ fname: "", lname: "" });
            fetchUsers();
        } catch (err) {
            console.error("Error submitting form", err);
        }
    };

    const handleEdit = (user) => {
        setEditingUser(user);
        setFormData({ fname: user.fname, lname: user.lname });
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/users/${id}`);
            fetchUsers();
        } catch (err) {
            console.error("Error deleting user", err);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-4">
                    <form className="form-control" onSubmit={handleSubmit}>
                        <label htmlFor="fname" className="form-label my-2">First Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="fname"
                            value={formData.fname}
                            onChange={handleChange}
                        />
                        <label htmlFor="lname" className="form-label my-2">Last Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="lname"
                            value={formData.lname}
                            onChange={handleChange}
                        />
                        <button type="submit" className="btn btn-primary my-3">
                            {editingUser ? "Update" : "Submit"}
                        </button>
                    </form>
                </div>
                <div className="col-8">
                    <table className="table table-striped table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.length > 0 ? (
                                userData.map((user, index) => (
                                    <tr key={user.id}>
                                        <td>{index + 1}</td>
                                        <td>{user.fname}</td>
                                        <td>{user.lname}</td>
                                        <td>
                                            <div>
                                                <button
                                                    className="btn btn-warning me-2"
                                                    onClick={() => handleEdit(user)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => deleteUser(user.id)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center fw-bold fs-5">No Data Found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Form;
