import './Button.css';

const Button = ({ name, styles, type, onClick }) => {
    return (
        <button
            className={`${styles}-btn`}
            type={type}
            onClick={onClick}
        >   
            {name}
        </button>
    );
}

export default Button;