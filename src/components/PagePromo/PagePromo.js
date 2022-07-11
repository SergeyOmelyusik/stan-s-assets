import Socials from "../Socials/Socials"
import style from './PagePromo.module.css'

const PagePromo = (props) => {
    return(
        <div className={style.pagePromo}>
            <div className={style.container}>
                <div className={style.pagePromoTitle}>
                    <h2>{props.title}</h2>
                </div>
                <div className={style.pagePromoImage}>
                    <img src={require(`../../assets/images/${props.imagePath}`)} alt="" />
                </div>
                <Socials />
            </div>
        </div>
    )
}

export default PagePromo