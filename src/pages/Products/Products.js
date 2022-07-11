import style from './Products.module.css'
import Header from '../../components/Header/Header'
import PagePromo from '../../components/PagePromo/PagePromo'
import ProductCard from '../../components/ProductCard/ProductCard'
import Loocking from '../../components/Loocking/Loocking'
import Contacts from '../../components/Contacts/Contacts'
import Footer from '../../components/Footer/Footer'
import { productsData } from '../../data'

const Products = () => {

    return(
        <section className={style.productsPage}>
            <Header color='white'/> 
            <PagePromo title='Stan Assets Products' imagePath='products/products.png' />

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f5f9ff" fill-opacity="1" d="M0,0L80,32C160,64,320,128,480,138.7C640,149,800,107,960,101.3C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            
            <div className={style.productsList}>
                <div className={style.container}>

                    {productsData.map((product) => {
                        return (
                            <ProductCard key={product.id} {...product} />
                        )
                    })
                    }
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f5f9ff" fill-opacity="1" d="M0,160L80,176C160,192,320,224,480,229.3C640,235,800,213,960,208C1120,203,1280,213,1360,218.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>

            <Loocking />
            <Contacts />
            <Footer />

        </section>
    )
}

export default Products