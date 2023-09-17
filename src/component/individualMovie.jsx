import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import IndividualNav from './individualNav'
import {BsDot} from 'react-icons/bs'
import Footer from './footer'

const IndividualMovie = ()=>{
    const paramsId = useParams().id
    const [movie , setMovie] = useState({})
  
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_READ_ACCESS_KEY}`
      }
    }

    const duration = (runtime)=>{
      let h = Math.trunc((runtime / 60))
      let m = runtime % 60
      return `${h}h ${m}m`
    }
    
    useEffect(()=>{
      async function getPopularMovies(){
        const movieRes = await axios.get(`https://api.themoviedb.org/3/movie/${paramsId}`, options)
        try {
          setMovie(movieRes.data)
        } catch (error) {
          console.log(error.message)
        }
      }
      getPopularMovies()
    },[])
    return(
      <div style={{display:'flex'}}>
          {console.log(movie)}
            <IndividualNav />
            <section className='individualMovie'>
              <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" />
              <div style={{display:'flex',alignItems:'center', margin:'20px 0'}}>
                <h3 data-testid='movie-title'>{movie.title}</h3>
                <BsDot />
                <h3 data-testid='movie-release-date'>{`${String(movie.release_date).slice(0, 4)}`}</h3>
                <BsDot />
                <h3>PG-13</h3>
                <BsDot />
                <h3 data-testid='movie-runtime'>{`${duration(movie.runtime)}`}</h3>
                <ul className='genres'>
                  {
                    (movie.genres === undefined) ? '' :
                    movie.genres.map((genre)=>{
                      return(
                        <li>{genre.name}</li>
                      )
                    })
                  }
                </ul>
              </div>
              <p
              data-testid='movie-overview' 
              style={{marginTop:'10px'}}>{movie.overview}</p>
            <Footer />
            </section>
        </div>
    )
}

export default IndividualMovie