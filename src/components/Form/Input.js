const Input = ({ type, name, value, label, handleChange }) => {
    return (
        <div className="contact-form-input-container">
            <label 
                className="contact-form-label"
                htmlFor={name}
            >
                {label}
            </label>
            <input
                className="contact-form-input" 
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={(e) => handleChange(e)}
                required
            />
        </div>
    );
}

export default Input;