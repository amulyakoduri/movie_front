import {combineReducers} from 'redux';
import usersReducers  from './reducer';

const rootReducer = combineReducers({
    movies: usersReducers
})

export default rootReducer;

