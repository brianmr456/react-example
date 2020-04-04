import * as CommentAction from '../actions/commentsActions';

const initialState = {
    data: [],
    isLoading: false,
    isLoaded: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case CommentAction.LOAD_COMMENTS:
            return {
                ...state,
                isLoading: true,
                isLoaded: false
            }
        case CommentAction.LOAD_COMMENTS_FAIL:
            return {
                ...state,
                isLoading: false,
                isLoaded: false
            }
        case CommentAction.LOAD_COMMENTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                data: action.payload
            }
        case CommentAction.REMOVE_COMMENT:
            return {
                ...state,
                isLoading: true
            }
        case CommentAction.REMOVE_COMMENT_FAIL:
            return {
                isLoading: false
            }
        case CommentAction.REMOVE_COMMENT_SUCCESS:
            return{
                ...state,
                isLoading: false,
                data: state.data.filter(comment => comment.id !== action.payload)
            }
        default: return state;
    }
}