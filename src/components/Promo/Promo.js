import style from './Promo.module.css'
import Header from '../Header/Header'
import Socials from '../Socials/Socials'
import { AppContext } from '../../App'
import { useContext } from 'react'

const Promo = () => {
    const {setVisibleCF} = useContext(AppContext)

    return (
        <div className={style.promo}>
            <Header />
            <div className="container">
                <div className={style.promoInfo}>
                    <Socials />
                    <h2>FOCUS ON THE PRODUCT AND LET US DO THE REST!</h2>
                   
                    <p className={style.promoText}>
                    We’re an Indian software development company focused on just one thing - offshore software development services. We have 16+ years of experience and a team of 450+ developers working efficiently to deliver unique solutions to start-ups, software development companies, enterprises, and digital agencies to simplify their IT outsourcing experience & reduce time/cost to market.
                    </p>
                    
                    <div className={style.btnBlock}>
                        <div className={style.btnMore}>More</div>
                        <div className={style.btnContact} onClick={() => { setVisibleCF(true) }}>Contact us</div>
                    </div>

                </div>
            </div>    
        </div>
    )
}

export default Promo