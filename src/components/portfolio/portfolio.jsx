import React from "react";
import { Fade } from "react-reveal";
import "./portfolio.css"
import client from '../../images/client.jpeg';
import netflix from '../../images/netflix.jpeg';
import ent from '../../images/ent.jpeg';
import lf from '../../images/lf.jpeg';
import budget from '../../images/budget.jpeg';
import TASK from '../../images/TASK.jpeg';

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
              <img className="port-img pb-4" src={ent} alt="no network" />
              <div className="project-name">A simple landing page</div>
              <div className="project-desc">
                This landing page can be utilized as an information website for a client. Its very responsive and intuitive, with an ample mixture of vibrant colors.
              </div>
              <button className=" sec-btn">
                <a href="https://github.com/TimBa1/timba-ent" target="_blank" rel="noreferrer">
                  visit site
                </a>
              </button>
            </div>
            
            <div className=" muti">
            <img className="port-img pb-4" src={lf} alt="no network" />
              <div className="project-name">E-COMMERCE</div>
              <div className="project-desc">
                This is a jewelry e-commerce site. You can order make payment for your orders and all.
                You are required to register for you to be authenticated.  
              </div>
              <button className=" sec-btn">
                <a href="https://lordfaith.netlify.com" target="_blank" rel="noreferrer">
                  visit site
                </a>
              </button>
            </div>
            
            <div className="muti">
            <img className="port-img pb-4" src={client} alt="no network" />
              <div className="project-name">Clients-Portfolio</div>
              <div className="project-desc">
                This is a portfolio site i designed for a client. its responsive and intuitive.
                Feel free to check it out.
              </div>
              <button className=" sec-btn">
               <a href="http://timilehin-bakare.netlify.com" target="_blank" rel="noreferrer"> 
                  visit site
                </a>
              </button>
            </div>

            <div className="muti">
            <img className="port-img pb-4" src={netflix} alt="no network" />
              <div className="project-name">Netflix-Clone UI</div>
              <div className="project-desc">
                 This is a netflix clone UI. Designed and styled and made responsive.
              </div>
              <button className=" sec-btn">
               <a href="http://timba-netflix-clone.netlify.com" target="_blank" rel="noreferrer"> 
                  visit site
                </a>
              </button>
            </div>

            <div className="muti">
            <img className="port-img pb-4" src={budget} alt="no network" />
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
            <img className="port-img pb-4" src={TASK} alt="no network" />
              <div className="project-name">Task Tracker</div>
              <div className="project-desc">
                 This is an app created to create keep track of things needed to be done. Basically its a schedule app where yu can write schedules of things you want to get done.          
              </div>
              <button className=" sec-btn">
               <a href="http://timba-task-tracker.netlify.com" target="_blank" rel="noreferrer"> 
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
