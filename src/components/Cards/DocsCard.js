import { saveAs } from 'file-saver';

import Button from '../Button/Button';
import Resume from '../../assets/PDFs/Resume.pdf';
import Certificate from '../../assets/PDFs/Certificate.pdf';
import './Cards.css';

const DocsCard = () => {

    const saveResume = () => {
        saveAs(
            Resume,
            'Adrian-Salinas-Resume'.pdf
        );
    }
    const saveCertificate = () => {
        saveAs(
            Certificate,
            'Adrian-Salinas-Certificate'.pdf
        );
    }

    return (
        <div className="documents">
            <div className="documents-container">
                <Button 
                    name="Resume"
                    type="button"
                    styles="docs"
                    onClick={saveResume}
                />
                <Button 
                    name="Certificate"
                    type="button"
                    styles="docs"
                    onClick={saveCertificate}
                />
            </div>
        </div>
    );
}

export default DocsCard;