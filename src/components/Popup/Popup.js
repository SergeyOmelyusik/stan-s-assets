import './Popup.css'

const Popup = ({active, setActive, children}) => {
    return(
        <div className={active ? 'popup-modal active' : 'popup-modal'} onClick={() => {
            setActive(false)
        }}>

            <div className={active ? 'popup-content active' : 'popup-content'} onClick={(e) => e.stopPropagation() }>
                {children}
            </div>

        </div>
    )
}

export default Popup