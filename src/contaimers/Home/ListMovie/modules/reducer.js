import { LIST_MOVIE_REQUEST, LIST_MOVIE_SUCCESS, LIST_MOVIE_FAILED } from './contants';

let initaialState = {
    
    listMovie: [],
    err: null,
}

const listMovieReducer = (state = initaialState, action) => {
    switch (action.type) {
        case LIST_MOVIE_REQUEST:
            state.listMovie =[];
            state.err = null;
            return{...state};
        case LIST_MOVIE_SUCCESS:
            
            state.listMovie= action.data;
            state.err = null;
            return{...state};
        case LIST_MOVIE_FAILED:
            
            state.listMovie=[];
            state.err = action.err;
            return{...state};
        default:
            return{...state};
    }
}
export default listMovieReducer;