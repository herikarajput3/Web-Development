import React, { useState } from 'react'

const Second_Form_prac = () => {
    const [data, setData] = useState({
        fname: "",
        lname: "",
        gender: ""
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            fname: data.fname,
            lname: data.lname,
            gender: data.gender
        }
        console.log(user);


    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form action="" className='form-control mt-3 p-4 shadow rounded' onSubmit={handleSubmit}>
                            <div className='form-group mb-3'>
                                <label htmlFor="fname">First Name:</label>
                                <input type="text" className="form-control" id='fname' name='fname' value={data.fname} onChange={(e) => { setData({ ...data, fname: e.target.value }) }} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="lname">Last Name:</label>
                                <input type="text" className="form-control" id='lname' name='lname'
                                    value={data.lname} onChange={(e) => { setData({ ...data, lname: e.target.value }) }} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="gender">Gender:</label>
                                <select name="gender" id="gender" className='ms-2' value={data.gender} onChange={(e) => { setData({ ...data, gender: e.target.value }) }} >
                                    <option value="" disabled>Select your gender</option>
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

export default Second_Form_prac