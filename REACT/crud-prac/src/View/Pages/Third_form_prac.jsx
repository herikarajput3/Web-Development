import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const Third_form_prac = () => {
    const [users, setUsers] = useState([])
    const [editUser, setEditUser] = useState(null)
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        if (editUser) {
            const res = await axios.patch(`http://localhost:3000/users/${editUser}`, data);
            setEditUser(null);
            fetchUsers();
        }
        else {
            await axios.post('http://localhost:3000/users', data);
            fetchUsers();
        }
        reset({
            fname: '',
            lname: '',
            gender: ''
        });
    }

    const fetchUsers = async () => {
        const res = await axios.get('http://localhost:3000/users');
        setUsers(res.data);
    }

    const handleEdit = (data) => {
        reset({
            fname: data.fname,
            lname: data.lname,
            gender: data.gender
        })
        setEditUser(data.id);
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3000/users/${id}`);
        fetchUsers();
    }

    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form className='form-control mt-3 p-4 shadow rounded' onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group mb-3">
                                <label htmlFor="fname" className=''>First Name</label>
                                <input type="text" className='form-control' id='fname' {...register("fname")} />

                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="lname" className=''>Last Name</label>
                                <input type="text" className='form-control' id='lname' {...register("lname")} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="gender" className=''>Gender</label>
                                <select name="gender" id="gender" className='form-select' {...register("gender")}>
                                    <option value="" disabled >Select your gender</option>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                </select>
                            </div>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </form>
                    </div>
                    <div className="col-12">
                        <table className='table table-striped table-hover mt-5 rounded'>
                            <thead className='table-dark'>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length > 0 ? (
                                    users.map((user, index) => (
                                        <tr key={user.id}>
                                            <td>{index + 1}</td>
                                            <td>{user.fname} {user.lname}</td>
                                            <td>{user.gender}</td>
                                            <td>
                                                <div>
                                                    <button className='btn btn-primary me-3' onClick={() => handleEdit(user)}>Edit</button>
                                                    <button className='btn btn-danger' onClick={() => handleDelete(user.id)}>Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={4} className='text-center fw-bold fs-5'>No Data Found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Third_form_prac