import React, { useReducer } from 'react'

const UseReducer = () => {

    const reducer = (state, action) => {
        switch (action.key) {
            case "Increment":
                return state + 1;
                break;

            default:
                break;
        }
    }
    const init = 0;

    const [count, dispatch] = useReducer(reducer, init)
    console.log(count);


    return (
        <>
            <h1 className="text-light">{count}</h1>
            <button className='btn btn-outline-primary' onClick={() => dispatch({ key: "Increment" })}>Increment</button>
        </>
    )
}

export default UseReducer