import { combineReducers } from 'redux';
import postReducer from './post';
import login from './login';

const rootReducer = combineReducers({
    postReducer: postReducer,
    login: login,
});
export default rootReducer;