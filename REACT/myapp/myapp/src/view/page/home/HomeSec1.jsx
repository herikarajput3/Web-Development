import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const HomeSec1 = () => {
    const count = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-gradient bg-light">
            <div className="bg-white shadow rounded p-4 w-100" style={{ maxWidth: "400px", textAlign: "center" }}>
                <h1 className="display-5 fw-bold mb-4">Counter App</h1>
                <div className="display-1 text-primary mb-4">{count}</div>
                <div className="d-flex justify-content-center gap-2">
                    <button
                        onClick={() => dispatch({ type: 'INCREMENT' })}
                        disabled={count > 4}
                        className={`btn btn-lg font-weight-bold ${count > 4 ? 'btn-secondary disabled' : 'btn-outline-success'}`}
                    >
                        Increment
                    </button>
                    <button
                        onClick={() => dispatch({ type: 'DECREMENT' })}
                        disabled={count < 1}
                        className={`btn btn-lg font-weight-bold ${count < 1 ? 'btn-secondary disabled' : 'btn-outline-danger'}`}
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeSec1;
