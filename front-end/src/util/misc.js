export const convertToObj = (comments) => {
    return comments.map((el) => {
        return {
            text: el[0],
            value: el[1],
        };
    });
};
