import Slider from "../../components/Slider/Slider";
import './Projects.css';  

const Portfolio = () => {
    return (
        <section className="projects">
            <div className="projects-container">
                <h1 className="projects-title">Projects</h1>
                <Slider />
            </div>
        </section>
    );
}

export default Portfolio;