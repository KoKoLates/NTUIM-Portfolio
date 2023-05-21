
import './library.css';
import { useState, useEffect } from 'react';
import ImagesConfig from './config';


function Library() {
    // setup the original background
    const background = {
        background: '#f7f7f2',
        transition: '0.6s cubic-bezier(0, 0, 0.58, 1)'
    }

    const [offset, setOffset] = useState(0);
    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll)
    }, []);

    const [color, setColor] = useState(background);
    const ImageContainer = ({ pose, image, color, text }) => {
        const styles = {
            ...pose,
            transform: `translateY(${offset - 900 ? offset < 1000 : 0}px`
        }

        return (
            <div className='image-container' style={styles}>
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

    return (
        <div className='library-container' style={color}>
            {
                ImagesConfig.map((config, index) => {
                    return <ImageContainer {...config} key={index} />
                })
            }
        </div>
    )
}

export default Library;
