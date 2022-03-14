import Button from '../Button/Button';
import './Cards.css';

const DocsCard = () => {
    return (
        <div className="documents">
            <div className="documents-container">
                <Button 
                    name="Resume"
                    type="button"
                    styles="docs"
                />
                <Button 
                    name="Certificate"
                    type="button"
                    styles="docs"
                />
            </div>
        </div>
    );
}

export default DocsCard;