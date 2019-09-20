import axios from 'axios';

const INITIALIZE = 'INITIALIZE';
const GET_COMMENTS = 'GET_COMMENTS';
const GET_COMMENTS_LOADING = 'GET_COMMENTS_LOADING';
const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
const GET_COMMENTS_ERROR = 'GET_COMMENTS_ERROR';

const initialState = {
    loading: false,
    success: false,
    error: false,
    comments: []
}

export const getComments = (videoId) => ({
    type: GET_COMMENTS,
    payload: axios.get(`/comments/${videoId}`)
})

const base = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZE :
            return {
                ...state
            }
        case GET_COMMENTS_LOADING :
            return {
                ...state,
                loading: true
            }
        case GET_COMMENTS_SUCCESS :
            console.log(action);
            return {
                ...state,
                loading: false,
                success: true,
                comments: action.payload.data.comments
            }
        case GET_COMMENTS_ERROR :
            return {
                ...state,
                success: false,
                loading: false,
                error: true
            }
        default :
            return {
                ...state
            }
    }
}

export default base;