import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms } from '../redux/rooms/roomActions';
import { makeReservation } from '../redux/reservations/reservationActions';
import { useForm } from 'react-hook-form';

const ReservationForm = () => {
  const dispatch = useDispatch();
  const { rooms } = useSelector((state) => state.rooms);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  const onSubmit = (data) => {
    dispatch(makeReservation(data));
    alert('Reservation Submitted!');
    reset();
  };

  return (
    <div className="container mt-4" style={{ height: '100vh' }}>
      <div className="bg-white shadow p-4 rounded-4">
        <h2 className="text-primary mb-4 text-center fw-bold">Make a Reservation</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row g-4">
            {/* Name */}
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  id="floatingName"
                  className={`form-control ${errors.name ? 'is-invalid' : isSubmitSuccessful ? 'is-valid' : ''}`}
                  placeholder="Your Name"
                  {...register('name', { required: 'Name is required' })}
                />
                <label htmlFor="floatingName">Your Name</label>
                {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
              </div>
            </div>

            {/* Room */}
            <div className="col-md-6">
              <div className="form-floating">
                <select
                  id="floatingRoom"
                  className={`form-select ${errors.roomId ? 'is-invalid' : isSubmitSuccessful ? 'is-valid' : ''}`}
                  {...register('roomId', { required: 'Please select a room' })}
                >
                  <option value="">Select Room</option>
                  {rooms.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name} (₹{room.price})
                    </option>
                  ))}
                </select>
                <label htmlFor="floatingRoom">Select Room</label>
                {errors.roomId && <div className="invalid-feedback">{errors.roomId.message}</div>}
              </div>
            </div>

            {/* Check-in */}
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="date"
                  id="floatingCheckIn"
                  className={`form-control ${errors.checkIn ? 'is-invalid' : isSubmitSuccessful ? 'is-valid' : ''}`}
                  {...register('checkIn', { required: 'Check-in date is required' })}
                />
                <label htmlFor="floatingCheckIn">Check-in Date</label>
                {errors.checkIn && <div className="invalid-feedback">{errors.checkIn.message}</div>}
              </div>
            </div>

            {/* Check-out */}
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="date"
                  id="floatingCheckOut"
                  className={`form-control ${errors.checkOut ? 'is-invalid' : isSubmitSuccessful ? 'is-valid' : ''}`}
                  {...register('checkOut', { required: 'Check-out date is required' })}
                />
                <label htmlFor="floatingCheckOut">Check-out Date</label>
                {errors.checkOut && <div className="invalid-feedback">{errors.checkOut.message}</div>}
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary px-5 py-2">
              Reserve Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
