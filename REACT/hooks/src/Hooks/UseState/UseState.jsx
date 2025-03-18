import React from 'react'
import { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1)
    }

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

export default UseState