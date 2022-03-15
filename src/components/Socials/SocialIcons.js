import Github from '../../assets/Github.png';
import Linkedin from '../../assets/Linkedin.png'

import './SocialIcons.css';

const SocialIcons = () => {
    return (
        <div className="contact-social">
                    <div className="contact-social-link">
                        <a
                            href="https://github.com/a-dri-an-S"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="contact-social-icon round-icon"
                                src={Github}
                                alt="Github"
                            />
                        </a>
                    </div>
                    <div className="contact-social-link">
                        <a
                            href="https://www.linkedin.com/in/meet-adrian-salinas/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="contact-social-icon square-icon"
                                src={Linkedin}
                                alt="Linkedin"
                            />
                        </a>
                    </div>
                </div>
    );
}

export default SocialIcons;