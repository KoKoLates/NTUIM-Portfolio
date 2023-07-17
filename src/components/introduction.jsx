
import './introduction.css'
import { useEffect, useState } from 'react'

const Introduction = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll)
  }, []);

  const RotateImage = ({ image, scale, initiate }) => {
    let degree = offset;
    if (offset > 900) degree = 900;
    const styles = {
      transform: `rotate(${degree * scale - initiate}deg)`
    }
    return (
      <div className='image-card' style={styles}>
        <img src={image} alt="introduction" />
      </div>
    )
  }
  return (
    <div className="about" id="about">
      <div className='introduction-container'>
        <div className='introduction-text-container'>
          <p>
            Here, is Ko Ko. I love to capture my life's <br />
            momenet with more aesthetics form. Include <br />
            photograph, literature and graphic designs <br />
            Here is kind of my personal portfolio with that. <br />
            Hope you enjoy here! <br />
          </p>
        </div>
        <div className='introduction-image-container'>
          <RotateImage
            image={require('../static/images/koko03.jpg')}
            scale={0.01} initiate={15} />
          <RotateImage
            image={require('../static/images/koko02.jpg')}
            scale={0.015} initiate={5} />
          <RotateImage
            image={require('../static/images/koko01.jpg')}
            scale={0.02} initiate={-5} />
        </div>
      </div>
      <div className='introduction-image-boundary'>
        <img src={require('../static/images/boundary.png')}
          alt="section-boundary" />
      </div>
    </div>
  );
}

export default Introduction;
