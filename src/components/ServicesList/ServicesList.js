import { NavLink } from 'react-router-dom'
import style from './ServicesList.module.css'
import mobileImage from './../../assets/images/services/icons/mobile.png'
import gameImage from './../../assets/images/services/icons/game.png'
import vrImage from './../../assets/images/services/icons/vr.png'
import developerImage from './../../assets/images/services/icons/developer.png'
import sdkImage from './../../assets/images/services/icons/sdk.png'
import sdk3dImage from './../../assets/images/services/icons/3d.png'
import arImage from './../../assets/images/services/icons/ar.png'

const ServicesList = () => {
    return (
        <section className={style.servicesList}>
            <div className={style.container}>
                <h2>Services</h2>
                <div className={style.servicesListWrapper}>

                    <div className={style.servicesListItem}>
                        <NavLink to='/services/mobile-app'>
                            <div className={style.image}>
                                <img src={mobileImage} alt="" />
                            </div>
                            <h3>Mobile Application Development</h3>
                        </NavLink>
                    </div>

                    <div className={style.servicesListItem}>
                        <NavLink to='/services/game-development'>
                            <div className={style.image}>
                                <img src={gameImage} alt="" />
                            </div>
                            <h3>Game development outsourcing</h3>
                        </NavLink>
                    </div>

                    <div className={style.servicesListItem}>
                        <NavLink to='/services/vr'>
                            <div className={style.image}>
                                <img src={vrImage} alt="" />
                            </div>
                            <h3>vr app development</h3>
                        </NavLink>
                    </div>

                    <div className={style.servicesListItem}>
                        <NavLink to='/services/dedicated-dev'>
                            <div className={style.image}>
                                <img src={developerImage} alt="" />
                            </div>
                            <h3>Dedicated Developers</h3>
                        </NavLink>
                    </div>

                    <div className={style.servicesListItem}>
                        <NavLink to='/services/sdk-dev'>
                            <div className={style.image}>
                                <img src={sdkImage} alt="" />
                            </div>
                            <h3>sdk development</h3>
                        </NavLink>
                    </div>

                    <div className={style.servicesListItem}>
                        <NavLink to='/services/sdk-modeling'>
                            <div className={style.image}>
                                <img src={sdk3dImage} alt="" />
                            </div>
                            <h3>sdk 3d modeling</h3>
                        </NavLink>
                    </div>

                    <div className={style.servicesListItem}>
                        <NavLink to='/services/ar-app'>
                            <div className={style.image}>
                                <img src={arImage} alt="" />
                            </div>
                            <h3>ar app development</h3>
                        </NavLink>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ServicesList