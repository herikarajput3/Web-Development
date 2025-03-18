import React, { useCallback, useState } from 'react'
import Children from './Children';

const UseCallback = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
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
            <button className='btn btn-outline-primary' onClick={handleClick}>Increment</button>
        </>
    )
}

export default UseCallback