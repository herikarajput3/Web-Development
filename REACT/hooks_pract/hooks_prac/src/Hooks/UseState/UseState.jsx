import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    }
    return (
        <>
            <h1>{count}</h1>
            <button className='btn btn-outline-primary' onClick={handleIncrement}>Increment</button>
        </>
    )
}

export default UseState