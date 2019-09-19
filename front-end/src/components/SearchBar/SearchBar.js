import React, { useState, useEffect, useRef } from 'react';
import styles from './SearchBar.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SearchBar = () => {
    const [alert, setAlert] = useState('unseen');
    const inputEl = useRef(null);

    const handleSearch = () => {
        if(inputEl.current.value){
            const videoURL = inputEl.current.value;
            console.log(videoURL);
            //유효하지 않은 주소일 경우
            setAlert('유효하지 않은 주소입니다. 주소형식을 확인해주세요.');
        } else {
            setAlert('주소를 입력해주세요!');
        }
    }

    useEffect(() => {

    },[])

    return (
        <div className = { cx('SearchBar') }>
            <div className = { cx('content')}>
                <div className = { cx('input-div') }>
                    <input ref = { inputEl } 
                            type = 'text' 
                            placeholder = '예시) https://www.youtube.com/watch?v=k4qLiyh78U8'/>
                </div>
                <div className = { cx('button-div')}>
                    <div className = { cx('button')} onClick = { handleSearch }>
                        SEARCH
                    </div>
                </div>
            </div>
            <span className = { cx('alert ' + (alert !== 'unseen'? 'show' : null)) }>{ alert }</span>
        </div>
    )
}

export default SearchBar;