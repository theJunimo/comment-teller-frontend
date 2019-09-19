import React, { useState, useRef, useEffect } from 'react';
import styles from './WordCloudWrapper.scss';
import classNames from 'classnames/bind';
import WordCloud from 'react-wordcloud';

const cx = classNames.bind(styles);

const WordCloudWrapper = () => {
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
    const font = 'Noto Sans KR, sans-serif';
    const fontSizeMapper = word => Math.log2(word.value) * 5;
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
    return(
        <div className = { cx('WordCloudWrapper') }>
            <div className = {cx('inner-div')}>
            <WordCloud 
                options = { options }
                words = { data }/>
            </div>
        </div>
    )
}

export default WordCloudWrapper;