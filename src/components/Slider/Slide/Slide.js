import './Slide.css';

const Slide = ({ title, img, tech, details }) => {
    return (
        <div className="slide">
            <h3 className="slide-title">{title}</h3>
            <div className="slide-content">
                <div className="slide-content-left">
                    <img className="slide-img" src={img} alt={title} />
                    <div className="slide-info">
                        {tech}
                    </div>
                </div>
                <div className="slide-content-right">
                    {details}
                </div>
            </div>
            <div className="slide-links">
                <a href="https://www.hello.com">Code</a>
                <a href="https://www.hello.com">Live</a>
            </div>
        </div>
    );
}

export default Slide;