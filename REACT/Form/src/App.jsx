import { useState } from 'react';
import './App.css';
import Form from './Form_1/Form';
import Form2 from './Form_2/Form2';
import Form3 from './Form_3/Form3';
// import { Axios } from 'axios';
import Axios from './Axios/Axios';
import Get from './Get/Get';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Edit from './Edit/Edit';
import Filtering from './Edit/Filtering';
import Counter from './Redux/Counter';
// import Register from './Firebase/Register';

// Create or import Layout, Home, and Edit components
const Layout = ({ children }) => {
  return (
    <div>
      <header>
      </header>
      <main>{children}</main>
      <footer>
      </footer>
    </div>
  );
};

const Home = () => <div>
  {/* <h1>Welcome to the Home Page</h1>
  <p>Select an option from the menu to proceed.</p> */}
  <Get />
</div>;
// const Edit = () => <div></div>;

function App() {
  return (
    <Router>
      <div
        className="bg-light"
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   alignItems: 'center',
      //   justifyContent: 'center',
      // }}
      >
        {/* Uncomment any component you want to render */}
        {/* <Form /> */}
        <Form2 />
        {/* <Form3 /> */}
        {/* <Axios /> */}
        {/* <Get />
        <Edit /> */}

        <Layout>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/edit/:id" element={<Edit />} /> */}
            {/* <Route path="/edit/:id" element={<Filtering />} /> */}
            {/* <Route path="/register" element={<Register />} /> */}
            {/* <Route path="/" element={<Counter />} /> */}

          </Routes>
        </Layout>
        {/* <Register /> */}
      </div>
    </Router>
  );
}

export default App;
