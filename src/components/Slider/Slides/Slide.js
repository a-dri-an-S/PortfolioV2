import './Slide.css';

const Slide = ({ title, img, info }) => {
    return (
        <div className="project-slide">
            <h3 className="project-slide-title">{title}</h3>
            <div className="project-slide-content">
                <img className="project-slide-img" src={img} alt={title} />
                <div className="project-slide-info">
                    {info}
                </div>
            </div>
        </div>
    );
}

export default Slide;