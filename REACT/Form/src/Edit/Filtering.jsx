import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const Filtering = () => {
    const { register, handleSubmit, reset } = useForm();
    const [getDatas, setDatas] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const OnSubmit = async (data) => {
        try {
            // const result = await axios.post("https://jsonplaceholder.typicode.com/users", data);
            // console.log(result);
            reset();
            getData(); // Fetch updated data after submission
        } catch (error) {
            console.error(error);
        }
    };

    const getData = async () => {
        try {
            const result = await axios.get("https://jsonplaceholder.typicode.com/users");
            console.log(result.data);
            setDatas(result.data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const city = getDatas.map((item) => item.address.city);

    const handleChange = (e) => {
        setSearch(e.target.value.toLowerCase());
    };

    // Filter data by city

    // const filterData = getDatas.filter((item) => {
    //     const city = item.address.city.includes(search);
    //     return city;
    // }
    // );

    const filterData = getDatas.filter((item) =>
        item.address.city.toLowerCase().includes(search)
    );


    const handleDel = (id) => {
        alert(`Delete user with ID: ${id}`);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <form onSubmit={handleSubmit(OnSubmit)}>
                        {/* <input
                            className="form-control my-2"
                            placeholder="Enter Name"
                            type="text"
                            {...register("name", { required: true })}
                        />
                        <button
                            className="form-control my-2 btn btn-outline-info fw-bold text-uppercase"
                            type="submit"
                        >
                            Submit
                        </button> */}
                        <hr />

                        {/* Search Input */}
                        <input
                            className="form-control my-2"
                            placeholder="Search by City"
                            type="text"
                            value={search}
                            onChange={handleChange}
                        />

                        {/* Dropdown (City) */}
                        <select className="form-control my-2" onChange={handleChange}>
                            <option value="">Select city</option>
                            {city.map((item) => (
                                <option value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </form>

                    {/* Table to Display Data */}
                    {filterData.length > 0 ? (
                        <table className="table table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>City</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterData.map((data, index) => (
                                    <tr key={data.id}>
                                        <td>{index + 1}</td>
                                        <td>{data.name}</td>
                                        <td>{data.address.city}</td>
                                        <td>
                                            <button
                                                className="btn btn-warning"
                                                onClick={() => navigate(`/edit/${data.id}`)}
                                            >
                                                Edit
                                            </button>
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

export default Filtering;
