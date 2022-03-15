import HTML from '../../assets/images/HTML.png';
import CSS from '../../assets/images/CSS.png';
import JS from '../../assets/images/Javascript.png'
import Node from '../../assets/images/Node.png';
import ReactImg from '../../assets/images/React.png';
import MongoDB from '../../assets/images/MongoDB.png';
import API from '../../assets/images/API.png';
import GraphQL from '../../assets/images/GraphQL.png';
import Windows from '../../assets/images/Windows.png';
import Git from '../../assets/images/Git.png';
import VSCode from '../../assets/images/VSCode.png';
import Illustrator from '../../assets/images/Illustrator.png';

import './Cards.css';


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