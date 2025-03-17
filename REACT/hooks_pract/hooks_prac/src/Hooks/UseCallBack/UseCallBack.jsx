import React, { useCallback, useState } from 'react'
import Children from './Children';

const UseCallBack = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    // const myFunc = () => {
    //     return "Herika";
    // }

    const myFunc = useCallback(() => {
        return "Herika";
    }, [])


    return (
        <>
            <h1>{count}</h1>
            <Children myFunc={myFunc}/>
            <button className='btn btn-outline-primary' onClick={handleIncrement}>Increment</button>
        </>
    )
}

export default UseCallBack