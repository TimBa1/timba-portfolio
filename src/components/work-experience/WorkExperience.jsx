import React from "react";
import "./work-experience.css";
import { Fade } from "react-reveal";
// import workExperiences from './experience';

function WorkExperience() {
  return (
    <section className="qualification-section container tt">
        <Fade bottom duration={1000}>
      <h1 className="section-title">skils experience</h1>
      <div className="qualification-container container">
          <div className="qualification-sections">
             <div className="qualification-content">
                 <div className="qualification-data">
                     <Fade left duration={1000}>
                     <div className="p-3 ct">
                         <div className="d-flex name">
                             <h4 className="qualification-title">HTML/CSS</h4>
                              </div>
                              <div className="tilo"></div>
                         <span className="qualification-subtile">Programing Language</span>
                         <div>Html and Css which is major building block in web development. i am very proficient in the both and i have complete projects and built responsive and intuitive sites with them. </div>
                     </div>
                     </Fade>
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
                        <Fade right duration={1000}>  
                     <div className="p-3 ct">
                         <div className="d-flex name">
                             <h4 className="qualification-title">Javascript</h4>
                              </div>
                              <div className="tilo"></div>
                         <span className="qualification-subtile">progamming language</span>
                         <div>Java sc.</div>
                     </div>
                     </Fade>
                     
                 </div>
                 <div className="qualification-data">
                 <Fade left duration={1000}>  
                 <div className="p-3 ct">
                         <div className="d-flex name">
                             <h4 className="qualification-title">React</h4>
                              </div>
                              <div className="tilo"></div>
                         <span className="qualification-subtile">Javascript framework</span>
                         
                         <div>I use react a Javascript frame work to create and make effective web applications and information website, along with hooks and some other react libraries which i utilitize to get the job done.</div>
                     </div>
                     </Fade>
                     <div>
                         <span className="qualification-rounder"></span>
                         <span className="qualification-line"></span>
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
