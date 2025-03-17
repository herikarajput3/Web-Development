import { useState } from 'react';
import './App.css';
import Form from './Form_1/Form';

function App() {
  return (
    <>
      <div className="bg-light" style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Form />
      </div>
    </>
  );
}

export default App;