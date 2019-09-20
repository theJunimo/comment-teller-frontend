import React from 'react';
import styles from './WordCloudWrapper.scss';
import classNames from 'classnames/bind';
import WordCloud from 'react-wordcloud';
import Loading from './Loading';
import NoComment from './NoComment';
import Error from './Error';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

const WC = ({ data }) => {

    const options = {
        colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
        enableTooltip: true,
        deterministic: false,
        fontFamily: 'Noto Sans KR, sans-serif',
        fontSizes: [10, 80],
        fontStyle: 'normal',
        fontWeight: 'bold',
        padding: 5,
        rotations: 3,
        rotationAngles: [0, 0],
        scale: 'sqrt',
        spiral: 'archimedean',
        transitionDuration: 1000,
    }
    return (
        <div className = {cx('inner-div')}>
            <WordCloud 
            options = { options }
            words = { data }/>
        </div>
    )
}

const WordCloudWrapper = () => {
    const { loading, success, error, comments } = useSelector(state => state);

    const data = [
        { text: '아에이오우', value: 1000 }, 
        { text: '아에아에', value: 500 },  
        { text: '철수', value: 1000 },
        { text: 'Jin', value: 500 },
        { text: 'lol', value: 700 },
        { text: 'HAHA', value: 100 },
        { text: 'Nice', value: 16 },
        { text: 'Hi', value: 5000 },
        { text: 'Zoo', value: 5 },
        { text: 'whats up', value: 760 },
        { text: 'Instagram', value: 130 },
        { text: 'There you are!!', value: 226 },
        { text: '엽엽', value: 226 },
        { text: '엽엽', value: 226 },
        { text: '엽엽', value: 226 },
        { text: '엽엽', value: 226 },
        { text: '엽엽', value: 226 },
        { text: '엽엽', value: 226 },
        { text: '엽엽', value: 226 },
        { text: '엽엽', value: 226 }];

    return(
        <div className = { cx('WordCloudWrapper ' + (loading || success || error? 'show' : '')) }>
            <div className = {cx('inner-div')}>
                {loading? <Loading/> : null}
                {success && comments? <WC data = { comments } /> : 
                    success && !comments? <NoComment /> : 
                    error? <Error /> : null}
            </div>
        </div>
    )
}

export default WordCloudWrapper;