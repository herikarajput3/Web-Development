import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchReservations,
  cancelReservation,
  updateReservation
} from '../redux/reservations/reservationActions';
import { fetchRooms } from '../redux/rooms/roomActions';

const ReservationList = () => {
  const dispatch = useDispatch();
  const { reservations, loading, error } = useSelector(state => state.reservations);
  const { rooms } = useSelector(state => state.rooms);

  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({
    name: '',
    checkIn: '',
    checkOut: ''
  });

  useEffect(() => {
    dispatch(fetchReservations());
    dispatch(fetchRooms());
  }, [dispatch]);

  const getRoomName = (roomId) => {
    // const room = rooms.find(r => r.id === parseInt(roomId));
    const room = rooms.find(r => r.id === roomId);

    return room ? room.name : 'Unknown Room';
  };

  const handleEditClick = (reservation) => {
    setEditingId(reservation.id);
    setEditData({
      name: reservation.name,
      checkIn: reservation.checkIn,
      checkOut: reservation.checkOut
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e, id) => {
    e.preventDefault();
    dispatch(updateReservation(id, editData));
    setEditingId(null);
  };

  if (loading) return <p className="text-center">Loading reservations...</p>;
  if (error) return <p className="text-danger text-center">Error: {error}</p>;

  return (
    <div className="container mt-4 " style={{ height: '100vh' }}>
      <h2 className="text-primary text-center mb-4 fw-bold">Your Reservations</h2>

      {reservations.length === 0 ? (
        <p className="text-center">No reservations found.</p>
      ) : (
        <div className="row">
          {reservations.map(reservation => (
            <div className="col-md-6 mb-4" key={reservation.id}>
              <div className="card shadow-sm border-0 rounded-4">
                <div className="card-body">
                  {editingId === reservation.id ? (
                    <form onSubmit={(e) => handleUpdate(e, reservation.id)}>
                      <div className="mb-3">
                        <label className="form-label fw-semibold">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          value={editData.name}
                          onChange={handleEditChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-semibold">Check-in</label>
                        <input
                          type="date"
                          className="form-control"
                          name="checkIn"
                          value={editData.checkIn}
                          onChange={handleEditChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-semibold">Check-out</label>
                        <input
                          type="date"
                          className="form-control"
                          name="checkOut"
                          value={editData.checkOut}
                          onChange={handleEditChange}
                          required
                        />
                      </div>
                      <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-success btn-sm me-2">
                          💾 Save
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                          onClick={() => setEditingId(null)}
                        >
                          ❌ Cancel
                        </button>
                      </div>
                    </form>
                  ) : (
                    <>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="card-title mb-0">{reservation.name}</h5>
                        <span className="badge bg-primary">{getRoomName(reservation.roomId)}</span>
                      </div>
                      <p className="card-text mb-1">
                        📅 <strong>Check-in:</strong> {reservation.checkIn}
                      </p>
                      <p className="card-text mb-3">
                        📅 <strong>Check-out:</strong> {reservation.checkOut}
                      </p>
                      <div className="d-flex justify-content-end">
                        <button
                          className="btn btn-warning btn-sm me-2"
                          onClick={() => handleEditClick(reservation)}
                        >
                          ✏️ Edit
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => dispatch(cancelReservation(reservation.id))}
                        >
                          🗑 Cancel
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReservationList;
