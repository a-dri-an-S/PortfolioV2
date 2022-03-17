import './Message.css';

const SuccessMessage = ({ onClick }) => {
    return (
        <div 
            className="submit-message success"
            onClick={onClick}
        >
            <p className="message-error">Message sent!</p>
        </div>
    );
}

export default SuccessMessage;