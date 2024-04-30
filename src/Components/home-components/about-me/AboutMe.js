import React from "react";
import "./aboutMe.css";
import profile from "../../../images/profile-img.png";
import Fb from "../../../svg/Fb";
import Git from "../../../svg/Git";
import LinkedIn from "../../../svg/LinkedIn";
import { Typewriter } from 'react-simple-typewriter'
import Arrow from "../../../svg/Arrow";
import { Link } from 'react-scroll'


const AboutMe = () => {

  const linkedin = 'https://www.linkedin.com/in/nalin-priyankara-580513275/';
  const github = 'https://github.com/Nalin123-56';
  const facebook = 'https://www.facebook.com/profile.php?id=100014221509513';

  return (
    <div id="about" className="about_me_container">
      
      <div className="left_about">
        <p className="wel_come">WELCOME TO MY PORTFOLIO</p>
        <h1 className="hi">
          Hi, I'm <span className="nalin">Nalin</span> 
        </h1>
        <h3 className="web"> <Arrow/> <Typewriter words={['Web Development...', 'App Development...', 'UI / UX Design...']} loop typeSpeed={30} delaySpeed={700} cursor={true}/></h3> 
        <p className="description">
          Self-motivated and adaptable professional with a strong track record
          in navigating diverse technology stacks. Thrives in problem-solving
          and interpersonal skills, excelling under pressure. Enthusiastically
          embraces new challenges, always seeking opportunities for learning and
          growth.
        </p>
        <p className="find">FIND ME ON</p>
        <div className="find_container">
          <div className="find_icon">
          <a href={facebook} target="_blank" rel="noopener noreferrer"  className="fb">
            <div >
               <Fb />
            </div>
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" className="git" >
            <div>
              <Git />
            </div>
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="linkdin">
             <div>
              <LinkedIn />
            </div>
            </a>
            
            
            
            
          </div>
                  <Link  className="contact_button"
                  to="contact"
                  spy={true} 
                  smooth={true} 
                  offset={50} 
                  duration={500}>
                    <button className="contact_button">Contact</button>
                  </Link>
          
        </div>
      </div>
      <div className="right_about">
        <img className="pro_img" src={profile} alt="" />
      </div>
    </div>
  );
};

export default AboutMe;
