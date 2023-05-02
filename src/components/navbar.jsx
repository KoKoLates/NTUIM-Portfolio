
import './navbar.css'

function Navbar() {

    return (
        <div className='navbar-container'>
            <nav>
                <a href='#cover' className='navbar-options'>portfolio</a>
                <a href='#about' className='navbar-options'>about</a>
                <a href='https://www.behance.net/76b894a4' target='_blank' rel='noreferrer' className='navbar-options'>albums</a>
                <div className='navbar-social-container'>
                    <a href='#cover' className='navbar-options'>socials</a>
                    <div className='navbar-social-dropdown'>
                        <ul>
                            <li style={{ order: 1 }}><a href="https://www.facebook.com/profile.php?id=100004459629550s" target='_blank' rel='noreferrer'>Facebook</a></li>
                            <li style={{ order: 2 }}><a href="https://www.instagram.com/koko__0915" target='_blank' rel='noreferrer'>Instagram</a></li>
                            <li style={{ order: 3 }}><a href="https://github.com/KoKoLates" target='_blank' rel='noreferrer'>Github</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
