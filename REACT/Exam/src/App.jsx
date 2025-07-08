import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoomList from './pages/RoomList';
import ReservationForm from './pages/ReservationForm';
import ReservationList from './pages/ReservationList';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RoomDetails from './pages/RoomDetails';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<RoomList />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes */}
        <Route
          path="/reserve"
          element={
            <PrivateRoute>
              <ReservationForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/reservations"
          element={
            <PrivateRoute>
              <ReservationList />
            </PrivateRoute>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
