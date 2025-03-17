import React, { createContext } from 'react'

export const nameContext = createContext();
const Store = ({ children }) => {
    const nameValue = "Herika";
    return (
        <nameContext.Provider value={nameValue}>
            {children}
        </nameContext.Provider>
    )
}

export default Store