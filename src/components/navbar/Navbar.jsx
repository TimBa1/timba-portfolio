import Skills from '../skills/Skills';
import { socialMedia } from '../work-experience/experience';
import WorkExperience from '../work-experience/WorkExperience';



function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow tg">
      <div className="container">
        <div className="container-fluid">
             <h1 className='name-title'>TimBa</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a
                  className="nav-link"
                  href={<WorkExperience />}
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href={<Skills/>}
                >
                  Work Experience
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href={socialMedia.Github}
                  target="_blank"
                  rel="noreferrer"
                >
                  github projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href={"tel:"+socialMedia.number}
                >
                  contact me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav> 
  );
}

export default Navbar;
