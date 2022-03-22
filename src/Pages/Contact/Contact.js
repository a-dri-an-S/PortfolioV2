import Form from '../../components/Form/Form';
import Socials from '../../components/Socials/SocialIcons';
import Footer from '../../components/Footer/Footer';

import './Contact.css';

const AboutMe = () => {

    return (
        <section className="contact">
            <div className="contact-container">
                <h1 className="contact-title">Contact</h1>
                <div className="contact-form">
                    <Form />
                </div>
                <Socials />
            </div>
                <Footer />
        </section>
    );
}

export default AboutMe;