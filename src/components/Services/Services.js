import style from './Services.module.css'
import Image1 from './../../assets/images/services/game.png'
import Image2 from './../../assets/images/services/sdk.png'
import Image3 from './../../assets/images/services/3d.png'
import Image4 from './../../assets/images/services/vr.png'

const Services = () => {
    return (
        <section className={style.services}>
            <div className={style.container}>
                <h3 className='section__title'>Services</h3>
                
                <div className={style.servicesItem}>
                    <div className={style.description}>
                        <h3>GAME DEVELOPMENT</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dapibus purus, viverra porta velit. Nam eleifend, dolor a condimentum ullamcorper, ligula nunc elementum mi, et mollis odio ligula eu felis. Vestibulum a libero lorem. Nulla vestibulum id elit in ullamcorper. Fusce pellentesque tortor velit, eu rutrum nunc eleifend quis. Fusce dignissim, lectus ut tristique convallis, leo justo tempus erat, at volutpat arcu tellus eget sapien. Aliquam non ligula in ligula malesuada venenatis.
                        Fusce lacus felis, efficitur ut euismod ac, gravida sed tortor. Suspendisse vitae imperdiet elit, at viverra magna. Aenean ut libero ut arcu maximus faucibus ut ut sapien.</p>
                    </div>
                    <div className={style.image}>
                        <img src={Image1} alt="" />
                    </div>
                </div>

                <div className={style.servicesItem}>
                    <div className={style.description}>
                        <h3>SDK Development</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dapibus purus, viverra porta velit. Nam eleifend, dolor a condimentum ullamcorper, ligula nunc elementum mi, et mollis odio ligula eu felis. Vestibulum a libero lorem. Nulla vestibulum id elit in ullamcorper. Fusce pellentesque tortor velit, eu rutrum nunc eleifend quis. Fusce dignissim, lectus ut tristique convallis, leo justo tempus erat, at volutpat arcu tellus eget sapien. Aliquam non ligula in ligula malesuada venenatis.
                        Fusce lacus felis, efficitur ut euismod ac, gravida sed tortor. Suspendisse vitae imperdiet elit, at viverra magna. Aenean ut libero ut arcu maximus faucibus ut ut sapien.</p>
                    </div>
                    <div className={style.image}>
                        <img src={Image2} alt="" />
                    </div>
                </div>

                <div className={style.servicesItem}>
                    <div className={style.description}>
                        <h3>3D Modeling services</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dapibus purus, viverra porta velit. Nam eleifend, dolor a condimentum ullamcorper, ligula nunc elementum mi, et mollis odio ligula eu felis. Vestibulum a libero lorem. Nulla vestibulum id elit in ullamcorper. Fusce pellentesque tortor velit, eu rutrum nunc eleifend quis. Fusce dignissim, lectus ut tristique convallis, leo justo tempus erat, at volutpat arcu tellus eget sapien. Aliquam non ligula in ligula malesuada venenatis.
                        Fusce lacus felis, efficitur ut euismod ac, gravida sed tortor. Suspendisse vitae imperdiet elit, at viverra magna. Aenean ut libero ut arcu maximus faucibus ut ut sapien.</p>
                    </div>
                    <div className={style.image}>
                        <img src={Image3} alt="" />
                    </div>
                </div>

                <div className={style.servicesItem}>
                    <div className={style.description}>
                        <h3>VR App Development</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dapibus purus, viverra porta velit. Nam eleifend, dolor a condimentum ullamcorper, ligula nunc elementum mi, et mollis odio ligula eu felis. Vestibulum a libero lorem. Nulla vestibulum id elit in ullamcorper. Fusce pellentesque tortor velit, eu rutrum nunc eleifend quis. Fusce dignissim, lectus ut tristique convallis, leo justo tempus erat, at volutpat arcu tellus eget sapien. Aliquam non ligula in ligula malesuada venenatis.
                        Fusce lacus felis, efficitur ut euismod ac, gravida sed tortor. Suspendisse vitae imperdiet elit, at viverra magna. Aenean ut libero ut arcu maximus faucibus ut ut sapien.</p>
                    </div>
                    <div className={style.image}>
                        <img src={Image4} alt="" />
                    </div>
                </div>    
            </div>     
        </section>
    )
}

export default Services