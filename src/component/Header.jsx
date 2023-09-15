import {LuMonitorPlay} from 'react-icons/lu'
import {AiOutlineSearch} from 'react-icons/ai'
import {LiaImdb} from 'react-icons/lia'
import {GiTomato} from 'react-icons/gi'
import './css/header.css'

const Header = ({topVid})=>{
    return(
        <div className='header-div'>
            <nav>
                <div className='first-part'>
                    <div className='outer-div'>
                        <div className='inner-div'>
                            <LuMonitorPlay size={25} />
                        </div>
                    </div>
                    <h2>MovieBox</h2>
                </div>
                <div className="search">
                    <input type="text" placeholder='what do you want to watch?'/>
                    <AiOutlineSearch size={22} className='search-icon'/>
                </div>
            </nav>
            <div className="header-body">
                <h1>{topVid.original_title}</h1>
                <div className='detail'>
                    <div>
                        <LiaImdb size={38} />
                        <p>{`${topVid.vote_average * 10} / 100`}</p>
                    </div>
                    <div>
                        <GiTomato size={28} />
                        <p>{Math.floor(topVid.popularity)}</p>
                    </div>
                </div>
                <p>{topVid.overview}</p>
            </div>
        </div>
    )
}

export default Header