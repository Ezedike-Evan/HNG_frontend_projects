import {LuMonitorPlay} from 'react-icons/lu'
import {LiaHomeSolid, LiaTvSolid} from 'react-icons/lia'
import {BiCameraMovie} from 'react-icons/bi'
import {BsCalendar3} from 'react-icons/bs'
import './css/individualNav.css'
import { useNavigate } from 'react-router-dom'

const IndividualNav = ()=>{
    const navigate = useNavigate()
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
            <ul className='nav-links'>
                <li onClick={()=>navigate('/')} style={{cursor:'pointer'}}><LiaHomeSolid /> Home</li>
                <li><BiCameraMovie color='black'/> Movies</li>
                <li><LiaTvSolid /> Tv Series</li>
                <li><BsCalendar3 /> Upcoming</li>
            </ul>
        </nav>
    )
}

export default IndividualNav