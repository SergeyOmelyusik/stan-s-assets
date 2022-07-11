import './MobileMenu.css'
import { AppContext } from '../../App'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

const MobileMenu = ({active,setActive}) => {
    const {setVisibleMM,setVisibleCF} = useContext(AppContext)

    return (
        <div className={active ? 'mobile_menu active' : 'mobile_menu'} onClick={() => {
            setVisibleMM(false)
        }}>

            <div className='btn_close' onClick={() => {
                setVisibleMM(false) }}>
                 <span></span>   
            </div>

            <div className='menu_container'>
                <div className='menu_row'>
                    <h3>Services</h3>
                    <ul>
                        <li><NavLink to='/services/mobile-app'>Mobile Application Development</NavLink></li>
                        <li><NavLink to='/services/game-development'>Game Development Outsourcing</NavLink></li>
                        <li><NavLink to='/services/vr'>VR App Development</NavLink></li>
                        <li><NavLink to='/services/dedicated-dev'>Dedicated Developers</NavLink></li>
                        <li><NavLink to='/services/sdk-dev'>SDK Development</NavLink></li>
                    </ul>
                </div>

                <div className='menu_row'>
                    <h3>Technologies</h3>
                        <ul>
                            <li><NavLink to='/technologies/android'>Android</NavLink></li>
                            <li><NavLink to='/technologies/ios'>IOS</NavLink></li>
                            <li><NavLink to='/technologies/unity'>Unity</NavLink></li>
                        </ul>
                </div>
                
                <h3><NavLink to='/products'>PRODUCTS</NavLink></h3>
                <h3><NavLink to='/portfolio'>PORTFOLIO</NavLink></h3>
                <h3><NavLink to='/blog'>BLOG</NavLink></h3>

                <div className='menu_row'>
                    <h3>About Us</h3>
                        <ul>
                            <li><NavLink to='/about-us/team'>Team</NavLink></li>
                            <li><NavLink to='/about-us/contact-us'>Contact Us</NavLink></li>
                        </ul>
                </div>

                <div className='btn-contact' onClick={() => {
                    setVisibleCF(true)
                }}>contact us</div>

               
            </div>
        </div>
        
    )
}

export default MobileMenu