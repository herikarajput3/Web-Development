import { useState } from 'react';
import './App.css';
import Form from './Form_1/Form';
import Form2 from './Form_2/Form2';
import Form3 from './Form_3/Form3';

function App() {
  return (
    <>
      <div className="bg-light" style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* <Form /> */}
        {/* <Form2 /> */}
        <Form3 />
      </div>
    </>
  );
}

export default App;