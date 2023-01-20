import React,{ useEffect} from 'react';
import ReactPlayer from 'react-player';
import { useSelector,useDispatch } from 'react-redux';
import {  loadMovies } from '../redux/actions';


const MovieDetails=()=> {
  let dispatch = useDispatch();
    const {movies} = useSelector(state => state.movies)
    useEffect(() => {
         dispatch(loadMovies())
    },[])
  return (
    <div>
      {movies && movies.map((each) => {
          return(
            <div>
                <img src={each.Poster} alt={each.Title}/>
                <h1>{each.Title}</h1>
                <p>{each.Plot}</p> 
                <ReactPlayer url={each.video} />
            </div>
          )
        })}
    </div>
  )
}
export default MovieDetails
