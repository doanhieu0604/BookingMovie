import { LIST_MOVIE_REQUEST, LIST_MOVIE_SUCCESS, LIST_MOVIE_FAILED } from './contants';
import Axios from "axios";

const actFetchListMovie = () => {
    return dispatch => {
        dispatch(actListMovieRequest())
        Axios({
            url:
                "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03",
            method: "GET"
        })
            .then(res => {
                dispatch(actListMovieSuccess(res.data));
            })
            .catch(err => {
                dispatch(actListMovieFailed(err));
            });
    };
};
const actListMovieRequest = () => {
    return {
        type:LIST_MOVIE_REQUEST,
    };
};
const actListMovieSuccess = (data) => {
    return {
        type: LIST_MOVIE_SUCCESS,
        data,
    };
};
const actListMovieFailed = (data) => {
    return {
        type: LIST_MOVIE_FAILED,
        data,
    };
};

export { actFetchListMovie }