import './introduction.css';
import images from '../../images/image';
import boundary from '../../images/boundary.png';

function Introduction() {

    return (
        <div>
            <div className="about" id="about">
                <div className="introduction-text-continer">
                    <span className="introductio-text">
                        HELLO, I'M KO KO. I'M STUDENT MAJOR IN <br />
                        BIOMECHATRONICS ENGINEERING. AND HERE IS MY <br />
                        PHOTOGRAPHY WEBISTE. ENJOY YOURSELF HERE.
                    </span>
                </div>
                <div className="introduction-images-container">
                    {
                        images.map((image, idx) => {
                            return <div key={idx}><img src={image} alt="introduction photos" /></div>
                        })
                    }
                </div>
            </div>
            <img className='section-boundary-image' src={boundary} alt="section-boundary" style={{ width: '100vw' }} />
        </div>
    )
}

export default Introduction;