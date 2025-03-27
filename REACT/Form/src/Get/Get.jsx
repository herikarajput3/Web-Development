import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'


const Get = () => {
    const { register, handleSubmit } = useForm()
    const [data, setData] = useState();

    // const api = "http://localhost:3000/posts"

    const OnSubmit = async (data) => {
        try {
            const result = await axios.post("http://localhost:3000/posts", data)
            console.log(result);

        } catch (error) {
            console.log(error);

        }

    }

    const show = async () => {
        try {
            const response = await axios.get("http://localhost:3000/posts")
            setData(response.data)
            console.log(response.data);
            // setData(response.data);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    // const deleteData = async (id) => {
    //     try {   
    //         await axios.delete(`http://localhost:3000/posts/${id}`)
    //         console.log(`Deleted item with id: ${id}`);
    //     } catch (error) {
    //         console.error("Error:", error);
    //     }
    // }

    // const OnSubmit = async (data) => {
    //     try {
    //         const response = await fetch("http://localhost:3000/posts", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(data),
    //         });
    //         const result = await response.json();
    //         console.log(result);
    //     } catch (error) {
    //         console.error("Error:", error);
    //     }
    // };


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

export default Get

// npx json-server db.json