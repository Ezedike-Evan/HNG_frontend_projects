import {LuMonitorPlay} from 'react-icons/lu'
import './css/individualNav.css'

const IndividualNav = ()=>{
    return(
        <nav className='individualNav'>
            <div className='first-part'>
                <div className='outer-div'>
                    <div className='inner-div'>
                        <LuMonitorPlay size={21} />
                    </div>
                </div>
                <h2>MovieBox</h2>
            </div>
            <div>
                <h3>Home</h3>
                <h3>Movies</h3>
                <h3>Tv Series</h3>
                <h3>Upcoming</h3>
            </div>
        </nav>
    )
}

export default IndividualNav