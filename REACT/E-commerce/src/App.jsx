import { useState } from 'react'
import './App.css'
import Register from './Pages/Auth/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      {/* <Register /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          {/* Add other routes as needed */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
