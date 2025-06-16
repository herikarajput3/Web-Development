import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  // Handle form submission (PUT request)
  const handleForm = async (data) => {
    try {
      await axios.put(`http://localhost:3001/user/${id}`, data);
      navigate('/'); // Redirect to the homepage after update
      reset(); // Reset the form fields
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  // Fetch data for the specific user
  const fetchData = async () => {
    try {
      const result = await axios.get(`http://localhost:3001/user/${id}`);
      setValue('fname', result.data.fname); // Populate the form with the fetched data
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // Fetch user data when the component mounts
  useEffect(() => {
    fetchData();
  }, [id]); // Dependency array ensures it runs only when `id` changes

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-center">Update User</h5>
              <form onSubmit={handleSubmit(handleForm)}>
                <div className="mb-3">
                  <label htmlFor="fname" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    className="form-control"
                    {...register('fname', { required: true })}
                    placeholder="Enter your new name"
                  />
                </div>
                <button type="submit" className="btn btn-success w-100">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;

//npx json-server --watch db.json