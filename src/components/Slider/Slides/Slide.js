import './Slide.css';

const Slide = ({ title }) => {
    return (
        <div className="project-slide">
            <h3>{title}</h3>
        </div>
    );
}

export default Slide;