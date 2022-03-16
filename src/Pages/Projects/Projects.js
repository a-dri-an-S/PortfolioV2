import Slider from "../../components/Slider/Slider";
import './Projects.css';  

const Portfolio = () => {
    return (
        <section className="projects">
            <div className="projects-container">
                <h2 className="projects-title">Projects</h2>
                <Slider />
            </div>
        </section>
    );
}

export default Portfolio;