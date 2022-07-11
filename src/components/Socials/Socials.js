import style from './Socials.module.css'
import icoFacebook from './../../assets/images/icons/socials/facebook.png'
import icoSkype from './../../assets/images/icons/socials/skype.png'
import icoWhatsUp from './../../assets/images/icons/socials/whatsup.png'
import icoLinkedin from './../../assets/images/icons/socials/linkedin.png'

const Socials = () => {
    return(
        <div className={style.socialsBlock}>
            <ul>
                <li><a href="#"><img src={icoFacebook} alt="" /></a></li>
                <li><a href="#"><img src={icoLinkedin} alt="" /></a></li>
                <li><a href="#"><img src={icoWhatsUp} alt="" /></a></li>
                <li><a href="#"><img src={icoSkype} alt="" /></a></li>
            </ul>
        </div>
    )
}

export default Socials