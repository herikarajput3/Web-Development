import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log("Hello, this is a useEffect");
        
    }, [])
    

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <h1 className=''>Count: {count}</h1>
                    <button className='btn btn-outline-primary mx-auto' onClick={handleIncrement}>Increment</button>
                </div>
            </div>
        </div>
    )
}

export default UseEffect