import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseState from './Hooks/UseState/UseState'
import UseEffect from './Hooks/UseEffect/UseEffect'
import UseMemo from './Hooks/UseMemo/UseMemo'
import UseReducer from './Hooks/UseReducer/UseReducer'
import UseRef from './Hooks/UseRef/UseRef'
import UseCallBack from './Hooks/UseCallBack/UseCallBack'
import Store from './Hooks/Store/Store'
import UseContext from './Hooks/Store/UseContext'

function App() {

  return (
    <>
      <div className='text-center align-content-center bg-dark text-light' style={{ height: "100vh" }}>
        {/* <UseState /> */}
        {/* <UseEffect/> */}
        {/* <UseMemo /> */}
        {/* <UseReducer /> */}
        {/* <UseRef /> */}
        {/* <UseCallBack /> */}
        <Store>
          <UseContext />
        </Store>
      </div>
    </>
  )
}

export default App
