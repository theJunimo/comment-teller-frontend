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
        colors: ['#E75232', '#9676e2', '#3b4ab7', '#aad6f9', '#b2a8cb', '#3b4ab7'],
        enableTooltip: true,
        deterministic: false,
        fontFamily: 'Noto Sans KR, sans-serif',
        fontSizes: [16, 100],
        fontStyle: 'normal',
        fontWeight: 'bold',
        padding: 1,
        rotations: 3,
        rotationAngles: [0, 90],
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

    return(
        <div className = { cx('WordCloudWrapper ' + (loading || success || error? 'show' : '')) }>
            <div className = 'inner-div'>
                {loading? <Loading/> : null}
                {success && comments? <WC data = { comments } /> : 
                    success && !comments? <NoComment /> : 
                    error? <Error /> : null}
            </div>
        </div>
    )
}

export default WordCloudWrapper;