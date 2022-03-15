import './Message.css';

const ErrorMessage = () => {
    return (
        <div className="submit-message error">
            <p className="message-error">Error: Message not sent!</p>
        </div>
    );
}

export default ErrorMessage;