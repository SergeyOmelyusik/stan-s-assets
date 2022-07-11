import style from './NotFound.module.css'
import Header from '../../components/Header/Header'
import Loocking from '../../components/Loocking/Loocking'
import Contacts from '../../components/Contacts/Contacts'
import Footer from '../../components/Footer/Footer'
import image from '../../assets/images/404.png'
import { NavLink } from 'react-router-dom'


const NotFound = () => {
    return (
        <section className={style.notFoundPage}>
            <Header color='white' />
            <div className={style.container}>
                <div className={style.imageBlock}>
                </div>

                <div className={style.btnBlock}>
                    <h2>it looks like you are lost</h2>
                    <NavLink to={'/'} className={style.btnHome}>return to homepage</NavLink>
                </div>
            </div>
        
            <Loocking />
            <Contacts />
            <Footer />
        </section>
        
    )
}

export default NotFound