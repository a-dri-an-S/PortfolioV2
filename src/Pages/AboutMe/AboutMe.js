import BGCard from '../../components/Cards/BGCard';
import SkillsCard from '../../components/Cards/SkillsCard';
import DocsCard from '../../components/Cards/DocsCard';

import './AboutMe.css';

const AboutMe = () => {
    return (
        <section className="about-me">
            <div className="about-me-container">
                <div className="about-me-cards">
                    <div className="about-me-card-container">
                        <h2 className="about-me-card-title">
                            Background
                        </h2>
                        <div className="about-me-card">
                            <BGCard />
                        </div>
                    </div>
                    <div className="about-me-card-container">
                        <h2 className="about-me-card-title">
                            Skills
                        </h2>
                        <div className="about-me-card">   
                            <SkillsCard />
                        </div>
                    </div>
                    <div className="about-me-card-container">
                        <h2 className="about-me-card-title">
                            Documents
                        </h2>
                        <div className="about-me-card">
                            <DocsCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;