import React from "react";

const NoComment = () => {
    return (
        <div className="NoComment">
            <div className="noCommentWrapper">
                <div className="img-div">
                    <img alt="no-comment" src="img/nocomment.svg" />
                </div>
                <p>동영상이 존재하지 않거나 해당 동영상에 댓글이 존재하지 않습니다.</p>
            </div>
        </div>
    );
};

export default NoComment;
