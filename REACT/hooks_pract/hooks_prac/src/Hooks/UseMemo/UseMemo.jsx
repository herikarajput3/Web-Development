import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const multiply = (a, b) => {
        for (let i = 0; i < 10000; i++) { }
        return a * b;
    }

    useMemo(() => multiply(2, 3), [])
    return (
        <>
            <h1>{count}</h1>
            <button className='btn btn-outline-primary' onClick={handleIncrement}>Increment</button>
        </>
    )
}

export default UseMemo