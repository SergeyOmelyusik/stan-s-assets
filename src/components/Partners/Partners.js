import style from './Partners.module.css'
import logo1 from './../../assets/images/partners/image 39.png'
import logo2 from './../../assets/images/partners/image 40.png'
import logo3 from './../../assets/images/partners/image 41.png'
import logo4 from './../../assets/images/partners/image 42.png'
import logo5 from './../../assets/images/partners/image 43.png'
import logo6 from './../../assets/images/partners/image 44.png'
import logo7 from './../../assets/images/partners/image 45.png'
import logo8 from './../../assets/images/partners/image 46.png'
import logo9 from './../../assets/images/partners/image 47.png'
import logo10 from './../../assets/images/partners/image 48.png'
import logo11 from './../../assets/images/partners/image 49.png'
import logo12 from './../../assets/images/partners/image 51.png'
import logo13 from './../../assets/images/partners/image 52.png'

const Partners = () => {
    return (
        <section className={style.partners}>
            <div className={style.container}>
                <h3 className='section__title'>Partners</h3>

                <div className={style.partnersList}>

                    <div className={style.partnersItem}>
                        <img src={logo1} alt="" />
                    </div>

                    <div className={style.partnersItem}>
                        <img src={logo2} alt="" />
                    </div>

                    <div className={style.partnersItem}>
                        <img src={logo3} alt="" />
                    </div>

                    <div className={style.partnersItem}>
                        <img src={logo4} alt="" />
                    </div>

                    <div className={style.partnersItem}>
                        <img src={logo5} alt="" />
                    </div>

                    <div className={style.partnersItem}>
                        <img src={logo6} alt="" />
                    </div>

                    <div className={style.partnersItem}>
                        <img src={logo7} alt="" />
                    </div>

                    <div className={style.partnersItem}>
                        <img src={logo8} alt="" />
                    </div>

                    <div className={style.partnersItem}>
                        <img src={logo9} alt="" />
                    </div>

                    <div className={style.partnersItem}>
                        <img src={logo10} alt="" />
                    </div>

                    <div className={style.partnersItem}>
                        <img src={logo11} alt="" />
                    </div>

                    <div className={style.partnersItem}>
                        <img src={logo12} alt="" />
                    </div>

                    <div className={style.partnersItem}>
                        <img src={logo13} alt="" />
                    </div>
                    
                </div>
                
            </div>

        </section>
    )
}

export default Partners