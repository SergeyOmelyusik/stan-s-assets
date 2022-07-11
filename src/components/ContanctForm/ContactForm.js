import './ContactForm.css'

const ContactForm = () => {
    return (
        <div className='contact-form'>
            <div className='info'>
                <p className='contacts-line'>Ukraine, Kyiv, Rodyny Kristeriv 20B, office 188</p>
                <p className='contacts-line'>+38 (093) 345 56 76</p>
                <p className='contacts-line'>+38 (093) 345 56 77</p>
                <p className='contacts-line'>Stanassets</p>
                <p className='contacts-line'>stanAssets@gmail.com</p>
                <p className='contacts-line'>facebook.com/Stanassets</p>
            </div>
            <div className='form'>
                <h2>Want to contact us?</h2>
                <div>
                    <input type="text"  placeholder='Your name'/>
                    <input type="email" placeholder='Your email'/>
                    <textarea placeholder='Your message'></textarea>
                    <button type='submit' className='btn__send'>Send request</button>
                </div>
            </div>               
        </div>
    )
}

export default ContactForm