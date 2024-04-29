import React, { useState } from 'react'
import './resume.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import javaScript from '../../../images/javaScript.jpg'

const Resume = () => {
    const [activeSection, setActiveSection] = useState ('edu')

    const handleSectionChange = (section) => {
        setActiveSection(section);
      };

      const educationDetails = [
        {id:1, name:"Bachelor of Information and Communication Technology (BICT)", details:"I am currently learning on 3rd year 2nd semester. I have completed 5 semesters of the program and I completed 37 subjects according to this degree program."},
        {id:1, name:"Bachelor of Information and Communication Technology (BICT)", details:"I am currently learning on 3rd year 2nd semester. I have completed 5 semesters of the program and I completed 37 subjects according to this degree program."},
        {id:1, name:"Bachelor of Information and Communication Technology (BICT)", details:"I am currently learning on 3rd year 2nd semester. I have completed 5 semesters of the program and I completed 37 subjects according to this degree program."},
        {id:1, name:"Bachelor of Information and Communication Technology (BICT)", details:"I am currently learning on 3rd year 2nd semester. I have completed 5 semesters of the program and I completed 37 subjects according to this degree program."},
        {id:1, name:"Bachelor of Information and Communication Technology (BICT)", details:"I am currently learning on 3rd year 2nd semester. I have completed 5 semesters of the program and I completed 37 subjects according to this degree program."},
      ];
      const SkillData = [
        {id:1, skillName:"Programming Skill", skill1:"HTML / CSS / Java Script", skill2:"React JS", skill3:"Next JS", skill4:"React Native", skill5:"Bootsrap"},
        {id:1, skillName:"Design Tool", skill1:"Figma (UI/UX Design)", skill2:"Adobe Photoshop", skill3:"Adobe Illustator", skill4:"Adobe Premiere Pro", skill5:""},
        {id:1, skillName:"Version Control", skill1:"GitHub", skill2:"Github Desktop", skill3:"", skill4:"", skill5:""},
        {id:1, skillName:"Operating System", skill1:"Windows", skill2:"Linux", skill3:"", skill4:"", skill5:""},
       
      ];
      const expData = [
        {id:1, companyName:"ORIONUX (Pvt) Ltd", possition:"6 month Internship - Front end Developer", projectName:"Project :", project1:"Services App-front-end",framework1:"/ React Native", project2:"Freelancer Web Site - front-end",framework2:"/ React JS", project3:"Slider Web Site - Frontend",framework3:"/ Next JS", project4:"Company Website Updated - Front-end",framework4:"/ Next JS ",},
        {id:2, companyName:"ORIONUX (Pvt) Ltd", possition:"6 month Internship - Front end Developer", projectName:"Project :", project1:"Services App-front-end",framework1:"/ React Native", project2:"Freelancer Web Site - front-end",framework2:"/ React JS", project3:"Slider Web Site - Frontend",framework3:"/ Next JS", project4:"Company Website Updated - Front-end",framework4:"/ Next JS ",},
      ];

      const certData = [
        {id:1, img:javaScript, courceName:"", courcePlace:""},
        {id:1, img:javaScript, courceName:"", courcePlace:""},
        {id:1, img:javaScript, courceName:"", courcePlace:""},
        {id:1, img:javaScript, courceName:"", courcePlace:""},
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
    <div className='resume'>
<hr className='resume_line'/>
         <div className='resume_topic'>
            <p className='my_journey'>MY JOURNEY IN THE ACADEMIC & PROFESSIONAL FRONT</p>
            <h1 className='resume'>Resume</h1>
        </div>
        <div className='two_section'>
            <div className='resume_navbar'>
                  <button className={`resume_button1 ${activeSection ==='edu' ? 'active' : ''}`}onClick={() => handleSectionChange('edu')}>Education</button>
                  <button className={`resume_button2 ${activeSection === 'skill' ? 'active' : ''}`} onClick={() => handleSectionChange('skill')}>Professional Skill</button>
                  <button className={`resume_button3 ${activeSection === 'exp' ? 'active' : ''}`} onClick={() => handleSectionChange('exp')}>Experience</button>
                  <button className={`resume_button4 ${activeSection === 'cert' ? 'active' : ''}`} onClick={() => handleSectionChange('cert')}>Certificates</button>
            </div>
           
            <div className='contain_section'>


            {activeSection === 'edu' && (
              educationDetails.map((item)=>(
                <div key={item.id} className='education_details'>
                  <p className='degree_name'>{"Bachelor of Information and Communication Technology (BICT)"}</p>
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
                  <div className='exp_container'> 
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
                          <h6 className='cource_name'>OFFICE COURCE</h6>
                          <p className='cource_place'>Lanka TECH- welimada</p>
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
