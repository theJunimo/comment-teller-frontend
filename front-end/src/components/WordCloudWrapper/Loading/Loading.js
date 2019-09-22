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
                <p>로딩중입니다. 댓글 수에 따라 로딩시간이 길어질 수 있습니다.</p>
            </div>
        </div>
    )
}

export default Loading;