import React from "react";
import "./Notice.scss";

const Notice = () => {
    return (
        <div className="Notice">
            <ul>
                <li>
                    검색창에 입력할 비디오 주소는 https://www.youtube.com/watch?v='비디오ID'
                    형식으로 입력해주세요.
                </li>
                <li>
                    한글로 쓰여진 댓글만 처리하며, 한글 외의 언어로 쓰여진 댓글은 처리하지 않습니다.
                    따라서 한글로 작성된 댓글이 없을 경우 분석에 실패할 수 있습니다.
                </li>
            </ul>
        </div>
    );
};

export default Notice;
