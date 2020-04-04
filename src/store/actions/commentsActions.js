import axios from 'axios';
const baseURL = process.env.BASE_URL || 'https://jsonplaceholder.typicode.com/';

export const LOAD_COMMENTS = "Load Comments";
export const LOAD_COMMENTS_FAIL = "Load Comments Fail";
export const LOAD_COMMENTS_SUCCESS = "Load Comments Success";
export const REMOVE_COMMENT = "Remove Comment";
export const REMOVE_COMMENT_FAIL = "Remove Comment Fail";
export const REMOVE_COMMENT_SUCCESS = "Remove Comment Success";

export const loadComments = () => {
    return {
        type: LOAD_COMMENTS
    }
}

export const loadCommentsFail = () => {
    return {
        type: LOAD_COMMENTS_FAIL
    }
}

export const loadCommentsSuccess = (payload) => {
    return {
        type: LOAD_COMMENTS_SUCCESS,
        payload
    }
}

export const removeComment = () => {
    return {
        type: REMOVE_COMMENT
    }
}

export const removeCommentFail = () => {
    return {
        type: REMOVE_COMMENT_FAIL
    }
}

export const removeCommentSuccess = (payload) => {
    return {
        type: REMOVE_COMMENT_SUCCESS,
        payload
    }
}

export const getComments = () => {
    return (dispatch) => {
        dispatch(loadComments());
        axios.get(baseURL + 'comments')
        .then(function (response) {
            dispatch(loadCommentsSuccess(response.data));
        })
        .catch(function (error) {
            dispatch(loadCommentsFail());
        });
    }
}

export const deleteComment = (id) => {
    return (dispatch) => {
        dispatch(removeComment());
        setTimeout(() => {
            dispatch(removeCommentSuccess(id));
        }, 1500);
    }
}