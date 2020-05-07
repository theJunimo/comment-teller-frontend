import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getComments } from "stores/base";
import styles from "./SearchBar.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const SearchBar = () => {
    const [alert, setAlert] = useState("unseen");
    const inputEl = useRef(null);
    const dispatch = useDispatch();

    const handleSearch = useCallback(() => {
        if (inputEl.current.value) {
            const URL = "https://www.youtube.com/watch?v=";
            const videoURL = inputEl.current.value;
            if (videoURL.length > 32 && videoURL.slice(0, 32) === URL) {
                setAlert("unseen");
                const videoId = videoURL.slice(32, videoURL.length);
                dispatch(getComments(videoId));
            } else {
                //유효하지 않은 주소일 경우
                setAlert("유효하지 않은 주소입니다. 주소형식을 확인해주세요.");
            }
        } else {
            setAlert("주소를 입력해주세요!");
        }
    }, [dispatch]);

    useEffect(() => {
        const handleUserKeyPress = (e) => {
            const { keyCode } = e;

            if (keyCode === 13) {
                handleSearch();
            }
        };

        window.addEventListener("keydown", handleUserKeyPress);

        return () => {
            console.log("서치바이벤트삭제");
            window.removeEventListener("keydown", handleUserKeyPress);
        };
    }, [handleSearch]);

    return (
        <div className="SearchBar">
            <div className="content">
                <div className="input-div">
                    <input
                        ref={inputEl}
                        type="text"
                        placeholder="예시) https://www.youtube.com/watch?v=k4qLiyh78U8"
                    />
                </div>
                <div className="button-div" onClick={handleSearch}>
                    <div className="button">SEARCH</div>
                </div>
            </div>
            <span className={cx("alert " + (alert !== "unseen" ? "show" : null))}>{alert}</span>
        </div>
    );
};

export default SearchBar;
