import React, { useState } from 'react'
import './resume.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import javaScript from '../../../images/javaScript.jpg'
import lankatec from '../../../images/lankatec.jpg'
import menglish2 from '../../../images/manoj-english2.jpg'
import prefect from '../../../images/prefect.jpg'
import leadership from '../../../images/leadership.jpg'
import menglish1 from '../../../images/manoj-english.jpg'
import uenglish from '../../../images/upul-english.jpg'
import palath from '../../../images/palath.jpg'
import rajarata1 from '../../../images/rajarata1.jpg'
import rajarata2 from '../../../images/rajarata2.jpg'
import police from '../../../images/police-volley.jpg'
import dsi from '../../../images/dsi.jpg'
import kalapa1 from '../../../images/kalapa1.jpg'
import kalapa2 from '../../../images/kalapa2.jpg'
import kalapa3 from '../../../images/kalapa3.jpg'
import volleypre from '../../../images/volleypre.jpg'
import volley2 from '../../../images/volley2.jpg'
import volley1 from '../../../images/volley1.jpg'
import roadrace from '../../../images/roadrace.jpg'
import loongjump from '../../../images/loongjump.jpg'
import foodball from '../../../images/foodball.jpg'
import elle from '../../../images/elle.jpg'
import clear2 from '../../../images/clear2.jpg'
import clear1 from '../../../images/clear1.jpg'





