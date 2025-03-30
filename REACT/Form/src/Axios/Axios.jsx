import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'


const Axios = () => {
    const { register, handleSubmit } = useForm()

    // const api = "http://localhost:3000/posts"

    const OnSubmit = async (data) => {
        try {
            const result = await axios.post("http://localhost:3000/posts", data)
            console.log(result);

        } catch (error) {
            console.log(error);

        }

    }
    

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <form className='' onSubmit={handleSubmit(OnSubmit)}>
                            <input className='form-control my-2' placeholder='Enter Id' type="text" {...register('id', { required: true })} />
                            <input className='form-control my-2' placeholder='Enter FName' type="text" {...register('FName', { required: true })} />
                            <button className='form-control my-2 btn btn-outline-info fw-bold text-uppercase' type='submit'>submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Axios

// npx json-server db.json