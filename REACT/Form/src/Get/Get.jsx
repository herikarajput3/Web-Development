import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Get = () => {
    const { register, handleSubmit, reset } = useForm();
    const [getDatas, setDatas] = useState([]);
    const navigate = useNavigate(); // Define navigate

    const OnSubmit = async (data) => {
        try {
            const result = await axios.post('http://localhost:3000/posts', data);
            console.log(result);
            reset();
            getData(); // Fetch data after submission
        } catch (error) {
            console.error(error);
        }
    };

    const getData = async () => {
        try {
            const result = await axios.get('http://localhost:3000/posts');
            console.log(result.data);
            setDatas(result.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDel = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/posts/${id}`);
            getData(); // Fetch updated data after deletion
            alert('Data deleted successfully!');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    {/* Form to Submit Data */}
                    <form onSubmit={handleSubmit(OnSubmit)}>
                        <input
                            className="form-control my-2"
                            placeholder="Enter Name"
                            type="text"
                            {...register('FName', { required: true })}
                        />
                        <button
                            className="form-control my-2 btn btn-outline-info fw-bold text-uppercase"
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>

                    {/* Table to Display Data */}
                    {getDatas.length > 0 ? (
                        <table className="table table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getDatas.map((data, index) => (
                                    <tr key={data.id}>
                                        <td>{index + 1}</td>
                                        <td>{data.FName}</td>
                                        <td>
                                            <button className="btn btn-warning" onClick={() => navigate(`/edit/${data.id}`)}>Edit</button>
                                            <button
                                                className="btn btn-danger ms-2"
                                                onClick={() => handleDel(data.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="text-center text-danger">No Data Found</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Get;
