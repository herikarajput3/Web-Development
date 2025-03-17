import React, { createContext } from 'react'

export const nameContext = createContext()

const Store = ({children}) => {
    const nameValue = "Herika";
  return (
    <nameContext.Provider value={nameValue}> 
    {/* The Provider is responsible for "providing" a value (here, "Herika") to any child components that want to use it. */}
        {children}
    </nameContext.Provider>
  )
}

export default Store