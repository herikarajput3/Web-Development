import React, { useContext } from 'react'
import { nameContext } from './Store'

const UseContext = () => {
    const name = useContext(nameContext);
    return (
        <div>Name is {name}</div>
    )
}

export default UseContext