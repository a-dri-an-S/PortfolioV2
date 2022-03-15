const TextArea = ({ name, value, label, handleChange }) => {
    return (
        <div className="form-textarea-container">
            <label
                className="form-label"
                htmlFor={name}
            >
                {label}
            </label>
            <textarea
                className="form-textarea"
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