import './css/card.css'
import {LiaImdb} from 'react-icons/lia'
import {GiTomato} from 'react-icons/gi'

const Card = ({topMovie})=>{
    return(
        <div className='card' data-testid='movie-card'>
            <img
            data-testid='movie-poster' 
            src={`https://image.tmdb.org/t/p/original${topMovie.poster_path}`} alt={`${topMovie.title} img`} />
            <sub data-testid='movie-release-date'>{`${topMovie.original_language}, ${topMovie.release_date.split('-')[0]}`}</sub>
            <h4 data-testid='movie-title'>{topMovie.title}</h4>
            <div className='detail'>
                <div>
                    <LiaImdb size={30} />
                    <p>{`${topMovie.vote_average * 10} / 100`}</p>
                </div>
                <div>
                    <GiTomato size={20} />
                    <p>{Math.floor(topMovie.popularity)}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Card