import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const Form2 = () => {
    const { register, handleSubmit, reset } = useForm();
    const [users, setUsers] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        const userDetails = JSON.parse(localStorage.getItem("users")) || [];
        // const userDetails = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(userDetails);
    }, []);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    const onSubmit = (data) => {
        const updatedUsers = [...users];

        if (editIndex !== null) {
            updatedUsers[editIndex] = { name: data.name, email: data.email };
            setEditIndex(null);
        }
        else {
            updatedUsers.push({ name: data.name, email: data.email });
        }
        setUsers(updatedUsers);
        reset({ name: "", email: "" });
    };

    const editUser = (id) => {
        reset(users[id]);
        setEditIndex(id);
        
    };

    const deleteUser = (id) => {
        const updatedUsers = [...users];
        updatedUsers.splice(id, 1);
        setUsers(updatedUsers);
    };

    return (
        <>
            <div className="container mt-5 w-25">
                {/* <h2 className='text-center fw-bold mb-4'>User form</h2> */}
                <h2 className='text-center fw-bold mb-4'>
                    {editIndex !== null ? "Edit User" : "User Form"}
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className='shadow p-3'>
                    <div className="mb-3">
                        <label htmlFor="name"
                            className='form-label fw-bold'>
                            Name
                        </label>
                        <input type="text"
                            className='form-control'
                            id='name'
                            {...register("name", { required: true })} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email"
                            className='form-label fw-bold'>
                            Email
                        </label>
                        <input type="email"
                            className='form-control'
                            id='email'
                            {...register("email", { required: true })} />
                    </div>

                    {/* <button type='submit'
                        className='btn btn-success w-100'>Submit</button> */}
                    
                    <button type='submit'
                        className='btn btn-success w-100'>
                            {editIndex !== null ? "Update" : "Submit"}
                        </button>
                </form>
            </div>
            <div className="container my-5">
                <h3 className='text-center fw-bold mb-4'>User List</h3>

                <table className='table shadow table-striped table-hover text-center shadow'>
                    <thead className='table-dark'>
                        <tr className=''>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className='btn btn-warning me-2' onClick={() => editUser(index)}>Edit</button>
                                    <button className='btn btn-danger' onClick={() => deleteUser(index)}>delete</button>

                                </td>
                            </tr>
                        ))}
                        {users.length === 0 && (
                            <tr>
                                <td colSpan="4">No users found.</td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Form2