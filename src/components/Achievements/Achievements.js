import style from './Achievements.module.css'

const Achievements = () => {
    return (
        <section className={style.achievements}>
            <div className={style.container}>
                <h3 className='section__title'>Achievements</h3>
                <div className={style.achievementsList}>

                    <div className={style.achievementsItem}>
                        <p>Collaboration with <span>Moon Studios</span> on WotW AAA Unity game.</p>
                    </div>

                    <div className={style.achievementsItem}>
                        <p><span>50+</span> successfully launched projects on the the market.</p>
                    </div>

                    <div className={style.achievementsItem}>
                        <p>Asset store publisher since <span>2013</span></p>
                    </div>

                    <div className={style.achievementsItem}>
                        <p>Our products (packages) used by <span>100k+</span> devs in <span>5k+</span> commercial projects worldwide</p>
                    </div>
                    
                </div>
                
            </div>
           
        </section>
    )
}

export default Achievements