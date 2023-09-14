import {PiMonitorPlayLight} from 'react-icons/pi'

const Header = ()=>{
    return(
        <>
            <nav>
                <PiMonitorPlayLight size={35}  />
                <input type="text" placeholder='what do you want to watch?'/>
            </nav> 
        </>
    )
}

export default Header