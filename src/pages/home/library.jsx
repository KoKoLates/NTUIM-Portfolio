
import './library.css';
import { useState } from 'react';
import ImagesConfig from './config';


function Library() {
    // setup the original background
    const background = {
        background: '#f7f7f2',
        transition: '0.6s cubic-bezier(0, 0, 0.58, 1)'
    }

    const [color, setColor] = useState(background);
    const ImageContainer = ({ pose, image, color, text }) => {
        return (
            <div className='image-container' style={{ ...pose }}>
                <img src={image} alt="card"
                    onMouseEnter={() => setColor(color)} onMouseLeave={() => setColor(background)} />
                <div className='image-info-container'
                    onMouseEnter={() => setColor(color)} onMouseLeave={() => setColor(background)}>
                    <p>{text.year}</p><p>{text.description}</p>
                    <p className='image-info-title'>{text.title}</p>
                </div>
            </div>
        )
    }

    const ArrowBack = () => {
        return (
            <div className='arrow-container'>
                <div className='arrow-text'>
                    <span>Back</span>
                </div>
                <div className='arrow-image'>
                    <a href="#cover"><img src={require('../../images/arrow.png')} alt="arrow" /></a>
                </div>
            </div>
        )
    }

    return (
        <div className='library-container' style={color}>
            {
                ImagesConfig.map((config, index) => {
                    return <ImageContainer {...config} key={index} />
                })
            }
            <ArrowBack />
        </div>
    )
}

export default Library;
