const TextArea = ({ name, value, label, handleChange }) => {
    return (
        <div className="contact-form-textarea-container">
            <label
                className="contact-form-label"
                htmlFor={name}
            >
                {label}
            </label>
            <textarea
                className="contact-form-textarea"
                id={name}
                name={name}
                value={value}
                onChange={e => handleChange(e)}
                required
            />
        </div>
    );
}

export default TextArea;