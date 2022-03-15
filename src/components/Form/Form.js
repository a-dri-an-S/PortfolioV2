import { useState } from 'react';
import { send } from 'emailjs-com';

import Input from './Input';
import TextArea from './TextArea';
import SuccessMessage from './Message/SuccessMessage';
import ErrorMessage from './Message/ErrorMessage';
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
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const userId = process.env.REACT_APP_USER_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault();
        send(
            serviceId,
            templateId,
            form,
            userId
        )
        .then(res => {
            setSubmitSuccess(true);
            setForm(contactForm);
            console.log('Success!', res.status, res.text)
        })
        .catch(err => {
            setSubmitError(true)
            console.log('Failed', err);
        })
    }

    return (
        <form 
            className="form"
            onSubmit={e => onSubmit(e)}    
        >
            <div className="form-inputs">
                <Input
                    name="name"
                    label="Name"
                    type="text"
                    value={form.name}
                    handleChange={handleChange}
                />
                <Input
                    name="email"
                    label="Email Address"
                    type="email"
                    value={form.email}
                    handleChange={handleChange}
                />
            </div>
            <Input
                name="subject"
                label="Subject"
                type="text"
                value={form.subject}
                handleChange={handleChange}
            />
            <TextArea
                name="message"
                label="Message"
                type="text"
                value={form.message}
                handleChange={handleChange}
            />
            <div className="form-submit-message">
                {
                    submitSuccess && <SuccessMessage />
                }
                {
                    submitError && <ErrorMessage />
                }
            </div>
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