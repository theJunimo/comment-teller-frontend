import React from 'react';
import styles from './PageWrapper.scss';
import classNames from 'classnames/bind';
import PageTemplate from 'components/PageTemplate';

const cx = classNames.bind(styles);

const PageWrapper = () => {
    return (
        <div className = { cx('PageWrapper') }>
            <PageTemplate/>
        </div>
    )
}

export default PageWrapper;