import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Third_form_prac = () => {
    const [data, setData] = useState({
        fname: '',
        lname: '',
        gender: '',
    })

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        await axios.post('http://localhost:3000/users', data);
        reset();
    }
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
                                <label htmlFor="gender" className='ms-2'>Gender</label>
                                <select name="gender" id="gender" className='form-select ms-2' {...register("gender")}>
                                    <option value="" disabled >Select your gender</option>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                </select>
                            </div>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Third_form_prac