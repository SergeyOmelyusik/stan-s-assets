import style from './Nav.module.css'
import { NavLink } from 'react-router-dom'

const Nav = (props) => {
    return (
        <nav>
            <ul className={style.nav}>
                <li><NavLink to='/services' className={style.navLinkDisabled} style={{color: props.color}}>Services</NavLink>
                    <ul>
                        <li><NavLink to='/services/mobile-app' className={style.subLink}>MOBILE APPLICATION DEVELOPMENT</NavLink></li>
                        <li><NavLink to='/services/game-development' className={style.subLink}>GAME DEVELOPMENT OUTSOURCING</NavLink></li>
                        <li><NavLink to='/services/vr' className={style.subLink}>VR APP DEVELOPMENT</NavLink></li>
                        <li><NavLink to='/services/dedicated-dev' className={style.subLink}>DEDICATED DEVELOPERS</NavLink></li>
                        <li><NavLink to='/services/sdk-dev' className={style.subLink}>SDK DEVELOPMENT</NavLink></li>
                        <li><NavLink to='/services/sdk-modeling' className={style.subLink}>3D MODELING SERVICES</NavLink></li>
                        <li><NavLink to='/services/ar-app' className={style.subLink}>AR APP DEVELOPMENT</NavLink></li>
                    </ul>
                </li>
                <li><NavLink to='/technologies' className={style.navLinkDisabled} style={{color: props.color}}>Technologies</NavLink>
                    <ul>
                        <li><NavLink to='/technologies/android' className={style.subLink}>android technologies</NavLink></li>
                        <li><NavLink to='/technologies/ios' className={style.subLink}>ios technologies</NavLink></li>
                        <li><NavLink to='/technologies/unity' className={style.subLink}>unity technologies</NavLink></li>
                    </ul>
                </li>
                <li><NavLink to='/products' className={style.navLink} style={{color: props.color}}>Products</NavLink></li>
                <li><NavLink to='/portfolio' className={style.navLink} style={{color: props.color}}>Portfolio</NavLink></li>
                <li><NavLink to='/blog' className={style.navLink} style={{color: props.color}}>Blog</NavLink></li>

                <li><NavLink to='/about-us' className={style.navLink} style={{color: props.color}}>About us</NavLink>
                    <ul>
                        <li><NavLink to='/about-us/team' className={style.subLink}>Team</NavLink></li>
                        <li><NavLink to='/about-us/contact-us' className={style.subLink}>Contact Us</NavLink></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Nav