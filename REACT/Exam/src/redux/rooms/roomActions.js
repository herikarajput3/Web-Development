// Actions
export const fetchRoomsRequest = () => ({ type: 'FETCH_ROOMS_REQUEST' });
export const fetchRoomsSuccess = (rooms) => ({ type: 'FETCH_ROOMS_SUCCESS', payload: rooms });
export const fetchRoomsFailure = (error) => ({ type: 'FETCH_ROOMS_FAILURE', payload: error });

// Thunk
export const fetchRooms = () => {
  return async (dispatch) => {
    dispatch(fetchRoomsRequest());
    try {
      const response = await fetch('http://localhost:3000/rooms');
      const data = await response.json();
      dispatch(fetchRoomsSuccess(data));
    } catch (error) {
      dispatch(fetchRoomsFailure(error.message));
    }
  };
};
