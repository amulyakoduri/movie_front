import React,{useEffect, useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { deleteMovies, loadMovies } from '../redux/actions';


const Home =()=> {
  const [term, setTerm] = useState("")
    let dispatch = useDispatch();
    let history = useHistory()
    const {movies} = useSelector(state => state.movies)

    useEffect(() => {
         dispatch(loadMovies())
    },[])

    const handleDelete = (id) => {
      dispatch(deleteMovies(id))
    }

    let sortedList=[]
    
    const whenAscendingSortButtonClicked = () => {
       sortedList = movies.sort((a, b) => {
        const x = a.Title.toUpperCase()
        const y = b.Title.toUpperCase()
        return x > y ? 1 : -1
      })
      
    }
  
    const whenDescendingSortButtonClicked = () => {
      sortedList = movies.sort((a, b) => {
        const x = a.Title.toUpperCase()
        const y = b.Title.toUpperCase()
        return x < y ? 1 : -1
      })
    }

    const searchResult = movies.filter(data => 
      data.Title.toLowerCase().includes(term.toLowerCase()),
    )
    console.log(searchResult, "this is search")
    return (
      <div>
        <div className='search-bar'>
            <form>
                <input type="text" placeholder="Search Movies" onChange={(e) => setTerm(e.target.value)}/>
                <button type="submit"><i className='fa search'></i></button>
            </form>
            <button onClick={whenAscendingSortButtonClicked}>Ascending</button>
            <button onClick={whenDescendingSortButtonClicked}>Descending</button>
        </div>
        {movies && movies.map((each) => {
          return(
            <div>
             <Link to={`/movies/${each.imdbID}`}>
                <img src={each.Poster} alt={each.Title}/>
                <h1>{each.Title}</h1>
              </Link>  
            
            <button onClick={() => handleDelete(each.imdbID)}>Delete</button>
            <button onClick={() =>history.push(`/editMovie/${each.imdbID}`)}>Edit</button>
            </div>
          )
        })}

      </div>
    )
}

export default Home