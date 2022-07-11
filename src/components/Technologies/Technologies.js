import style from './Technologies.module.css'
import apple from './../../assets/images/apple.png'
import unity from './../../assets/images/unity.png'
import android from './../../assets/images/android.png'
const Technologies = () => {
    return (
        <section className={style.technologies}>
            <div className={style.container}>
                <h3 className='section__title'>Technologies</h3>
                <p className={style.technologiesDesc}><span>Stan’s Assets</span>  is a team of developers that are committed to developing high quality and engaging entertainment software</p>
                <div className={style.imageBlock}>
                    <div className={style.imageItem}>
                        <img src={apple} alt="" />
                    </div>

                    <div className={style.imageItem}>
                        <img src={unity} alt="" />
                    </div>

                    <div className={style.imageItem}>
                        <img src={android} alt="" />
                    </div>
                </div>
                <p className={style.technologiesDesc}>Our engineers develop applications for the most popular platforms.</p>
                <div></div>
            </div>

        </section>
    )
}

export default Technologies