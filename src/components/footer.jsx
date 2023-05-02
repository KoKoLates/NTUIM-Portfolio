
import './footer.css';

function Footer() {

    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-text-container'>
                    <span>
                        about any big things <br />
                        here to contact
                    </span>
                </div>
                <div className='button-block'>
                    <a className='footer-interact-button button' href='https://github.com/KoKoLates' target='_blank' rel="noreferrer">
                        <div className='footer-button'></div>
                        <span>contract</span>
                    </a>
                    <a className='footer-interact-button button' href='https://github.com/KoKoLates' target='_blank' rel="noreferrer">
                        <div className='footer-button'></div>
                        <span>contract</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
