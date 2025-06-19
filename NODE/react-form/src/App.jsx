import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Users from './components/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form />
      {/* <Users /> */}
    </>
  )
}

export default App
