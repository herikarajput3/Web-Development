import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Form = () => {
  const [data, setData] = useState({
    fname: '',
    lname: '',
  })
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        const res = await axios.patch(`http://localhost:3000/users/${editId}`, data)
        setEditId(null);
      }
      else {
        await axios.post('http://localhost:3000/users', data);
      }
      setData({ fname: '', lname: '' })
      fetchUsers();
    } catch (error) {
      console.error("Error submitting the form:", err);
    }
  }

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:3000/users');
    setUsers(res.data);
  }

  const handleEdit = async (user) => {
    setData({
      fname: user.fname,
      lname: user.lname
    })
    setEditId(user.id);
  }

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/users/${userId}`)
      fetchUsers();
    } catch (error) {
      console.error("Error deleting the data:", err);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, [])


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <form className='form-control mt-3 p-3 shadow rounded' onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fname" className='form-label mt-2'>First Name</label>
                <input type="text" className="form-control" name='fname' id='fname'
                  value={data.fname} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="lname" className='form-label mt-2'>Last Name</label>
                <input type="text" className="form-control" name='lname' id='lname'
                  value={data.lname} onChange={handleChange} />
              </div>
              {/* <button type="submit" className='btn btn-primary mt-3'>Submit</button> */}
              {editId ? (<button type="submit" className='btn btn-warning mt-3'>Update</button>) : (<button type="submit" className='btn btn-primary mt-3'>Submit</button>)}
            </form>
          </div>
          <div className="col-12">
            <table className='table table-striped table-hover mt-5'>
              <thead className='table-dark text-center'>
                <tr>
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                {users.length > 0 ? (
                  users.map((user, index) => (
                    <tr key={user.id}>
                      <td>{index + 1}</td>
                      <td>{user.fname}</td>
                      <td>{user.lname}</td>
                      <td>
                        <div>
                          <button className='btn btn-warning me-2' onClick={() => handleEdit(user)}>Edit</button>
                          <button className='btn btn-danger' onClick={() => handleDelete(user.id)}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className='fw-bold fs-5'>No Data Found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div >
      </div >
    </>
  )
}

export default Form