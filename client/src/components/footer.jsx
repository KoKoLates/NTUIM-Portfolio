
import './footer.css'
import { useState } from 'react'

const Footer = () => {
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

  const CommentButton = () => {
    const [buttonClick, setButtonClick] = useState(false);
    const [text, setText] = useState({ name: '' });
    const handleClick = () => {
      if (!buttonClick) {
        setButtonClick(true);
      }
    }

    const handleChange = (event) => {
      setText({ contents: event.target.value })
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      try {
        fetch("http://localhost:5000/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(text),
        });
      } catch (err) {
        console.error()
      }
      document.getElementById('input-bar').value = '';
    }
    return (
      <div className='comment-container' onClick={handleClick} style={{ 'background': 'none' }}>
        {buttonClick === true &&
          <div className='input-container'>
            <form onSubmit={handleSubmit}>
              <div><input type="text" className="search-input"
                placeholder="comment" onChange={handleChange} id='input-bar' /></div>
            </form>
            <div className='cancel-btn' onClick={() => setButtonClick(false)}>x</div>
          </div>
        }
        {buttonClick === false &&
          <div target='_blank'
            className='footer-interact-button button'
            rel='noreferrer' style={{ 'background': 'none' }}>
            <div className='footer-button'></div>
            <span>Comment</span>
          </div>
        }
      </div>
    )
  }

  return (
    <div className="footer" id='footer'>
      <img src={require('../static/images/footer.png')} alt="" />
      <div className='footer-container'>
        <ContactButton text={'Email'} reference={'mailto: the21515@gmail.com'} />
        <ContactButton text={'GitHub'} reference={'https://github.com/KoKoLates'} />
        <CommentButton />
      </div>
    </div>
  )
}

export default Footer;
