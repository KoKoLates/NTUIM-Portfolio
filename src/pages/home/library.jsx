
import './library.css';
import images from "../../images/image";

function Library() {
    const i = images[0];
    const m = images[1]
    return (
        <div className="library-container">
            <ImageContainer image={i} year='2020' text='test images' />
            <ImageContainer image={m} year='2020' text='test images' />
        </div>
    )
}

const ImageContainer = (props) => {
    const {image, year, text} = props;

    return (
        <div className='image-container'>
            <img src={image} alt="" className='is-inview' />
            <div className='image-info-container'>
                <p>{year}</p>
                <p>{text}</p>
                <p className='image-info-title'>Testing</p>
            </div>
        </div>
    )
}

export default Library;