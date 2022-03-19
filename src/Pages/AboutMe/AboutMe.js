import BGCard from '../../components/Cards/BGCard';
import SkillsCard from '../../components/Cards/SkillsCard';
import DocsCard from '../../components/Cards/DocsCard';

import './AboutMe.css';

const AboutMe = () => {
    return (
        <section className="about-me">
            <div className="about-me-container">
                <h1 className="about-me-title">
                    About Me
                </h1>
                <div className="about-me-cards">
                    <div className="about-me-cards-container top-container">
                        <div className="about-me-card-container top">
                            <h2 className="about-me-card-title">
                                Background
                            </h2>
                            <div className="about-me-card card-tall">
                                <BGCard />
                            </div>
                        </div>
                        <div className="about-me-card-container top">
                            <h2 className="about-me-card-title">
                                Skills
                            </h2>
                            <div className="about-me-card card-tall">
                                <SkillsCard />
                            </div>
                        </div>
                    </div>
                    <div className="about-me-cards-container bottom-container">
                        <div className="about-me-card-container bottom">
                            <div className="about-me-card card-wide">
                                <DocsCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;