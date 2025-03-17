import React, { useMemo } from 'react'

const UseMemo = () => {

    const [count, setCount] = React.useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }
    // expensive function
    const multiply = (a, b) => {
        for (let i = 0; i < 1000000000000000000; i++) { }
        return a * b;
    }

    useMemo(() => multiply(5, 2), [])

    return (
        <>
            <h1>{count}</h1>
            {multiply}
            <button className='btn btn-outline-primary' onClick={handleClick}>Increment</button>
        </>
    )
}

export default UseMemo