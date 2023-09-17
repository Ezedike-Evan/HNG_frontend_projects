import {IoLogoFacebook, IoLogoInstagram, IoLogoYoutube} from 'react-icons/io'
import {RiTwitterXLine, RiFacebookFill} from 'react-icons/ri'
import './css/footer.css'

const Footer = ()=>{
    return(
        <footer>
            <div className='socials'>
                <RiFacebookFill size={20}/>
                <IoLogoInstagram size={20}/>
                <RiTwitterXLine size={20}/>
                <IoLogoYoutube size={20}/>
            </div>
            <div style={{width:'600px'}}>
                <p>Conditions of Use</p>
                <p>Privacy & Policy</p>
                <p>Press Room</p>
            </div>
            <sub>&copy; 2023 MovieBox By Ezedike Evan</sub> 
        </footer>
    )
}

export default Footer