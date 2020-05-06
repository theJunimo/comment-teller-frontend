import React from 'react';
import './Error.scss';

const Error = () => {
    return(
        <div className = 'Error'>
            <div className = 'errorWrapper'>
                <div className = 'img-div'>
                    <img alt = 'error' src= 'img/error.svg'/>
                </div>
                <p>죄송합니다. 예상치 못한 오류가 발생하였습니다.</p>
            </div>
        </div>
    )
}

export default Error;