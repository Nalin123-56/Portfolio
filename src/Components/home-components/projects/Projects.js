import React, { useState } from 'react'
import './projects.css'
import project1 from '../../../images/project1.png'
import Git from "../../../svg/Git";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import portfolio from '../../../images/portfolioo-img.png'
import ecommerce from '../../../images/ecommerce.png'
import lms from '../../../images/lms.png'
import freelancer from '../../../images/freelancer.png'
import cake from '../../../images/cake.png'
import form from '../../../images/form.png'
import todo from '../../../images/todo.png'
import scooter from '../../../images/scooter.png'
import facebook from '../../../images/facebook.png'
import battery from '../../../images/battery.png'
import shose from '../../../images/shose.png'
import service from '../../../images/service.png'
import ambulance from '../../../images/ambulance.png'
import plant from '../../../images/plant.png'
import batteryUI from '../../../images/batteryUI.png'
import houseUI from '../../../images/houseUI.png'
import fastfoodUI from '../../../images/fastfoodUI.png'
import fooddeleveryUI from '../../../images/fooddeleveryUI.png'
import loginUI from '../../../images/loginUI.png'
import shoseUI from '../../../images/shoseUI.png'
import headphoneUI from '../../../images/headphoneUI.png'
import cover from '../../../images/cover.png'
import saloon from '../../../images/saloon.png'
import blud from '../../../images/blud.png'
import lap from '../../../images/lap.png'
import tree from '../../../images/tree.png'
import Behance from '../../../svg/Behance';


const Projects = () => {

    const [activeSection, setActiveSection] = useState ('web')

    const handleSectionChange = (section) => {
        setActiveSection(section);
      };

    const webData = [
        {id:1, project_img: portfolio ,projectName:"PORTFOLIO WEBSITE", githubIcon:<Git/>, description:"This is my portfolio website, here I’m using React JS and CSS for the front end. It is a responsive website for all devices.  It contains my picture, certificate details, course details, project details, and my details." },
        {id:2, project_img: ecommerce,projectName:"ECOMMERCE - FRONTEND", githubIcon:<Git/>, description:"This is an E-commerce web application, created for selling headphones. I have designed the UI/UX using Figma software. And I’m doing its frontend part using React js and CSS." },
        {id:3, project_img: freelancer,projectName:"FREELANCER - FRONTEND", githubIcon:<Git/>, description:"This is a Home page of Freelancer website I have worked.  And also I have done the responsive part for this page and that responsive works in all devices. I have done the frontend part using React js and CSS." },
        {id:4, project_img: cake,projectName:"CAKE ORDER - FRONTEND ", githubIcon:<Git/>, description:"This is a cake order website for hotels. For the frontend development of this website, I have used HTML and CSS. Here we can see the home page of that website and it is linked with some content pages. " },
        {id:5, project_img: lms,projectName:"LMS SYSTEM - FRONTEND", githubIcon:<Git/>, description:"This is a simple web app , it is about the LMS system. In this web app Include five pages and popup window. In the popup window we can see students details. This was created frontend by using React js  and CSS." },
        {id:6, project_img: scooter,projectName:"SCOOTER SALE - FRONTEND", githubIcon:<Git/>, description:"This is a simple website for selling scooters, there is a sale for them, for that I have created this website. in this include four page (home,gallery/product/contact) This was created frontend by using React and CSS." },
        {id:7, project_img: todo,projectName:"TODO WEB APP", githubIcon:<Git/>, description:"This is a to-do web application I have created for practicing. This was created frontend by using HTML, CSS  JavaScript,   In this app, we can add items and when click Close button delete items. "},
        {id:8, project_img: form,projectName:"FORM VALIDATION", githubIcon:<Git/>, description:"This is a Contact Us page, here I have used form validation for practicing purposes. In this page form validation was used for email validation and password validation. This was created frontend by using React and CSS. "},
        {id:9, project_img: facebook,projectName:"FACEBOOK WEB PAGE", githubIcon:<Git/>, description:"This is a Facebook web page, I have created for learning react components. This was created frontend by using React and CSS. And also here I have used react icons for Navigation Bar."},
    ];
    const appData = [
        {id:1, project_img: battery ,projectName:"  BATTERY MANAGEMENT SYSTEM", githubIcon:<Git/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:2, project_img: shose,projectName:"ECOMMERCE SHOSE SALE APP", githubIcon:<Git/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:3, project_img: service,projectName:"CLEANING SERVICE APP", githubIcon:<Git/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:4, project_img: ambulance,projectName:"AMBULANCE LOCATION SYSTEM", githubIcon:<Git/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:5, project_img: plant,projectName:"IDENTIFY MEDICLE PLANTS", githubIcon:<Git/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
    ];
    const UiData = [
        {id:1, project_img: batteryUI ,projectName:"BATTERY MANAGEMENT UI", githubIcon:<Behance/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:2, project_img: houseUI,projectName:"RENT OF HOUSE UI", githubIcon:<Behance/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:3, project_img: fastfoodUI,projectName:"FOOD DELEVERY UI", githubIcon:<Behance/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:4, project_img: fooddeleveryUI,projectName:"FOOD DELEVERY UI", githubIcon:<Behance/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:5, project_img: loginUI,projectName:"LOGIN / SIGN UP UI", githubIcon:<Behance/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:6, project_img: shoseUI,projectName:"SHOSE APP UI", githubIcon:<Behance/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:7, project_img: headphoneUI,projectName:"E-COMMERCE UI", githubIcon:<Behance/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
    ];
    const GrapichData = [
        {id:1, project_img: cover ,projectName:"CRIMINAL IDENTIFICATION SYSTEM", githubIcon:<Behance/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:2, project_img: saloon,projectName:"CRIMINAL IDENTIFICATION SYSTEM", githubIcon:<Behance/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:3, project_img: blud,projectName:"CRIMINAL IDENTIFICATION SYSTEM", githubIcon:<Behance/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:4, project_img: tree,projectName:"CRIMINAL IDENTIFICATION SYSTEM", githubIcon:<Behance/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
        {id:5, project_img: lap,projectName:"CRIMINAL IDENTIFICATION SYSTEM", githubIcon:<Behance/>, description:"This is a group project that I worked on. I designed the UI/UX using Figma and implemented the front-end development using ReactJS. The website we developed is capable of identifying criminals and suspects using face detection." },
    ];

    var settings = {
        className: "center",
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 3,
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
              infinite: false,
              dots: true
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 2,
              infinite: false,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1.7,
              slidesToScroll: 2,
              infinite: false,
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
    <div id='project' className='project_container'>
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
