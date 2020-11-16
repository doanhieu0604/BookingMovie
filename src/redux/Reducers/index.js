import {combineReducers} from 'redux';
import listMovieReducer from '../../contaimers/Home/ListMovie/modules/reducer';

const rootReducer = combineReducers({
    listMovieReducer,
});

export default rootReducer;