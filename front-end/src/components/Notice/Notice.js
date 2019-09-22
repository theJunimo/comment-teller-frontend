import React from 'react';
import styles from './Notice.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Notice = () => {
    return (
        <div className = { cx('Notice') }>
            <ul>
            <li>검색창에 입력할 비디오 주소는 https://www.youtube.com/watch?v='비디오ID' 형식으로 입력해주세요.</li>
            <li>한글로 쓰여진 댓글만 처리하며, 한글 외의 언어로 쓰여진 댓글은 처리하지 않습니다.</li>
            </ul>
        </div>
    )
}

export default Notice;