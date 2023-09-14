import { useState, useEffect } from 'react'
import './App.css'
import axios  from 'axios'
import Header from './component/Header'

const REACT_APP_READ_ACCESS_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmNmNmU4NGMwYTA4MGI0ODdiNzljZTAyNDI4MzIwMiIsInN1YiI6IjY1MDMwMjUzZmZjOWRlMGVlMTc4MGZkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vj2KHgWpKg2ZaW1qB0I8pHAdV2fNwtbmy-43mbpfqMY'

function App() {
  const [topVid , setTopVid] = useState({})
  const num = Math. floor(Math. random() * 19) + 1

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${REACT_APP_READ_ACCESS_KEY}`
    }
  };

  useEffect(()=>{
    async function getPopularMovies(){
      const res = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
                  await setTopVid(res.data.results[num])
    }
    getPopularMovies()
  },[])

  return (
    <>
        {console.log(topVid)}
      <header style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${topVid.backdrop_path})`}}>
        <Header />
      </header>
    </>
  )
}

export default App
