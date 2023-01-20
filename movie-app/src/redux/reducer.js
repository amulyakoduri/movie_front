import * as types from "./actionType";

const initialState = {
    movies: [],
    movie:{},
    loading: true
}

const usersReducers = (state = initialState,action) => {
    switch(action.type){
        case types.GET_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false,
            };
        case types.DELETE_MOVIE:
            return {
                ...state,
                loading: false,
            } 
        case types.EDIT_MOVIE:
            return {
                ...state,
                movie:action.payload,
                loading: false,
            }      
        default:
            return state;
    }
};

export default usersReducers;