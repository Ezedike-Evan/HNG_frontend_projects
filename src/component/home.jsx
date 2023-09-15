import { useState, useEffect } from 'react'
import axios  from 'axios'
import Header from './Header'
import FeaturedMovies from './Featured'
import Footer from './footer'

// figma_link = 'https://www.figma.com/file/tVfgoNfhYkQaUkh8LGqRab/MovieBox-(Community)?type=design&node-id=1220-324&mode=design&t=6998DWtjQrxz8mOf-0'
  
const Home = ()=>{
    const [topVid , setTopVid] = useState({})
    const num = Math. floor(Math. random() * 19) + 1
  
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_READ_ACCESS_KEY}`
      }
    };
  
    useEffect(()=>{
      async function getPopularMovies(){
        const res = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
                    await setTopVid(res.data.results[num])
      }
      getPopularMovies()
    },[])

    return(
        <>
            <header style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${topVid.backdrop_path})`}}>
                <Header topVid={topVid} />
            </header>
            <FeaturedMovies options={options}/>
            <Footer />
        </>
    )
}

export default Home