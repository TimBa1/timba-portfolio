import Typical from "react-typical";
import './Header.css';

function Header({foo}) {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="col">
            <div className="col-icons pa-3">
              <a href="https://github.com/TimBa1" onClick={foo}  className="pp">
                <i className="fa fa-github-square fa-1.5x"></i>
              </a>
              <a href="https://timilehinbakare.tb@gmail.com"  onClick={foo} className="pp">
                <i className="fa fa-yahoo fa-1.5x"></i>
              </a>
              <a href="https://www.linkedin.com/in/timilehin-bakare/"  onClick={foo} className="pp">
                <i className="fa fa-linkedin-square fa-1.5x"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-test">
              {""}
              Hi there,
              <span className="highlighted-text">
                {" "}
                <Typical loop={Infinity} steps={["I'm Timilehin", 1000]} />
              </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 🏈",
                    1000,
                    "Front-End Dev 😎",
                    1000,
                    "Creative Designs💻",
                    1000,
                    "4 Languages🤝",
                    1000,
                    "Html/Css/Js/react📱",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                              I am a solution-driven frontend engineer with a passion for creating intuitive and dynamic user experience.<br/>
                              I have competence in building web applications with Html/ Css JavaScript / React.js and some really cool libraries.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me
            </button>
            <a href="https://timilehinbakare.tb@gmail.com" target="_blank" rel="noreferrer">
              <button className="btn highlighted-btn nt">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
        
          </div>
      </div>
      
  );
}

export default Header;
