import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
    const error = useSelector(state => state.userReducer.error);
    console.log(error)

    return (
        <div>
            {error ? (
                    <p>Error: {error.status === 500 ?  `user not found` : error.data } </p>
                ) : (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
            )}
        </div>
    );
}

export default Loading;
