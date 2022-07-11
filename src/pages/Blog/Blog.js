import style from './Blog.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import { blogData } from '../../data'

const Blog = () => {

    return(
        <section className={style.blogPage}>
            <Header color='white'/> 
            <div className={style.container}>
                <h2>Blog</h2>
                <div className={style.articleList}>
                    {blogData.map((article) => {
                            return (
                                <ArticleCard key={article.id} {...article} />
                            )
                    })
                    }
                </div>  
            </div>
            <Footer />
        </section>
    )
}

export default Blog