import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Get = () => {
    const { register, handleSubmit } = useForm();
    const [getDatas, setDatas] = useState([]);

    const OnSubmit = async (data) => {
        try {
            const result = await axios.post("http://localhost:3000/posts", data);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    const getData = async () => {
        try {
            const result = await axios.get("http://localhost:3000/posts");
            console.log(result.data);
            setDatas(result.data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        {/* Form to Submit Data */}
                        <form onSubmit={handleSubmit(OnSubmit)}>
                            <input
                                className="form-control my-2"
                                placeholder="Enter Id"
                                type="text"
                                {...register('id', { required: true })}
                            />
                            <input
                                className="form-control my-2"
                                placeholder="Enter FName"
                                type="text"
                                {...register('FName', { required: true })}
                            />
                            <input
                                className="form-control my-2"
                                placeholder="Enter LName"
                                type="text"
                                {...register('LName', { required: true })}
                            />
                            <button
                                className="form-control my-2 btn btn-outline-info fw-bold text-uppercase"
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>

                        {/* Button to Fetch Data */}
                        <button
                            className="form-control my-2 btn btn-outline-primary fw-bold text-uppercase"
                            onClick={getData}
                        >
                            Show Data
                        </button>

                        {/* Table to Display Data */}
                        {getDatas.length > 0 && (
                            <table className="table table-bordered mt-3">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>FName</th>
                                        <th>LName</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {getDatas.map((data, index) => (
                                        <tr key={index}>
                                            <td>{data.id}</td>
                                            <td>{data.FName}</td>
                                            <td>{data.LName}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Get;


// npx json-server db.json