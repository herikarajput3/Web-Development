import React, { useEffect } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log("This is a UseEffect");
    }, [])


    return (
        <>
            <h1>{count}</h1>
            <button className='btn btn-outline-primary' onClick={handleIncrement}>Increment</button>
        </>
    )
}

export default UseEffect