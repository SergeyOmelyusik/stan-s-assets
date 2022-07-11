import style from './Article.module.css'
import { blogData } from '../../data'
import { useParams } from "react-router-dom"
import { Rating} from '@mui/material'
import MRating from '../../components/MRating/MRating'
import Header from '../../components/Header/Header'
import Socials from '../../components/Socials/Socials'
import Loocking from '../../components/Loocking/Loocking'
import Footer from '../../components/Footer/Footer'

const Article = () => {
    let params = useParams()
    const id = params.id
    const articleInfo = blogData.find(item => item.id === +id)

    return (
            <section className={style.articlePage}>
                <Header color='white'/>
                <Socials />
                <div className={style.container}>
                    <h2 className={style.articleTitle}>{articleInfo.title}</h2>
                    <div className={style.article}>
                        <div className={style.subinfo}>
                            <Rating name="read-only" value={articleInfo.rating} readOnly />
                           
                            <div className={style.readTime}>
                                <p>{articleInfo.readTime} read</p>
                            </div>
                            <div className={style.viewsCount}>
                                <p>{articleInfo.viewsCount} views</p>
                            </div>
                        </div>

                        <div className={style.articleBoard}>
                            <img src={require(`../../assets/images${articleInfo.boardPath}`)} alt="" />
                        </div>
                    </div>

                    <div className={style.publishedInfo}>
                        <div className={style.author}>
                            <div className={style.authorAvatar}>
                                <img src={require(`../../assets/images/blog/authorMin.png`)} alt="" />
                            </div>
                            <p>{articleInfo.author.authorName}</p>
                        </div>
                        <div className={style.publishedDate}>
                            <p>{articleInfo.published}</p>
                        </div>
                    </div>

                    <div className={style.articleText}>
                        <p>
                            {articleInfo.text}
                        </p>
                    </div>

                    <MRating title={'How helpful was this article?'} />
                    
                    <div className={style.authorBlock}>
                        <h3>About the author</h3>
                        <div className={style.aboutAuthor}>
                            <div className={style.photo}>
                                <img src={require(`../../assets/images${articleInfo.author.authorPhoto}`)} alt="" />
                            </div>
                            <div className={style.info}>
                                <h4>{articleInfo.author.authorName}</h4>
                                <p className={style.authorWork}>{articleInfo.author.authorWork}</p>
                                <div className={style.description}>
                                    {articleInfo.author.authorDesc}
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <Loocking /> 
                <Footer />         
            </section>
    )
}

export default Article