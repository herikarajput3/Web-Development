export const fetchReservationsRequest = () => ({ type: 'FETCH_RESERVATIONS_REQUEST' });
export const fetchReservationsSuccess = (reservations) => ({ type: 'FETCH_RESERVATIONS_SUCCESS', payload: reservations });
export const fetchReservationsFailure = (error) => ({ type: 'FETCH_RESERVATIONS_FAILURE', payload: error });

export const addReservationRequest = () => ({ type: 'ADD_RESERVATION_REQUEST' });
export const addReservationSuccess = (reservation) => ({ type: 'ADD_RESERVATION_SUCCESS', payload: reservation });
export const addReservationFailure = (error) => ({ type: 'ADD_RESERVATION_FAILURE', payload: error });

// DELETE
export const deleteReservationRequest = () => ({ type: 'DELETE_RESERVATION_REQUEST' });
export const deleteReservationSuccess = (id) => ({ type: 'DELETE_RESERVATION_SUCCESS', payload: id });
export const deleteReservationFailure = (error) => ({ type: 'DELETE_RESERVATION_FAILURE', payload: error });

// UPDATE
export const updateReservationRequest = () => ({ type: 'UPDATE_RESERVATION_REQUEST' });
export const updateReservationSuccess = (reservation) => ({ type: 'UPDATE_RESERVATION_SUCCESS', payload: reservation });
export const updateReservationFailure = (error) => ({ type: 'UPDATE_RESERVATION_FAILURE', payload: error });

export const fetchReservations = () => {
  return async (dispatch) => {
    dispatch(fetchReservationsRequest());
    try {
      const response = await fetch('http://localhost:3000/reservations');
      const data = await response.json();
      dispatch(fetchReservationsSuccess(data));
    } catch (error) {
      dispatch(fetchReservationsFailure(error.message));
    }
  };
};

export const makeReservation = (reservationData) => {
  return async (dispatch) => {
    dispatch(addReservationRequest());
    try {
      const res = await fetch('http://localhost:3000/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reservationData)
      });
      const data = await res.json();
      dispatch(addReservationSuccess(data));
    } catch (error) {
      dispatch(addReservationFailure(error.message));
    }
  };
};

// Delete thunk
export const cancelReservation = (id) => {
  return async (dispatch) => {
    dispatch(deleteReservationRequest());
    try {
      await fetch(`http://localhost:3000/reservations/${id}`, { method: 'DELETE' });
      dispatch(deleteReservationSuccess(id));
    } catch (error) {
      dispatch(deleteReservationFailure(error.message));
    }
  };
};

// Update thunk
export const updateReservation = (id, updatedData) => {
  return async (dispatch) => {
    dispatch(updateReservationRequest());
    try {
      const res = await fetch(`http://localhost:3000/reservations/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData)
      });
      const data = await res.json();
      dispatch(updateReservationSuccess(data));
    } catch (error) {
      dispatch(updateReservationFailure(error.message));
    }
  };
};
