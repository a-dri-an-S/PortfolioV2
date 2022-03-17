import './Slide.css';

const Slide = ({ title, img, tech, details, repoUrl, liveUrl }) => {
    return (
        <div className="slide">
            <div className="slide-content">
                <div className="slide-content-left">
                    <div className="slide-img-container">
                        <img className="slide-img" src={img} alt={title} />
                    </div>
                    <div className="slide-info">
                        {tech}
                    </div>
                </div>
                <div className="slide-content-right">
                    <h3 className="slide-title">{title}</h3>
                    <div className="slide-title-underline">.</div>
                    {details}
                </div>
            </div>
            <div className="slide-links">
                <a
                    className="slide-link"
                    href={repoUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    <button className="slide-link-btn">
                        Code
                    </button>
                </a>
                <a
                    className="slide-link"
                    href={liveUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    <button className="slide-link-btn">
                        Live
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Slide;