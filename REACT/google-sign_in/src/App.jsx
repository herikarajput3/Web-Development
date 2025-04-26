import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        {/* Add other routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
