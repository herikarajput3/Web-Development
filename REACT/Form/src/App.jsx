import { useState } from 'react';
import './App.css';
import Form from './Form_1/Form';
import Form2 from './Form_2/Form2';

function App() {
  return (
    <>
      <div className="bg-light" style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* <Form /> */}
        <Form2 />
      </div>
    </>
  );
}

export default App;