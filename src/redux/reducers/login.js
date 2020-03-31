import * as actions from '../actions/Types';


const initialState = {
    isloggedIn: null,
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.LOGGEDIN: {
            return {
                ...state,
                isloggedIn:action.islogin
            };
        };
        case actions.LOGOUT: {
            return {
                ...state,
                isloggedIn:null
            };
        };
        default: return state;
    }
}
export default loginReducer;