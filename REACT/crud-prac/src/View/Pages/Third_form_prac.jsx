import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const Third_form_prac = () => {
    const [users, setUsers] = useState([])
    const [editUser, setEditUser] = useState(null)
    const { register: userRegister, handleSubmit: handleUserSubmit, reset: userReset, formState: { errors } } = useForm();
    const { register: cityRegister, handleSubmit: handleCitySubmit, reset: cityReset } = useForm();

    const onSubmitUser = async (data) => {
        if (editUser) {
            const res = await axios.patch(`http://localhost:3000/users/${editUser}`, data);
            setEditUser(null);
            fetchUsers();
        }
        else {
            await axios.post('http://localhost:3000/users', data);
            fetchUsers();
        }
        userReset({
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
        userReset({
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

    const onSubmitCity = async (data) => {
        await axios.post('http://localhost:3000/city', data);
        cityReset({ city: '' });
    }

    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <form className='form-control mt-3 p-4 shadow rounded' onSubmit={handleCitySubmit(onSubmitCity)}>
                            <div className="form-group mb-3">
                                <label htmlFor="city" className='mb-2'>City</label>
                                <input type="text" className="form-control mb-2" id='city' {...cityRegister("city")} />
                                <button type="submit" className='btn btn-primary'>Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-6">
                        <form className='form-control mt-3 p-4 shadow rounded' onSubmit={handleUserSubmit(onSubmitUser)}>
                            <div className="form-group mb-3">
                                <label htmlFor="name" className=''>Name</label>
                                <input type="text" className='form-control' id='name' {...userRegister("name")} />
                                {errors.name && <span className='text-danger'>Name is required</span>}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email" className=''>Email</label>
                                <input type="email" className='form-control' id='email' {...userRegister("email", { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
                                {errors.email && <span className='text-danger'>{errors.email.message}</span>}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="gender" className=''>Gender</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" id="gender" value={"male"}
                                        {...userRegister("gender")} />
                                    <label className="form-check-label" htmlFor="gender">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" id="gender" value={"female"}
                                        {...userRegister("gender")} />
                                    <label className="form-check-label" htmlFor="gender">
                                        Female
                                    </label>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="city">City</label>
                                <select className="form-select" aria-label="Default select example" {...userRegister("city")}>
                                    <option disabled>Select City</option>
                                    <option value="1">One</option>
                                    
                                </select>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="img">Upload Image</label>
                                <input type="file" className='form-control' id='img' {...userRegister("img")} />
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