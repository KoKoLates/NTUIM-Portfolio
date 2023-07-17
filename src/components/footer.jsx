
import './footer.css'

const Footer = () => {
  /*
  const ContactButton = ({ text, reference }) => {
    return (
      <a href={reference} target='_blank'
        className='footer-interact-button button'
        rel='noreferrer' >
        <div className='footer-button'></div>
        <span>{text}</span>
      </a>
    )
  }
  */

  return (
    <div className="footer">
      <img src={require('../static/images/footer.png')} alt="" />
      {/* <div className='footer-container'>
        <ContactButton text={'Email'} reference={'mailto: the21515@gmail.com'} />
        <ContactButton text={'GitHub'} reference={'https://github.com/KoKoLates'} />
      </div> */}
    </div>
  )
}

export default Footer;
