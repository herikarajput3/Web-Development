import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state);
    return (
        <>
            <h1>count : {count}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
        </>
    )
}

export default Counter