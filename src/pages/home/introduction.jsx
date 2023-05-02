import './introduction.css';
import cover01 from '../../images/koko03.jpg';
import cover02 from '../../images/koko02.jpg';
import cover03 from '../../images/koko01.jpg';
import boundary from '../../images/boundary.png';

function Introduction() {
    return (
        <div className="about" id="about">
            <div className='introduction-container'>
                <div className='introduction-text-container'>
                    <p>here is the context and will be
                        modified later. and i will give some
                        introduction here.</p>
                </div>
                <div className='introduction-image-container'>
                    <RotateCard image={cover01} />
                    <RotateCard image={cover02} />
                    <RotateCard image={cover03} />
                </div>
            </div>
            <Boundary />
        </div>
    )
}

const RotateCard = ({ image }) => {
    return (
        <div className='image-card'>
            <img src={image} alt="introduction card" />
        </div>
    )
}

const Boundary = () => {
    return (
        <div>
            <img src={boundary} alt="section-boundary"
                style={{ width: '100vw' }} />
        </div>
    )
}

export default Introduction;