import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Form = () => {
    const [users, setUsers] = useState([]);
    const { register, handleSubmit, reset, setValue } = useForm();
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(storedUsers);
    }, []);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    const onSubmit = async (data) => {
        const updatedUsers = [...users];
        if (editIndex !== null) {
            updatedUsers[editIndex] = { name: data.name, email: data.email };
            setEditIndex(null);
            toast.success("User updated successfully!");
        } else {
            updatedUsers.push({ name: data.name, email: data.email });
            toast.success("User added successfully!");
        }
        setUsers(updatedUsers);
        reset();

    };

    const editUser = (index) => {
        setValue("name", users[index].name);
        setValue("email", users[index].email);
        setEditIndex(index);
    };

    const deleteUser = (index) => {
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        setUsers(updatedUsers);
        toast.success("User deleted successfully!");
    };

    return (
        <>
            <div className="container mt-5 w-25">
                {/* <h2 className="text-center fw-bold mb-4">User Form</h2> */}
                <h2 className="text-center fw-bold mb-4">
                    {editIndex !== null ? "Edit User" : "User Form"}
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="shadow p-4 rounded bg-light">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label fw-bold">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            {...register("name", { required: true })}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-bold">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            {...register("email", { required: true })}
                        />
                    </div>

                    {/* <button type="submit" className="btn btn-success w-100">Save</button> */}
                    <button type="submit" className="w-100 btn">
                        {editIndex !== null ? (
                            <span className="btn btn-warning w-100">Update</span>
                        ) : (
                            <span className="btn btn-success w-100">Save</span>
                        )}
                    </button>
                </form>
            </div>

            <div className="container mt-5">
                <h3 className="text-center mt-4 fw-bold mb-4">Users List</h3>

                <table className="table table-striped table-hover text-center shadow">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className="btn btn-warning me-2" onClick={() => editUser(index)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => deleteUser(index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        {users.length === 0 && <tr><td colSpan="4" className="text-center text-muted">No users added yet.</td></tr>}
                    </tbody>
                </table>

            </div>
            <ToastContainer />
        </>
    );
};

export default Form;
