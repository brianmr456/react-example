import { combineReducers } from 'redux'
import { reducer as user} from './userReducer';
import { reducer as comments} from './commentsReducer';

const rootReducer = combineReducers({
    user,
    comments
});

export default rootReducer;