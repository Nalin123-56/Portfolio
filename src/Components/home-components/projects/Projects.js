import React, { useState } from 'react'
import './projects.css'
import project1 from '../../../images/project1.png'
import Git from "../../../svg/Git";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const Projects = () => {

    const [activeSection, setActiveSection] = useState ('web')

    const handleSectionChange = (section) => {
        setActiveSection(section);
      };

    const webData = [
        {id:1, project_img: project1 ,projectName:"CRIMINAL IDENTIFICATION SYSTEM", githubIcon:<Git/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:2, project_img: project1,projectName:"CRIMINAL IDENTIFICATION SYSTEM", githubIcon:<Git/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:3, project_img: project1,projectName:"CRIMINAL IDENTIFICATION SYSTEM", githubIcon:<Git/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:4, project_img: project1,projectName:"CRIMINAL IDENTIFICATION SYSTEM", githubIcon:<Git/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:5, project_img: project1,projectName:"CRIMINAL IDENTIFICATION SYSTEM", githubIcon:<Git/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:6, project_img: project1,projectName:"CRIMINAL IDENTIFICATION SYSTEM", githubIcon:<Git/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
    ];
    const appData = [
        {id:1, project_img: project1 ,projectName:"CRIMINAL IDENTIFICATION SYSTEM", githubIcon:<Git/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:2, project_img: project1,projectName:"CRIMINAL IDENTIFICATION SYSTEM", githubIcon:<Git/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:3, project_img: project1,projectName:"CRIMINAL IDENTIFICATION SYSTEM", githubIcon:<Git/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:4, project_img: project1,projectName:"CRIMINAL IDENTIFICATION SYSTEM", githubIcon:<Git/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:5, project_img: project1,projectName:"CRIMINAL IDENTIFICATION SYSTEM", githubIcon:<Git/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:6, project_img: project1,projectName:"CRIMINAL IDENTIFICATION SYSTEM", githubIcon:<Git/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
    ];
    const UiData = [
        {id:1, project_img: project1 ,projectName:"CRIMINAL IDENTIFICATION SYSTEM", githubIcon:<Git/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:2, project_img: project1,projectName:"CRIMINAL IDENTIFICATION SYSTEM", githubIcon:<Git/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:3, project_img: project1,projectName:"CRIMINAL IDENTIFICATION SYSTEM", githubIcon:<Git/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:4, project_img: project1,projectName:"CRIMINAL IDENTIFICATION SYSTEM", githubIcon:<Git/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:5, project_img: project1,projectName:"CRIMINAL IDENTIFICATION SYSTEM", githubIcon:<Git/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:6, project_img: project1,projectName:"CRIMINAL IDENTIFICATION SYSTEM", githubIcon:<Git/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
    ];
    const GrapichData = [
        {id:1, project_img: project1 ,projectName:"CRIMINAL IDENTIFICATION SYSTEM", githubIcon:<Git/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:2, project_img: project1,projectName:"CRIMINAL IDENTIFICATION SYSTEM", githubIcon:<Git/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:3, project_img: project1,projectName:"CRIMINAL IDENTIFICATION SYSTEM", githubIcon:<Git/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:4, project_img: project1,projectName:"CRIMINAL IDENTIFICATION SYSTEM", githubIcon:<Git/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:5, project_img: project1,projectName:"CRIMINAL IDENTIFICATION SYSTEM", githubIcon:<Git/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:6, project_img: project1,projectName:"CRIMINAL IDENTIFICATION SYSTEM", githubIcon:<Git/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
    ];

    var settings = {
        className: "center",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
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
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1.7,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 2,
              initialSlide: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.1,
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
    <div className='project_container'>
         <hr className='project_line'/>
        <div className='project_topic'>
            <p className='my_work'>MY WORKS, PROJECTS & CONTRIBUTIONS</p>
            <h1 className='proj'>Projects</h1>
        </div>

        <div className='web_project_navbar'>
           <button className={`proj_button ${activeSection ==='web' ? 'active' : ''}`}onClick={() => handleSectionChange('web')}>Web Development</button>
           <button className={`proj_button ${activeSection === 'app' ? 'active' : ''}`} onClick={() => handleSectionChange('app')}>App development</button>
           <button className={`proj_button ${activeSection === 'ui' ? 'active' : ''}`} onClick={() => handleSectionChange('ui')}>UI / UX Design</button>
           <button className={`proj_button ${activeSection === 'graphic' ? 'active' : ''}`} onClick={() => handleSectionChange('graphic')}>Graphic Design</button>
        </div>

        <div className='project_section'>

                <Slider {...settings}>
               {activeSection === 'web' &&      
              webData.map((item)=> (       
            <div key={item.id} className='project'>
                <div className='project_img'>
                    <img className='project1' src={item.project_img} alt=''/>
                </div>
                <div className='project_name_section'>
                    <h4 className='project_name'>{item.projectName}</h4>
                    <div className='github_icon'>
                        {item.githubIcon}
                    </div>
                </div>
               <div className='project_details'>
                <p className='project_description'>
                    {item.description}
                </p>
               </div>
                
            </div>
              ))}
           
            </Slider>
          
            <Slider {...settings}>
           {activeSection === 'app' && 
        appData.map((item)=> ( 
            <div key={item.id} className='project'>
                <div className='project_img'>
                    <img className='project1' src={item.project_img} alt=''/>
                </div>
                <div className='project_name_section'>
                    <h5 className='project_name'>{item.projectName}</h5>
                    <div className='github_icon'>
                        {item.githubIcon}
                    </div>
                </div>
               <div className='project_details'>
                <p className='project_description'>
                    {item.description}
                </p>
               </div>
                
            </div>
            ))}
 </Slider>

 <Slider {...settings}>
{activeSection === 'ui' && 
             UiData.map((item)=> ( 
            <div key={item.id} className='project'>
                <div className='project_img'>
                    <img className='project1' src={item.project_img} alt=''/>
                </div>
                <div className='project_name_section'>
                    <h4 className='project_name'>{item.projectName}</h4>
                    <div className='github_icon'>
                        {item.githubIcon}
                    </div>
                </div>
               <div className='project_details'>
                <p className='project_description'>
                    {item.description}
                </p>
               </div>
                
            </div>
            ))}
</Slider>
<Slider {...settings}>
{activeSection === 'graphic' && 
             GrapichData.map((item)=> ( 
            <div key={item.id} className='project'>
                <div className='project_img'>
                    <img className='project1' src={item.project_img} alt=''/>
                </div>
                <div className='project_name_section'>
                    <h4 className='project_name'>{item.projectName}</h4>
                    <div className='github_icon'>
                        {item.githubIcon}
                    </div>
                </div>
               <div className='project_details'>
                <p className='project_description'>
                    {item.description}
                </p>
               </div>
                
            </div>
            ))}
            </Slider>
        </div>

       
    </div>
  )
}

export default Projects
