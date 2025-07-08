import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; 

import roomReducer from './rooms/roomReducer';
import reservationReducer from './reservations/reservationReducer';
import authReducer from './auth/authReducer';

const rootReducer = combineReducers({
  rooms: roomReducer,
  reservations: reservationReducer,
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
