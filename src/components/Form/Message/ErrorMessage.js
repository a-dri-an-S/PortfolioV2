import './Message.css';

const ErrorMessage = ({ onClick }) => {
    return (
        <div 
            className="submit-message error"
            onClick={onClick}
        >
            <p className="message-error">Error: Message not sent!</p>
        </div>
    );
}

export default ErrorMessage;