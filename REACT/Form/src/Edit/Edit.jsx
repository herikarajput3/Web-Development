import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ FName: '' }); //to hold form data
    const [loading, setLoading] = useState(true);

    // Fetch data for the given ID
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/posts/${id}`);
                setFormData({ FName: response.data.FName }); // Update state with fetched data
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/posts/${id}`, formData);
            alert('Data updated successfully!');
            navigate('/'); // Redirect to the home page
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h2 className="text-center mb-4">Edit Data</h2>
                    <form onSubmit={onSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="FName">Name</label>
                            <input
                                type="text"
                                id="FName"
                                name="FName"
                                value={formData.FName}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter Name"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-success w-100" onClick={() => navigate(`/get`)}>
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Edit;
