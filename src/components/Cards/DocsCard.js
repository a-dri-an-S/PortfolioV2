import Button from '../Button/Button';
import './Cards.css';

const DocsCard = () => {
    return (
        <div className="documents">
            <div className="documents-container">
                <Button 
                    name="Resume"
                    type="button"
                />
                <Button 
                    name="Certificate"
                    type="button"
                />
            </div>
        </div>
    );
}

export default DocsCard;