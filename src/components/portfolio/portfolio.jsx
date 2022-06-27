import React from "react";
import { Fade } from "react-reveal";
import "./portfolio.css"

function Portfolio() {
  return (
    <div>
      <Fade bottom duration={1000}>
        <div className="container miti">
          <div className="portfolio-info">
            <h1>CLIENTS PROJECTS</h1>
            <h3 className="pt-5">
              SOME PROJECTS AND CLIENTS THAT I HELPED TO CREATE THEIR TECH
            </h3>
          </div>
          <div className="projects">
            <div className="muti">
              <img className="port-img pb-4" src={require("../../assets/home/timba-ent.mp4")} alt="no network" />
              <div className="project-name">A simple landing page</div>
              <div className="project-desc">
                this landing page can be utilized as an information website for a client. its very responsive and intuitive, with an ample mixture of vibrant colors.
              </div>
              <button className=" sec-btn">
                <a href="https://github.com/TimBa1/timba-ent" target="_blank" rel="noreferrer">
                  visit site
                </a>
              </button>
            </div>
            
            <div className=" muti">
            <img className="port-img pb-4" src={require("../../assets/home/getripay-mp.jpeg")} alt="no network" />
              <div className="project-name">E-COMMERCE</div>
              <div className="project-desc">
              
              </div>
              <button className=" sec-btn">
                <a href="http://getripay.com" target="_blank" rel="noreferrer">
                  visit site
                </a>
              </button>
            </div>
            
            <div className="muti">
            <img className="port-img pb-4" src={require("../../assets/home/marketplace-kudi.jpeg")} alt="no network" />
              <div className="project-name">Clients-Portfolio</div>
              <div className="project-desc">
              
              </div>
              <button className=" sec-btn">
               <a href="http://kudi.com" target="_blank" rel="noreferrer"> 
                  visit site
                </a>
              </button>
            </div>

            <div className="muti">
            <img className="port-img pb-4" src={require("../../assets/home/marketplace-kudi.jpeg")} alt="no network" />
              <div className="project-name">Budget App</div>
              <div className="project-desc">
                 this is an optimized app for keeping track of your spending. And money allocted for each needs created. the web app allows you to create categories for spending with a max spending limit and each categories you can create as much list of items you want there with the amount intended for each and a progress bar to show if you are reachinf your limit.
              </div>
              <button className=" sec-btn">
               <a href="http://timba-budget-app.netlify.com" target="_blank" rel="noreferrer"> 
                  visit site
                </a>
              </button>
            </div>
            <div className="muti">
            <img className="port-img pb-4" src={require("../../assets/home/marketplace-kudi.jpeg")} alt="no network" />
              <div className="project-name">Task Tracker</div>
              <div className="project-desc">
                           
              </div>
              <button className=" sec-btn">
               <a href="http://kudi.com" target="_blank" rel="noreferrer"> 
                  visit site
                </a>
              </button>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Portfolio;
