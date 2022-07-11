import style from './Contacts.module.css'

const Contacts = () => {
    return (
        <section className={style.contacts}>

            <div className={style.container}>
                
                <h3 className='section__title'>Contacts</h3>
                <h4>We are open for dialog and you are welcome to share your opinions or thoughts with us</h4>
                <p className={style.description}>Hit us up any time through email with any idea and help us turn your great ideas into brilliant projects</p>
                
                <div className={style.contactsBlock}>
                    <div className={style.contactsInfo}>
                        <p className={style.contactsLine}>Ukraine, Kyiv, Rodyny Kristeriv 20B, office 188</p>
                        <p className={style.contactsLine}>+38 (093) 345 56 76</p>
                        <p className={style.contactsLine}>+38 (093) 345 56 77</p>
                        <p className={style.contactsLine}>Stanassets</p>
                        <p className={style.contactsLine}>stanAssets@gmail.com</p>
                        <p className={style.contactsLine}>facebook.com/Stanassets</p>
                    </div>

                    <div className={style.contactsFormWrapper}>

                        <div className={style.contactsForm}>
                            <input type="text" placeholder='Name' />
                            <input type="email" placeholder='E-mail'/>
                            <textarea placeholder='Message'></textarea>
                            <button className={style.btnSend}>Send request</button>
                        </div>
                    </div>
                </div>
            </div>
           
        </section>
    )
}

export default Contacts