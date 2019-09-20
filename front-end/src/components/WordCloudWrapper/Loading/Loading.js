import React from 'react';
import styles from './Loading.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Loading = () => {
    return (
        <div className = { cx('Loading') }>
            <div className = { cx('loading-wrapper')}>
                <div className = {cx('roller-wrapper')}>
                    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
                <p>로딩중입니다. 잠시만 기다려주세요.</p>
            </div>
        </div>
    )
}

export default Loading;