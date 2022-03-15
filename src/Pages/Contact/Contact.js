import Form from '../../components/Form/Form';
import Socials from '../../components/Socials/SocialIcons';
import Footer from '../../components/Footer/Footer';

import './Contact.css';

const AboutMe = () => {

    return (
        <section className="contact">
            <div className="contact-container">
                <h2 className="contact-title">Contact</h2>
                <div className="contact-form">
                    <Form />
                </div>
                <Socials />
            </div>
            <div className="contact-footer">
                <Footer />
            </div>
        </section>
    );
}

export default AboutMe;