import style from './AboutUs.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Loocking from '../../components/Loocking/Loocking'
import Contacts from '../../components/Contacts/Contacts'
import RecentProject from '../../components/RecentProject/RecentProject'
import PagePromo from '../../components/PagePromo/PagePromo'
import image1 from './../../assets/images/about-us/image1.png'
import image2 from './../../assets/images/about-us/image2.png'

const AboutUs = () => {
 
    return (
        <section className={style.aboutUsPage}>
            <Header color='white' /> 
            <PagePromo title='We are an outsourcing team focused on Games, VR, 3D, SDK, and Unity packages.' imagePath='about-us/promo.png' />

            <div className={style.container}>
                <div className={style.description}>
                    <div className={style.descriptionItem}>

                        <div className={style.image}>
                            <img src={image1} alt="" />
                        </div> 

                        <div className={style.text}>
                            <p>Stan's Assets were <b>founded in 2013</b> with the story of Stan, who worked at night after his main job and developed the <b>first Unity packages</b> . Later other developers who have shared Stan’s passion joined the company and became our co-founders.</p>
                            
                            <p>Hundreds of thousands of developers are using them in their development. That’s how we’ve understood we can really save developer’s time and help them become more effective at their job.</p>
                        </div>
 
                    </div>

                    <div className={style.descriptionItem}>

                        <div className={style.image}>
                                <img src={image2} alt="" />
                        </div>  
                        
                        <div className={style.text}>
                            <p>Thank for our plugins we became recognizible and started working with top worlknown companies like <b>Moon Studios, Roomful</b> and others.</p>

                            <p>Now our team has more than <b>15 developers</b> who create <b>games, VR spaces, mobile applications</b> for our clients.</p>

                            <h3>Our mission</h3>
                            <p>To create slick code that will be understandable to all developers who may work on a project after us and to make the developer's life easier with our plugin</p>
                        </div>

                    </div>

                </div>  
            </div>
            <Loocking />
            <Contacts />
            <RecentProject />
            <Footer />
        </section>
    )
}

export default AboutUs