import HTML from '../../assets/HTML.png';
import CSS from '../../assets/CSS.png';
import JS from '../../assets/Javascript.png'
import Node from '../../assets/Node.png';
import ReactImg from '../../assets/React.png';
import MongoDB from '../../assets/MongoDB.png';
import API from '../../assets/API.png';
import GraphQL from '../../assets/GraphQL.png';
import Windows from '../../assets/Windows.png';
import Git from '../../assets/Git.png';
import VSCode from '../../assets/VSCode.png';
import Illustrator from '../../assets/Illustrator.png';

import './SkillsCard.css';


const SkillsCard = () => {
    return (
        <div className="skills">
            <div className="skills-grid">
                <div className="skill-container">
                    <img className="skill-img" src={HTML} alt="HTML"/>
                    <p className="skill-name">HTML</p>
                </div>
                <div className="skill-container">
                    <img className="skill-img" src={CSS} alt="CSS"/>
                    <p className="skill-name">CSS</p>
                </div>
                <div className="skill-container">
                    <img className="skill-img" src={JS} alt="Javascript"/>
                    <p className="skill-name">Javascript</p>
                </div>
                <div className="skill-container">
                    <img className="skill-img" src={Node} alt="Node.js"/>
                    <p className="skill-name">Node</p>
                </div>
                <div className="skill-container">
                    <img className="skill-img" src={ReactImg} alt="React.js"/>
                    <p className="skill-name">React</p>
                </div>
                <div className="skill-container">
                    <img className="skill-img" src={MongoDB} alt="MongoDB"/>
                    <p className="skill-name">MongoDB</p>
                </div>
                <div className="skill-container">
                    <img className="skill-img" src={API} alt="API"/>
                    <p className="skill-name">API</p>
                </div>
                <div className="skill-container">
                    <img className="skill-img" src={GraphQL} alt="GraphQL"/>
                    <p className="skill-name">GraphQL</p>
                </div>
                <div className="skill-container">
                    <img className="skill-img" src={Windows} alt="Windows"/>
                    <p className="skill-name">Windows</p>
                </div>
                <div className="skill-container">
                    <img className="skill-img" src={Git} alt="Git"/>
                    <p className="skill-name">Git</p>
                </div>
                <div className="skill-container">
                    <img className="skill-img" src={VSCode} alt="VS Code"/>
                    <p className="skill-name">VS Code</p>
                </div>
                <div className="skill-container">
                    <img className="skill-img" src={Illustrator} alt="Adobe-Illustrator"/>
                    <p className="skill-name">Illustrator</p>
                </div>
            </div>
        </div>
    );
}

export default SkillsCard;