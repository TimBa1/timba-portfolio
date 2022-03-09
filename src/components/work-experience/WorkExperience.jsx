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
                         <span className="qualification-subtile">Software Intern</span>
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
                             <h4 className="qualification-title">Kudi Inc</h4>
                              </div>
                              <div className="tilo"></div>
                         <span className="qualification-subtile">Frontend Engineer</span>
                         <div className="qualificiation-calender">May 2021 – nov 2021</div>
                         <div>Kudi is a financial technology organization that aims at making financial services accessible and affordable to all Africans across the world, through its agent network, especially  the underbanked and unbanked.</div>
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
                         {/* <span className="qualification-line"></span> */}
                     </div>
                          <Fade right duration={1000}>
                          <div className="p-3 ct">
                         <div className="d-flex name">
                             <h4 className="qualification-title">Traktion</h4>
                              </div>
                              <div className="tilo"></div>
                         <span className="qualification-subtile">Frontend Engineer</span>
                         <div className="qualificiation-calender">nov 2021 – Present</div>
                         <div>Traktion is a new model that helps ambitious startups and scaleups grow in a more agile and efficient way.Traktion is brings transparency into the way businesses hire, source, and engage freelance digital marketing agencies and freelancers through data.</div>
                     </div>
                     </Fade>
                 </div>
             </div>
         </div>
      </div>
      </Fade>
    </section>
  );
}

export default WorkExperience;
