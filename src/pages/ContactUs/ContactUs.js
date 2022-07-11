import style from './ContactUs.module.css'
import Header from '../../components/Header/Header'
import Loocking from '../../components/Loocking/Loocking'
import RecentProject from '../../components/RecentProject/RecentProject'
import Footer from '../../components/Footer/Footer'

const ContactUs = () => {
    return (
        <section className={style.contactsPage}>
            <Header color='white'/>
            <div className={style.container}>
                <div className={style.contactFormBlock}>
                    <div className={style.info}>
                        <h2>Contact us</h2>
                        <p>We are open for dialog and you are welcome to share your opinions or thoughts with us</p>

                    </div>

                    <div className={style.form}>
                        <p>Hit us up any time through email with any idea and help us turn your great ideas into brilliant projects</p>
                        <input type="text" placeholder='Name'/>
                        <input type="email" placeholder='Email'/>
                        <textarea placeholder='Message'></textarea>
                        <button type='submit' className={style.btnSubmit}>send request</button>
                    </div>
                </div>

                <div className={style.contactInfo}>
                    <div className={style.contactInfoRow}>
                        <p className={style.location}>Ukraine, Kyiv, Rodyny Kristeriv 20B, office 188</p>
                        <p className={style.phone}>+38 (093) 345 56 76</p>
                        <p className={style.whats}>+38 (093) 345 56 77</p>
                    </div>

                    <div className={style.contactInfoRow}>
                        <p className={style.skype}>Stanassets</p>
                        <p className={style.mail}>stanAssets@gmail.com</p>
                        <p className={style.facebook}>facebook.com/Stanassets</p>
                    </div>

                </div>
            </div>  
            <Loocking />
            <RecentProject />
            <Footer />
        </section>
    )
}

export default ContactUs