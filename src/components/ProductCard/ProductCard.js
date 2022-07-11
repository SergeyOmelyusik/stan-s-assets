import style from './ProductCard.module.css'

const ProductCard = (props) => {
    return (
            <div className={style.productItem}>
                <div className={style.image}>
                    <img src={require(`../../assets/images${props.imgPath}`)} alt="" />
                </div>
                <div className={style.info}>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
    )
}

export default ProductCard