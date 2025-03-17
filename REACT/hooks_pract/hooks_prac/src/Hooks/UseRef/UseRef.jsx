import React, { useRef } from 'react'

const UseRef = () => {

    const names = useRef(null)
    const handleClick = () => {
        console.log(names.current.value);

    }
    return (
        <>
            <input type="text" ref={names} />
            <button className='btn btn-outline-light ms-3' onClick={handleClick}>log</button>
        </>
    )
}

export default UseRef