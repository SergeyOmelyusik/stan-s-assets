import style from './Footer.module.css'
import logo from './../../assets/images/logos/footer_logo.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <section className={style.footer}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#194484" fillOpacity="1" d="M0,224L60,197.3C120,171,240,117,360,101.3C480,85,600,107,720,138.7C840,171,960,213,1080,208C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <div className={style.footerContent}>
                <div className={style.container}>
                    <div className={style.footerLogo}>
                        <a href=""><img src={logo} alt="" /></a>
                    </div>

                    <div className={style.footerNav}>
                        <div className={style.footerNavRow}>
                            <h3>Services</h3>
                            <ul>
                                <li><NavLink to='/services/mobile-app'>Mobile Application Development</NavLink></li>
                                <li><NavLink to='/services/game-development'>Game Development Outsourcing</NavLink></li>
                                <li><NavLink to='/services/vr'>VR App Development</NavLink></li>
                                <li><NavLink to='/services/dedicated-dev'>Dedicated Developers</NavLink></li>
                                <li><NavLink to='/services/sdk-dev'>SDK Development</NavLink></li>
                            </ul>
                        </div>

                        <div className={style.footerNavRow}>
                            <h3>Technologies</h3>
                            <ul>
                                <li><NavLink to='/technologies/android'>Android</NavLink></li>
                                <li><NavLink to='/technologies/ios'>IOS</NavLink></li>
                                <li><NavLink to='/technologies/unity'>Unity</NavLink></li>
                            </ul>
                        </div>

                        <div className={style.footerNavRow}>
                            <ul>
                                <li><NavLink to='/products'>PRODUCTS</NavLink></li>
                                <li><NavLink to='/portfolio'>PORTFOLIO</NavLink></li>
                                <li><NavLink to='/blog'>BLOG</NavLink></li>
                            </ul>
                        </div>

                        <div className={style.footerNavRow}>
                            <h3>About us</h3>
                            <ul>
                                <li><NavLink to='/about-us/team'>Team</NavLink></li>
                                <li><NavLink to='/about-us/contact-us'>Contact Us</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>       
        </section>
    )
}

export default Footer