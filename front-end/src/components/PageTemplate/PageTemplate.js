import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import Title from 'components/Title';
import SearchBar from 'components/SearchBar';
import Notice from 'components/Notice';
import WordCloudWrapper from 'components/WordCloudWrapper';

const cx = classNames.bind(styles);

const PageTemplate = () => {
    return(
        <div className = {cx('PageTemplate')}>
            <Title />
            <main>
                <div>
                    <SearchBar/>
                    <Notice />
                    <WordCloudWrapper/>
                </div>
            </main>
        </div>
    )
}

export default PageTemplate;