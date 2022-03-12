import Avatar from '../../assets/AdrianSalinas.png'
import './Main.css'

const Main = () => {
    return (
        <section className="main">
            <div className="main-container">
                <div className="main-content">
                    <img className="main-avatar" src={Avatar} alt="Adrian-Salinas-Avatar"/>
                    <div className="main-intro">
                        <h1 className="main-intro-title">
                            Welcome!<br></br>I'm <span className="main-intro-title-bold">Adrian Salinas</span>
                        </h1>
                        <p className="main-intro-tagline">
                            I'm a full-stack web developer who love crafting websites. Let's build the web together!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Main;