import './App.css'
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
function App() {

  return (
    <>
      {/* <Register /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
