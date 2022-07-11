import style from './DedicatedDev.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Loocking from '../../components/Loocking/Loocking'
import Contacts from '../../components/Contacts/Contacts'
import ServicesList from '../../components/ServicesList/ServicesList'
import RecentProject from '../../components/RecentProject/RecentProject'
import PagePromo from '../../components/PagePromo/PagePromo'

const DedicatedDev = () => {

    return (
        <section className={style.vrAppPage}>
            <Header color='white'/> 
            <PagePromo title='Dedicated Developers' imagePath='services/promo/dev.png' />

            <div className={style.pageDescription}>
                <div className={style.container}>
                    <div className={style.pageDescriptionItem}>
                        <h3>Header 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit et quas aliquid maiores aspernatur ipsa, ut veniam voluptas quaerat explicabo necessitatibus quia reiciendis, eos odio dolore minima illo numquam? Odio id tempora vel facere ipsum. Nemo nostrum dolor ea nihil?</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur delectus corrupti animi eligendi qui error. Facere dolores cum vel placeat.</p>
                    </div>
                    <div className={style.pageDescriptionItem}>
                        <h3>Header 2</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit et quas aliquid maiores aspernatur ipsa, ut veniam voluptas quaerat explicabo necessitatibus quia reiciendis, eos odio dolore minima illo numquam? Odio id tempora vel facere ipsum. Nemo nostrum dolor ea nihil?</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur delectus corrupti animi eligendi qui error. Facere dolores cum vel placeat.</p>
                    </div>
                </div>
            </div>
            <ServicesList />
            <Loocking />
            <Contacts />
            <RecentProject />
            <Footer />
        </section>
    )
}

export default DedicatedDev