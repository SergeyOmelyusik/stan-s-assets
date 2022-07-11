import style from './ArticleCard.module.css'
import { Link } from 'react-router-dom'
import { Rating } from '@mui/material'

const ArticleCard = (props) => {
    return (
            <div className={style.articleItem}>
                <div className={style.articleImage}>
                    <img src={require(`../../assets/images${props.imgPath}`)} alt="" />
                </div>
                <div className={style.articleInfo}>
                    <Rating name="read-only" value={props.rating} readOnly size='small' />
                    <div className={style.subinfo}>
                        <div className={style.readTime}>
                            <p>{props.readTime} read</p>
                        </div>
                        <div className={style.viewsCount}>
                            <p>{props.viewsCount} views</p>
                        </div>
                    </div>
                    <h3 className={style.articleTitle}><Link to={"/article/" + props.id +"/"}> {props.title} </Link></h3>
                    <p className={style.description}>
                        {props.text}
                    </p>
                    <div className={style.infoFooter}>
                        <div className={style.author}>
                            <div className={style.avatar}>
                                <img src={require(`../../assets/images${props.author.authorAvatar}`)} alt="" />
                            </div>
                            <p>By {props.author.authorName}</p>
                        </div>
                        <div className={style.publishedDate}>
                            <p>{props.published}</p>
                        </div>
                    </div>
                </div>
            </div>

        
    )
}

export default ArticleCard