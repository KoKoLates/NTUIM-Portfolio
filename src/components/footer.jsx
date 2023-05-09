
import './footer.css';

function Footer() {
    const info = [
        {
            tag: 'contact',
            refe: 'mailto: the21515@gmail.com'
        }, 
        {
            tag: 'source',
            refe: 'https://github.com/KoKoLates/NTUIM-portfolio/tree/react-develop'
        }
    ]

    const ContactButton = ({ tag, refe }) => {
        return (
            <a className='footer-interact-button button' href={refe} target='_blank' rel="noreferrer">
                <div className='footer-button'></div>
                <span>{tag}</span>
            </a>
        )
    }

    return (
        <footer className='footer'>
            <div className='footer-container'>s
                {
                    info.map((i, index) => {
                        return <ContactButton {...i} key={index} />
                    })
                }
            </div>
        </footer >
    )
}

export default Footer;
