import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms } from '../redux/rooms/roomActions';

const RoomList = () => {
  const dispatch = useDispatch();
  const { rooms, loading, error } = useSelector(state => state.rooms);

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  if (loading) return <p>Loading rooms...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center fw-bold text-primary">Available Rooms</h2>

      {/* Filter and Sort Bar */}
      <div className="row mb-4 bg-white shadow-sm p-3 rounded-3">
        <div className="col-md-6 mb-3 mb-md-0">
          <label className="form-label fw-semibold">Sort by</label>
          <select className="form-select">
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Type: A-Z</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label fw-semibold">Filter by Availability</label>
          <select className="form-select">
            <option>All</option>
            <option>Available</option>
            <option>Booked</option>
          </select>
        </div>
      </div>

      {/* Room Cards */}
      <div className="row">
        {rooms.map((room) => (
          <div className="col-md-4" key={room.id}>
            <div className="card mb-4 shadow-sm border-0 rounded-3">
              <img
                src={'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg'}
                className="card-img-top"
                alt={room.name}
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title text-primary fw-bold">{room.name}</h5>
                <p className="card-text mb-1">Type: {room.type}</p>
                <p className="card-text fw-semibold mb-2">₹{room.price} / night</p>
                <p className="card-text mb-2">
                  Features:
                  {room.features.map((feature, index) => (
                    <span key={index} className="ms-2">
                      {feature === 'WiFi' && '📶'}
                      {feature === 'AC' && '❄️'}
                      {feature === 'TV' && '📺'}
                      {feature === 'Balcony' && '🌅'}
                    </span>
                  ))}
                </p>
                <span
                  className={`badge ${room.available ? 'bg-success' : 'bg-danger'
                    }`}
                >
                  {room.available ? 'Available' : 'Booked'}
                </span>

                {room.available && (
                  <div className="mt-3">
                    <button className="btn btn-sm btn-outline-primary">
                      Book Now
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomList;
