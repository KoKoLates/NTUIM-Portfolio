import './introduction.css';

const Introduction = () => {
    const RotateCard = ({ image }) => {
        return (
            <div className='image-card'>
                <img src={image} alt="introduction card" />
            </div>
        )
    };

    const Boundary = () => {
        return (
            <div>
                <img src={require('../../images/boundary.png')}
                    alt="section-boundary" style={{ width: '100vw' }} />
            </div>
        )
    };

    const images = [
        require('../../images/koko03.jpg'),
        require('../../images/koko02.jpg'),
        require('../../images/koko01.jpg')
    ];
    return (
        <div className="about" id="about">
            <div className='introduction-container'>
                <div className='introduction-text-container'>
                    <p>Hi, i'm KoKo. I am dedicated to capturing life's moments in 
                        their most authentic and beautiful form. Here is my Portfolio. 
                        Enjoy the beauty here.
                    </p>
                </div>
                <div className='introduction-image-container'>
                    {
                        images.map((image, index) => {
                            return <RotateCard key={index} image={image} />
                        })
                    }
                </div>
            </div>
            <Boundary />
        </div>
    );
}

export default Introduction;
