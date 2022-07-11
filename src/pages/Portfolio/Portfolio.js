import style from './Portfolio.module.css'
import Header from '../../components/Header/Header'
import PagePromo from '../../components/PagePromo/PagePromo'
import Loocking from '../../components/Loocking/Loocking'
import Contacts from '../../components/Contacts/Contacts'
import Footer from '../../components/Footer/Footer'
import { portfolioData } from '../../data'

const Portfolio = () => {

    return(
        <section className={style.portfolioPage}>
            <Header color='white'/> 
            <PagePromo title='Stan Assets Portfolio' imagePath='portfolio/portfolio.png' />

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#f5f9ff" fillOpacity="1" d="M0,64L80,58.7C160,53,320,43,480,42.7C640,43,800,53,960,48C1120,43,1280,21,1360,10.7L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            
            <div className={style.portfolioList}>
                <div className={style.container}>
                    {portfolioData.map(item => {
                        return(
                            <div className={style.portfolioItem} key={item.id}>
                                <div className={style.image}>
                                    <img src={require(`../../assets/images${item.imgPath}`)} alt="" />
                                </div>

                                <div className={style.description}>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                                
                            </div>
                        )
                    })}
                   
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#f5f9ff" fillOpacity="1" d="M0,160L80,176C160,192,320,224,480,229.3C640,235,800,213,960,208C1120,203,1280,213,1360,218.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>

            <Loocking />
            <Contacts />
            <Footer />

        </section>
    )
}

export default Portfolio