import { useState } from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Button from '../Button/Button';
import './Form.css';


const contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
};

const Form = () => {

    const [form, setForm] = useState(contactForm);

    const handleNameChange = (e) => {
        setForm(form => ({
            ...form, 
            name: e.target.value
        }))
    }
    const handleEmailChange = (e) => {
        setForm(form => ({
            ...form, 
            email: e.target.value
        }))
    }
    const handleSubjectChange = (e) => {
        setForm(form => ({
            ...form, 
            subject: e.target.value
        }))
    }
    const handleMessageChange = (e) => {
        setForm(form => ({
            ...form, 
            message: e.target.value
        }))
    }

    return (
        <form className="form">
            <div className="form-inputs">
                <Input
                    name="name"
                    label="Name"
                    type="text"
                    value={form.name}
                    handleChange={handleNameChange}
                />
                <Input
                    name="email"
                    label="Email Address"
                    type="email"
                    value={form.email}
                    handleChange={handleEmailChange}
                />
            </div>
            <Input
                name="subject"
                label="Subject"
                type="text"
                value={form.subject}
                handleChange={handleSubjectChange}
            />
            <TextArea
                name="message"
                label="Message"
                type="text"
                value={form.message}
                handleChange={handleMessageChange}
            />
            <div className="form-button">
                <Button
                    name="Submit"
                    type="submit"
                    styles="submit"
                />
            </div>
        </form>
    );
}

export default Form;