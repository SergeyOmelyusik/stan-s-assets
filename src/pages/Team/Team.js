import style from './Team.module.css'
import Header from '../../components/Header/Header'
import Loocking from '../../components/Loocking/Loocking'
import Contacts from '../../components/Contacts/Contacts'
import Footer from '../../components/Footer/Footer'
import RecentProject from '../../components/RecentProject/RecentProject'
import { teamData } from '../../data'

const Team = () => {
    return (
        <section className={style.teamPage}>
            <Header color='white'/>
            <div className={style.container}>
                <h2>Core Team</h2>
                <div className={style.teamList}>
                    <ul>
                        {teamData.map((item, id) => {
                            return (
                                <li className={style.teamItem}>
                                    <div className={style.photo}>
                                        <img src={require(`../../assets/images${item.photoPath}`)} alt="" />
                                    </div>
                                    <div className={style.info}>
                                        <h3>{item.name}</h3>
                                        <h4>{item.job}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>

                </div>
            </div>
            <Loocking />
            <Contacts />
            <RecentProject />
            <Footer />
        </section>
    )
}

export default Team