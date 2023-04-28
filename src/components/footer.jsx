
import './footer.css';
import image from '../images/footer.jpg';

function Footer() {
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
                <a className='footer-interact-button' href="#cover">
                    <div className='footer-button'>
                        <span>CONTACT</span>
                    </div>
                </a>
            </div>
        </footer>
    )
}

export default Footer;