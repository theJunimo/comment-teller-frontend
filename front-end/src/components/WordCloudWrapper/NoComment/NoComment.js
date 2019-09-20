import React from 'react';
import styles from './NoComment.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const NoComment = () => {
    return (
        <div className = { cx('NoComment')}>
            <div className = { cx('noCommentWrapper')}>
                <div className = { cx('img-div')}>
                    <img alt = 'no-comment' src= 'img/nocomment.svg'/>
                </div>
                <p>해당 동영상에 댓글이 존재하지 않습니다.</p>
            </div>
        </div>
    )
}

export default NoComment;