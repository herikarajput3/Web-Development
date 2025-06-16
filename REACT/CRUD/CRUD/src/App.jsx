import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Form from './View/Pages/Form.jsx'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Update from './View/Pages/update.jsx'

const App = () => {
  
  return (
      <>
      <Router>
        <Routes>
          <Route path="/" element={<Form/>}/>
          <Route path="/update/:id" element={<Update/>}/>
        </Routes>
      </Router>
     9
      </>
      
  )
}

export default App