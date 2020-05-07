import React from "react";
import "./PageTemplate.scss";
import Title from "components/Title";
import SearchBar from "components/SearchBar";
import Notice from "components/Notice";
import WordCloudWrapper from "components/WordCloudWrapper";

const PageTemplate = () => {
    return (
        <div className="PageTemplate">
            <Title />
            <main>
                <div>
                    <SearchBar />
                    <Notice />
                    <WordCloudWrapper />
                </div>
            </main>
        </div>
    );
};

export default PageTemplate;
