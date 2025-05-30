import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Form = () => {
    const [users, setUsers] = useState([]);
    const { register, handleSubmit, reset, setValue } = useForm();
    const [selectedUser, setSelectedUser] = useState(null);

    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://localhost:3000/users");
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
            toast.error("Error fetching users");
        }

    };

    const onSubmit = async (data) => {
        const userData = {
            name: data.name,
            email: data.email,
        };

        // console.log("User Data:", userData);

        try {
            if (selectedUser) {
                // EDIT USER
                const response = await axios.put(`http://localhost:3000/users/${selectedUser}`, userData);
                // console.log("Response:", response);
                toast.success("User updated successfully!");
            } else {
                // CREATE NEW USER
                const response = await axios.post("http://localhost:3000/users", userData);
                // console.log("Response:", response);
                setUsers([...users, response.data]);
                toast.success("User added successfully!");
            }
            fetchUsers();
            reset();
            setSelectedUser(null);
        } catch (error) {
            console.error("Error saving user:", error);
            toast.error("Error saving user");
        }
    };

    const editUser = (user) => {
        console.log("Editing User:", user);
        setSelectedUser(user.id);
        setValue("name", user.name);
        setValue("email", user.email);
    };

    const deleteUser = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/users/${id}`);
            console.log("Response:", response);
            toast.success("User deleted successfully!");
            fetchUsers();
        } catch (error) {
            console.error("Error deleting user:", error);
            toast.error("Error deleting user");
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            <div className="container mt-5 w-25">
                {/* <h2 className="text-center fw-bold mb-4">User Form</h2> */}
                <h2 className="text-center fw-bold mb-4">
                    {selectedUser ? "Edit User" : "User Form"}
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
                        {selectedUser ? <span className="btn btn-warning w-100">Update</span> : <span className="btn btn-success w-100">Save</span>}
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
                                    <button className="btn btn-warning me-2" onClick={() => editUser(user)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
            <ToastContainer />
        </>
    );
};

export default Form;
