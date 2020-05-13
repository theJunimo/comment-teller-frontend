import axios from "axios";
import { convertToObj } from "util/misc";

const INITIALIZE = "INITIALIZE";
const GET_COMMENTS = "GET_COMMENTS";
const GET_COMMENTS_LOADING = "GET_COMMENTS_LOADING";
const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
const GET_COMMENTS_ERROR = "GET_COMMENTS_ERROR";

const initialState = {
    loading: false,
    success: false,
    error: false,
    comments: [],
};

export const getComments = (videoId) => ({
    type: GET_COMMENTS,
    payload: axios.get(`https://commentapi.during.kr/comments/${videoId}`),
});

const base = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE:
            return initialState;
        case GET_COMMENTS_LOADING:
            return {
                ...initialState,
                loading: true,
            };
        case GET_COMMENTS_SUCCESS:
            return {
                loading: false,
                success: true,
                comments: convertToObj(action.payload.data.comments),
                error: false,
            };
        case GET_COMMENTS_ERROR:
            return {
                ...initialState,
                error: true,
            };
        default:
            return {
                ...state,
            };
    }
};

export default base;
