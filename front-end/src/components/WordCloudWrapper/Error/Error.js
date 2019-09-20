import React from 'react';
import styles from './Error.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Error = () => {
    return(
        <div className = {cx('Error')}>
            <div className = { cx('errorWrapper')}>
                <div className = { cx('img-div')}>
                    <img alt = 'error' src= 'img/error.svg'/>
                </div>
                <p>죄송합니다. 예상치 못한 오류가 발생하였습니다.</p>
            </div>
        </div>
    )
}

export default Error;