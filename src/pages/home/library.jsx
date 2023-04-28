
import './library.css';
import images from "../../images/image";

function Library() {
    return (
        <div className="library-container">
            {
                images.map((image, idx) => {
                    return ImageCardContainer(image, idx);
                })
            }
        </div>
    )
}

function ImageCardContainer(image, idx) {

    return (
        <div key={idx}>
            <img src={image} alt="" />
        </div>
    )
}

export default Library;