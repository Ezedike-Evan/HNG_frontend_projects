import './css/featured.css'
import {FaAngleDoubleRight} from 'react-icons/fa'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './card'

const FeaturedMovies = ({options})=>{
    const [topMovies,setTopMovies] = useState([])

    const getTopMovies = async()=>{
        const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated',options)
                         await setTopMovies(response.data.results)
    }

    useEffect(()=>{
        getTopMovies()
    },[])

    return(
        <section>
            <div>
                <h2>Featured Movie</h2>
                <h6>See more <FaAngleDoubleRight style={{marginLeft:'20px'}}/></h6>
            </div>
            <div className='cards'>
                {
                    topMovies.map((topMovie)=>{
                        return(
                            <Card id={topMovie.id} topMovie={topMovie} onClick/>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default FeaturedMovies