import { useEffect, useState } from "react"
import style from './ScrollToTop.module.css'


const ScrollToTop = () => {
    const [isVisible, setVisible] = useState(false)

    useEffect(()=> {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        });
    }, [])

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible ? (<div className={style.btnToTop} onClick={() => {
            goToTop();
        }}>
            <img src="../../assets/images/android.png" alt="" /> 
        </div>) : ''}
        </>
        
    )
}

export default ScrollToTop