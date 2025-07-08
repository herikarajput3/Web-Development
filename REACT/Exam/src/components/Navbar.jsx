import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/auth/authActions';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, user } = useSelector(state => state.auth);
  const { rooms } = useSelector(state => state.rooms);

  // Pick the first room as featured (you can change logic later)
  const featuredRoom = rooms.length > 0 ? rooms[0] : null;

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4 sticky-top">
      <Link className="navbar-brand d-flex align-items-center fw-bold fs-4 text-warning" to="/">
        <span className="text-uppercase" style={{ fontFamily: "Libertinus Mono" }}>
          Roomify
        </span>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link px-3" to="/">Rooms</Link>
          </li>

          {featuredRoom && (
            <li className="nav-item">
              <Link className="nav-link px-3" to={`/rooms/${featuredRoom.id}`}>
                Featured Room
              </Link>
            </li>
          )}

          {isAuthenticated && (
            <>
              <li className="nav-item">
                <Link className="nav-link px-3" to="/reserve">Reserve</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="/reservations">My Reservations</Link>
              </li>
            </>
          )}
        </ul>

        <ul className="navbar-nav ms-auto">
          {isAuthenticated ? (
            <>
              <li className="nav-item d-flex align-items-center text-white me-3">
                👋 Hello, <strong className="ms-1">{user.name}</strong>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-light" onClick={handleLogout}>
                  Sign Out
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item me-2">
                <Link className="btn btn-outline-light" to="/signin">Sign In</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-outline-warning" to="/signup">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
