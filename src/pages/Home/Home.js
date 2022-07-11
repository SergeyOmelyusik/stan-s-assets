import style from './Home.module.css'
import Promo from "../../components/Promo/Promo"
import Technologies from '../../components/Technologies/Technologies'
import Services from '../../components/Services/Services'
import Loocking from '../../components/Loocking/Loocking'
import Achievements from '../../components/Achievements/Achievements'
import Partners from '../../components/Partners/Partners'
import Contacts from '../../components/Contacts/Contacts'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <section className={style.homePage}>
            <Promo />
            <div className={style.container}>
                <p className={style.description}>
                We’re an Indian software development company focused on just one thing - offshore software development services. We have 16+ years of experience and a team of 450+ developers working efficiently to deliver unique solutions to start-ups, software development companies, enterprises, and digital agencies to simplify their IT outsourcing experience & reduce time/cost to market.
                </p>
            </div>
            
            <Technologies />
            <Services />
            <Loocking />
            <Achievements />
            <Partners />
            <Contacts />
            <Footer />
        </section>
    )
}

export default Home