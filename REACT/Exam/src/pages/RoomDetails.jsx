import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/rooms/${id}`)
      .then(res => res.json())
      .then(data => setRoom(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!room) return <p className="text-center mt-5">Loading room details...</p>;

  return (
    <div className="container my-5" style={{ height: '100vh' }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <img
              src={`https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg`}
              className="card-img-top img-fluid"
              style={{ height: '350px', objectFit: 'cover' }}

            />
            <div className="card-body">
              <h3 className="card-title">{room.name}</h3>
              <p className="card-text"><strong>Type:</strong> {room.type}</p>
              <p className="card-text"><strong>Price:</strong> ₹{room.price}/night</p>
              <p className="card-text">
                <strong>Features:</strong> {room.features.join(', ')}
              </p>
              <p className="card-text">
                <strong>Status:</strong>{' '}
                <span className={`badge ${room.available ? 'bg-success' : 'bg-secondary'}`}>
                  {room.available ? 'Available' : 'Booked'}
                </span>
              </p>

              <Link to="/reserve" className="btn btn-primary mt-3">
                Book This Room
              </Link>
              <Link to="/" className="btn btn-outline-secondary mt-3 ms-2">
                Back to Room List
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
