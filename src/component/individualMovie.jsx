import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import IndividualNav from './individualNav'

const IndividualMovie = ()=>{
    const paramsId = useParams().id
    // const [movie , setMovie] = useState({})
  
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_READ_ACCESS_KEY}`
      }
    };
  
    useEffect(()=>{
      async function getPopularMovies(){
        const movieRes = await axios.get(`https://api.themoviedb.org/3/movie/${paramsId}`, options)
                    // await setTopVid(res.data.results[num])
                    console.log(movieRes)
      }
      getPopularMovies()
    },[])
    return(
        <div>
            <IndividualNav />
        </div>
    )
}

export default IndividualMovie