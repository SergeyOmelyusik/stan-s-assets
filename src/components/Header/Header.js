import style from './Header.module.css'
import Nav from '../Nav/Nav'
import logo from './../../assets/images/logos/logo-white.png'
import logoBlack from '../../assets/images/logos/logo-black.png'
import { useContext } from 'react'
import { AppContext } from '../../App'

const Header = (props) => {
    const {isVisibleCF, setVisibleCF} = useContext(AppContext);
    const {isVisibleMM, setVisibleMM} = useContext(AppContext);

        return (
        <header className={style.header} style={{backgroundColor: props.background}}>
            <div className={style.wrapper}>
                <div className={style.logo}>
                    { props.color === 'white' ? <a href="/"><img src={logoBlack} alt="assets" /></a> :
                    <a href="/"><img src={logo} alt="assets" /></a> }   
                </div>
                { props.color === 'white' ? 
                <>
                    <Nav color='#0D6EB7'/>
                    <div className={style.btnContact} style={{color: '#06B25F', border: '2px solid #06B25F'}} onClick={() => {
                    setVisibleCF(!isVisibleCF)
                    }}>
                        Contact us
                    </div>

                    <div className={style.menuBurger} onClick={() => {
                        setVisibleMM(true)
                    }}>
                        <span className={style.btnMenu}></span>
                    </div>
                </>
                : 
                <>
                    <Nav color='#fff'/>
                    <div className={style.btnContact} onClick={() => {
                    setVisibleCF(!isVisibleCF)
                    }} >
                        Contact us
                    </div>

                    <div className={style.menuBurger} onClick={() => {
                        setVisibleMM(true)
                    }}>
                        <span className={style.btnMenu}></span>
                    </div>
                </> } 
                
                
            </div>
            
        </header>
    )
}

export default Header