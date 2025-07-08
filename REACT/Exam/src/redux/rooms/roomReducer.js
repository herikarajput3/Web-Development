const initialState = {
  rooms: [],
  loading: false,
  error: null,
};

const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ROOMS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_ROOMS_SUCCESS':
      return { ...state, loading: false, rooms: action.payload };
    case 'FETCH_ROOMS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default roomReducer;
