
import './footer.css';
import { useRef } from 'react';
import image from '../images/footer.jpg';

function Footer() {
    const link = 'https://github.com/KoKoLates';

    return (
        <footer className='footer-container'>
            <div className='footer-image-container'>
                <img src={image} alt="footer" />
            </div>
            <div className='footer-interact-container'>
                <div className='footer-interact-text'>
                    <span>
                        about any big things <br />
                        here to contact
                    </span>
                </div>
                <div className='test'>
                    <ContactButton reff={link} name='CONTACT' />
                    {/* <ContactButton /> */}
                </div>
            </div>
        </footer>
    )
}

const ContactButton = (props) => {
    const {reff, name} = props;
    return (
        <a className='footer-interact-button button' href={reff} target='_blank'>
            <div className='footer-button'></div>
            <span>{name}</span>
        </a>
    )
}

export default Footer;
