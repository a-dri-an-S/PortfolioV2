const Input = ({ type, name, value, label, handleChange }) => {
    return (
        <div className="form-input-container">
            <label 
                className="form-label"
                htmlFor={name}
            >
                {label}
            </label>
            <input
                className={`form-input ${name}-input`}
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