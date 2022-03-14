import Footer from '../../components/Footer/Footer';
import Github from '../../assets/Github.png';
import Linkedin from '../../assets/Linkedin.png'
import './Contact.css';

const AboutMe = () => {

    return (
        <section className="contact">
            <div className="contact-container">
                <div className="contact-form">

                </div>
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
                            className="contact-social-link"
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
            </div>
            <div className="contact-footer">
                <Footer />
            </div>
        </section>
    );
}

export default AboutMe;