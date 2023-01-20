import * as types from "./actionType";
import axios from "axios";

const getMovies = (movies) => ({
    type: types.GET_MOVIES,
    payload: movies
});

const movieDeleted = () => ({
    type: types.DELETE_MOVIE
})

const movieUpdate = (movie) => ({
    type: types.EDIT_MOVIE,
    payload: movie
})

export const loadMovies = () => {
    return function (dispatch){
        axios.get(`${process.env.REACT_APP_API}`).then((res) => {
            console.log(res.data)
            dispatch(getMovies(res.data))
        }).catch((err) => console.log(err))
    }
}

export const deleteMovies = (id) => {
    return function (dispatch){
        axios.delete(`${process.env.REACT_APP_API}/${id}`).then((res) => {
            console.log(res)
            dispatch(movieDeleted());
            dispatch(loadMovies());
        }).catch((err) => console.log(err))
    }
}

export const updateMovies = (id) => {
    return function (dispatch){
        axios.get(`${process.env.REACT_APP_API}/${id}`).then((res) => {
            console.log(res)
            dispatch(movieUpdate(res.data));
        }).catch((err) => console.log(err))
    }
}