const Resume = () => {
    const [activeSection, setActiveSection] = useState ('edu')

    const handleSectionChange = (section) => {
        setActiveSection(section);
      };

      const educationDetails = [
        {id:1, name:"Bachelor of Information Communication Technology (BICT)", details:"I am currently learning on 3rd year 2nd semester. I have completed 5 semesters of the program and I completed 37 subjects according to this degree program."},
        {id:1, name:"G.C.E Advanced Level - 2017 / (index no - 7538812) ", details:"I am currently learning on 3rd year 2nd semester. I have completed 5 semesters of the program and I completed 37 subjects according to this degree program."},
        {id:1, name:"Diploma In English Course - 2018 (SIX Month)"},
        {id:1, name:"Diploma In Microsoft Office Course - 2013 (SIX Month)"},
    
      ];
      const SkillData = [
        {id:1, skillName:"Programming Skill", skill1:"HTML / CSS / Java Script", skill2:"React JS", skill3:"Next JS", skill4:"React Native", skill5:"Bootsrap"},
        {id:1, skillName:"Design Tool", skill1:"Figma (UI/UX Design)", skill2:"Adobe Photoshop", skill3:"Adobe Illustator", skill4:"Adobe Premiere Pro", skill5:""},
        {id:1, skillName:"Version Control", skill1:"GitHub", skill2:"Github Desktop", skill3:"", skill4:"", skill5:""},
        {id:1, skillName:"Operating System", skill1:"Windows", skill2:"Linux", skill3:"", skill4:"", skill5:""},
       
      ];
      const expData = [
        {id:1, companyName:"ORIONUX (Pvt) Ltd", possition:"6 month Internship - Front end Developer", projectName:"Project :", project1:"Services App-front-end",framework1:"/ React Native", project2:"Freelancer Web Site - front-end",framework2:"/ React JS", project3:"Slider Web Site - Frontend",framework3:"/ Next JS", project4:"Company Website Updated - Front-end",framework4:"/ Next JS ",},
      ];

      const certData = [
        {id:1, img:javaScript, courceName:"JAVA SCRIPT", courcePlace:"Offered by Sololearn"},
        {id:2, img:lankatec , courceName:"MICROSOFT OFFICE", courcePlace:"Lanka tech - welimada"},
        {id:3, img:menglish2 , courceName:"SPOKEN ENGLISH", courcePlace:"Sarasavi English Academy"},
        {id:4, img:prefect , courceName:"PREFECT", courcePlace:"B/Medawela M.V"},
        {id:4, img:leadership  , courceName:"LEADERSHIP", courcePlace:"B/Medawela M.V"},
        {id:4, img:menglish1  , courceName:"ENGLISH CORSE", courcePlace:"Sarasavi English Academy"},
        {id:4, img:uenglish  , courceName:"ENGLISH CORSE", courcePlace:"Royal Way Academy"},
        {id:4, img:palath  , courceName:"VOLLEYBALL (sport)", courcePlace:"provinces - Uva"},
        {id:4, img:rajarata1  , courceName:"VOLLEYBALL (sport)", courcePlace:"Rajarata University"},
        {id:4, img:rajarata2  , courceName:"ROAD RACE (sport)", courcePlace:"Rajarata University"},
        {id:4, img:police  , courceName:"VOLLEYBALL (sport)", courcePlace:"Offered by Police"},
        {id:4, img:dsi  , courceName:"VOLLEYBALL (sport)", courcePlace:"Offered by DSI"},
        {id:4, img:kalapa1  , courceName:"VOLLEYBALL (sport)", courcePlace:"Regional - Welimada"},
        {id:4, img:kalapa2  , courceName:"VOLLEYBALL (sport)", courcePlace:"Regional - Welimada"},
        {id:4, img:kalapa3  , courceName:"VOLLEYBALL (sport)", courcePlace:"Regional - Welimada"},
        {id:4, img:volleypre   , courceName:"VOLLEYBALL (sport)", courcePlace:"Sport meet"},
        {id:4, img:volley2   , courceName:"VOLLEYBALL (sport)", courcePlace:"Sport meet"},
        {id:4, img:volley1   , courceName:"VOLLEYBALL (sport)", courcePlace:"Sport meet"},
        {id:4, img:roadrace   , courceName:"ROAD RACE (sport)", courcePlace:"Sport meet"},
        {id:4, img:loongjump   , courceName:"LONG JUMP (sport)", courcePlace:"Sport meet"},
        {id:4, img:foodball   , courceName:"FOOD BALL (sport)", courcePlace:"Sport meet"},
        {id:4, img:elle   , courceName:"ELLE (sport)", courcePlace:"Sport meet"},
        {id:4, img:clear2   , courceName:"CLEAN BOOKS", courcePlace:"B/Medawela M.V"},
        {id:4, img:clear1   , courceName:"CLEAN BOOKS", courcePlace:"B/Medawela M.V"},
      ];


      var settings = {
        className: "center",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 3,
        // autoplay: true,
        // speed:3000,
        // autoplaySpeed: 3000,
        // cssEase: "linear",
        // centerMode: true,
        // centerPadding: "60px",


        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2.1,
              slidesToScroll: 2,
              initialSlide: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1.6,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 380,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div id='resume' className='resume'>
<hr className='resume_line'/>
         <div className='resume_topic'>
            <p className='my_journey'>MY JOURNEY IN THE ACADEMIC & PROFESSIONAL FRONT</p>
            <h1 className='resume'>Resume</h1>
        </div>
        <div className='two_section'>
            <div className='resume_navbar'>
                  <button className={`resume_button1 ${activeSection ==='edu' ? 'active' : ''}`}onClick={() => handleSectionChange('edu')}>Education</button>
                  <button className={`resume_button2 ${activeSection === 'skill' ? 'active' : ''}`} onClick={() => handleSectionChange('skill')}>Professional Skill</button>
                  <button id='experience' className={`resume_button3 ${activeSection === 'exp' ? 'active' : ''}`} onClick={() => handleSectionChange('exp')}>Experience</button>
                  <button className={`resume_button4 ${activeSection === 'cert' ? 'active' : ''}`} onClick={() => handleSectionChange('cert')}>Certificates</button>
            </div>
           
            <div className='contain_section'>


            {activeSection === 'edu' && (
              educationDetails.map((item)=>(
                <div key={item.id} className='education_details'>
                  <p className='degree_name'>{item.name}</p>
                  <span className='degree_details'>I am currently learning on 3rd year 2nd semester. I have completed 5 semesters of the program and I completed 37 subjects according to this degree program.</span>
                </div>
              ))
             
              )}


              {activeSection === 'skill' && (
                SkillData.map((item) => (
                  <div className='skill_container' key={item.id}> {/* Ensure to provide a unique key */}
                    <div className='skill_name'>{item.skillName}</div>
                    <ul className='skill'>
                      <li>{item.skill1}</li>
                      <li>{item.skill2}</li>
                      <li>{item.skill3}</li>
                      <li>{item.skill4}</li>
                      <li>{item.skill5}</li>
                    </ul>
                  </div>
                ))
              )}

              {activeSection === 'exp' && (
                expData.map((item) => (
                  <div  className='exp_container'> 
                     <div className='company_name'>{item.companyName}</div>
                     <h5 className='possition'>{item.possition}</h5>
                     <h6 className='project_name'>{item.projectName} </h6>
                      <ul className='skill'>
                      <li className='proj'>{item.project1}<span className='framework'>{item.framework1}</span></li>
                      <li className='proj'> {item.project2}<span className='framework'>{item.framework2}</span></li>
                      <li className='proj'>{item.project3} <span className='framework'>{item.framework3}</span> </li>
                      <li className='proj'>{item.project4}<span className='framework'>{item.framework4}</span> </li>
                    </ul>
                  </div>
                ))
              )}
                

                {activeSection === 'cert' && (
               
                  <div className='cet_container'> 
                      <Slider {...settings}>
                        {certData.map((item) => (
                          <div key={item.id} className='certficate_one'>
                          <img className='cert_img' src={item.img} alt='' />
                          <h6 className='cource_name'>{item.courceName}</h6>
                          <p className='cource_place'>{item.courcePlace}</p>
                        </div>
                        ))}
                        
                      
                      </Slider>
                  </div>
              
              )}
            </div>
             
        </div>
       
    </div>
  )
}

export default Resume
