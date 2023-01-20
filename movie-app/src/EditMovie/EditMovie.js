import React, { useState ,useEffect} from 'react';
import { useHistory,useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateMovies } from '../redux/actions';

const EditMovie = () => {
    const [state, setState] = useState({
        Title: "",
        Plot: ""
    })

    const [error,setError] = useState("")
    let {imdbID} = useParams();
    const movie = useSelector((state) => state.data)
    let history = useHistory();
    let dispatch = useDispatch()
    const {Title,Plot} = state;

    useEffect(() => {
        dispatch(updateMovies(imdbID))
    },[])

    useEffect(() => {
        if(movie){
            setState({...movie })
        }
    },[movie])

    const handleInputChange = (e) => {
        let {Title,value} = e.target;
        setState({...state, [Title]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!Title || !Plot){
            setError("Please fill all the fields")
        } else{
            dispatch(updateMovies(state))
            history.push('/');
            setError("");
        }
    }
    
  return (
    <div>
         <button onClick={() =>history.push('/')}>Edit</button>
         {error && <h3>{error}</h3>}
      <form onSubmit={handleSubmit}>
        <input type="text" value={Title} onChange={handleInputChange }/>
        <br/>
        <input type="email" value={Plot} onChange={handleInputChange }/>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default EditMovie