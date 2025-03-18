import { useState, useEffect, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseState from './Hooks/UseState/UseState'
import UseEffect from './Hooks/UseEffect/UseEffect'
import UseRef from './Hooks/UseRef/UseRef'
import Store, { nameContext } from './Hooks/Store/Store'
import UseContext from './Hooks/Store/UseContext'
import UseReducer from './Hooks/UseReducer/UseReducer'
import UseMemo from './Hooks/UseMemo/UseMemo'
import UseCallback from './Hooks/UseCallback/UseCallback'

function App() {

  return (
    <>
      <div className='text-center align-content-center bg-black text-light' style={{ height: "100vh" }}>
        {/* <UseState /> */}
        {/* <UseEffect /> */}
        {/* <UseReducer /> */}
        {/* <UseRef /> */}
        {/* <Store>
          <UseContext />
        </Store> */}

        {/* <UseMemo /> */}
        {/* <UseCallback /> */}
      </div>
    </>
  )
}

export default App