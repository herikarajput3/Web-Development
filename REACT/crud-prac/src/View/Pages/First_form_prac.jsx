import React, { useState } from 'react'

const First_form_prac = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [gender, setGender] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            fname,
            lname,
            gender
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
                                <input type="text" className="form-control" id='fname' name='fname' value={fname} onChange={(e) => { setFname(e.target.value) }} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="lname">Last Name:</label>
                                <input type="text" className="form-control" id='lname' name='lname'
                                    value={lname} onChange={(e) => { setLname(e.target.value) }} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="gender">Gender:</label>
                                <select name="gender" id="gender" className='ms-2' onChange={(e) => { setGender(e.target.value) }} value={gender}>
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

export default First_form_prac