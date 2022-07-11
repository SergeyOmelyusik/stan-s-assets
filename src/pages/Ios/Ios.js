import style from './Ios.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Loocking from '../../components/Loocking/Loocking'
import Contacts from '../../components/Contacts/Contacts'
import ServicesList from '../../components/ServicesList/ServicesList'
import RecentProject from '../../components/RecentProject/RecentProject'
import PagePromo from '../../components/PagePromo/PagePromo'
import { iosFaqsData } from '../../data'
import SimpleAccordion from '../../components/ControlledAccordions/ControlledAccordions'
import QuestionsList from '../../components/QuestionsList/QuestionsList'

const Ios = () => {

    return (
        <section className={style.iosPage}>
            <Header color='white'/> 
            <PagePromo title='Ios technologies' imagePath='technologies/ios.png' />

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
            <Contacts />
            <RecentProject />
            <div className={style.container}>
                <div className={style.faqsBlock}>
                    <h2>Faq's</h2>

                    <QuestionsList data={iosFaqsData} />

                    <SimpleAccordion data={iosFaqsData}/>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Ios