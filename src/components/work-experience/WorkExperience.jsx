import React from "react";
import "./work-experience.css";
import { Fade } from "react-reveal";
import html from "../../images/html.png";
// import workExperiences from './experience';
import javascript from "../../images/javascript.png";
import css from "../../images/css.png";
import bootstrap from "../../images/bootstrap.png";
import github from "../../images/github.png";
import git from "../../images/git.png";
import tailwind from "../../images/tailwind.png";
import react from "../../images/react.png";
import redux from "../../images/redux.png";
import firebase from "../../images/firebase.png";
import next from "../../images/next.png";

function WorkExperience() {
  return (
    <section className="qualification-section container tt " id="skills">
      <Fade bottom duration={1000}>
        <h1 className="section-title">Skills</h1>
        <div className="qualification-container container">
          <div className="qualification-sections">
            <div className="qualification-content">
              <div className="qualification-data">
                <div className="p-3 ct">
                  <div className="d-flex name">
                    <h4 className="qualification-title">HTML</h4>
                  </div>
                  <div className="tilo"></div>
                  <span className="qualification-subtile">
                    <img
                      src={html}
                      alt="/"
                      style={{ width: "64px", height: "64px" }}
                    />
                  </span>
                </div>

                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>
              </div>
              <div className="qualification-data">
                <div></div>
                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>

                <div className="p-3 ct">
                  <div className="d-flex name">
                    <h4 className="qualification-title">CSS</h4>
                  </div>
                  <div className="tilo"></div>
                  <span className="qualification-subtile">
                    <img
                      src={css}
                      alt="/"
                      style={{ width: "64px", height: "64px" }}
                    />
                  </span>
                </div>
              </div>
              <div className="qualification-data">
                <div className="p-3 ct">
                  <div className="d-flex name">
                    <h4 className="qualification-title">Bootstrap</h4>
                  </div>
                  <div className="tilo"></div>
                  <span className="qualification-subtile">
                    <img
                      src={bootstrap}
                      alt="/"
                      style={{ width: "64px", height: "64px" }}
                    />
                  </span>
                </div>

                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>
              </div>
              <div className="qualification-data">
                <div></div>
                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>

                <div className="p-3 ct">
                  <div className="d-flex name">
                    <h4 className="qualification-title">Git</h4>
                  </div>
                  <div className="tilo"></div>
                  <span className="qualification-subtile">
                    <img
                      src={git}
                      alt="/"
                      style={{ width: "64px", height: "64px" }}
                    />
                  </span>
                </div>
              </div>
              <div className="qualification-data">
                <div className="p-3 ct">
                  <div className="d-flex name">
                    <h4 className="qualification-title">Tailwind</h4>
                  </div>
                  <div className="tilo"></div>
                  <span className="qualification-subtile">
                    <img
                      src={tailwind}
                      alt="/"
                      style={{ width: "64px", height: "64px" }}
                    />
                  </span>
                </div>

                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>
              </div>
              <div className="qualification-data">
                <div></div>
                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>

                <div className="p-3 ct">
                  <div className="d-flex name">
                    <h4 className="qualification-title">GitHub</h4>
                  </div>
                  <div className="tilo"></div>
                  <span className="qualification-subtile">
                    <img
                      src={github}
                      alt="/"
                      style={{ width: "64px", height: "64px" }}
                    />
                  </span>
                </div>
              </div>
              <div className="qualification-data">
                <div className="p-3 ct">
                  <div className="d-flex name">
                    <h4 className="qualification-title">JavaScript</h4>
                  </div>
                  <div className="tilo"></div>
                  <span className="qualification-subtile">
                    <img
                      src={javascript}
                      alt="/"
                      style={{ width: "64px", height: "64px" }}
                    />
                  </span>
                </div>

                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>
              </div>
              <div className="qualification-data">
                <div></div>
                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>

                <div className="p-3 ct">
                  <div className="d-flex name">
                    <h4 className="qualification-title">React</h4>
                  </div>
                  <div className="tilo"></div>
                  <span className="qualification-subtile">
                    <img
                      src={react}
                      alt="/"
                      style={{ width: "64px", height: "64px" }}
                    />
                  </span>
                </div>
              </div>
              <div className="qualification-data">
                <div className="p-3 ct">
                  <div className="d-flex name">
                    <h4 className="qualification-title">Redux</h4>
                  </div>
                  <div className="tilo"></div>
                  <span className="qualification-subtile">
                    <img
                      src={redux}
                      alt="/"
                      style={{ width: "64px", height: "64px" }}
                    />
                  </span>
                </div>

                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>
              </div>
              <div className="qualification-data">
                <div></div>
                <div>
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>

                <div className="p-3 ct">
                  <div className="d-flex name">
                    <h4 className="qualification-title">Firebase</h4>
                  </div>
                  <div className="tilo"></div>
                  <span className="qualification-subtile">
                    <img
                      src={firebase}
                      alt="/"
                      style={{ width: "64px", height: "64px" }}
                    />
                  </span>
                </div>
              </div>
              <div className="qualification-data">
                <div className="p-3 ct">
                  <div className="d-flex name">
                    <h4 className="qualification-title">Next.js</h4>
                  </div>
                  <div className="tilo"></div>
                  <span className="qualification-subtile">
                    <img
                      src={next}
                      alt="/"
                      style={{ width: "64px", height: "64px" }}
                    />
                  </span>
                </div>

                <div>
                  <span className="qualification-rounder"></span>
                  {/* <span className="qualification-line"></span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default WorkExperience;
