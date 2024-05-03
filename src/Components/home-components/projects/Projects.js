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
import weather from '../../../images/weather.png'
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
        {id:1, project_img: portfolio ,projectName:"PORTFOLIO WEBSITE", githubIcon:<Git/>, projectLink:"https://github.com/Nalin123-56/portfolio", description:"This is my portfolio website, here I’m using React JS and CSS for the front end. It is a responsive website for all devices.  It contains my picture, certificate details, course details, project details, and my details.",  },
        {id:2, project_img: ecommerce,projectName:"ECOMMERCE - FRONTEND", githubIcon:<Git/>,projectLink:"https://github.com/Nalin123-56/Ecommerce_website", description:"This is an E-commerce web application, created for selling headphones. I have designed the UI/UX using Figma software. And I’m doing its frontend part using React js and CSS.",  },
        {id:3, project_img: freelancer,projectName:"FREELANCER - FRONTEND", githubIcon:<Git/>,projectLink:"", description:"This is a Home page of Freelancer website I have worked.  And also I have done the responsive part for this page and that responsive works in all devices. I have done the frontend part using React js and CSS." , },
        {id:4, project_img: cake,projectName:"CAKE ORDER - FRONTEND ", githubIcon:<Git/>, projectLink:"https://github.com/Nalin123-56/restaurant_website", description:"This is a cake order website for hotels. For the frontend development of this website, I have used HTML and CSS. Here we can see the home page of that website and it is linked with some content pages. " , },
        {id:5, project_img: lms,projectName:"LMS SYSTEM - FRONTEND", githubIcon:<Git/>, projectLink:"https://github.com/Nalin123-56/Lms-web-App", description:"This is a simple web app , it is about the LMS system. In this web app Include five pages and popup window. In the popup window we can see students details. This was created frontend by using React js  and CSS.",},
        {id:6, project_img: scooter,projectName:"SCOOTER SALE - FRONTEND", githubIcon:<Git/>, projectLink:"https://github.com/Nalin123-56/scooter_shop_website", description:"This is a simple website for selling scooters, there is a sale for them, for that I have created this website. in this include four page (home,gallery/product/contact) This was created frontend by using React and CSS.",},
        {id:7, project_img: todo,projectName:"TODO WEB APP", githubIcon:<Git/>, projectLink:"https://github.com/Nalin123-56/TODO_WebApp", description:"This is a to-do web application I have created for practicing. This was created frontend by using HTML, CSS  JavaScript,   In this app, we can add items and when click Close button delete items. ", },
        {id:8, project_img: form,projectName:"FORM VALIDATION", githubIcon:<Git/>, projectLink:"https://github.com/Nalin123-56/form-validate-", description:"This is a Contact Us page, here I have used form validation for practicing purposes. In this page form validation was used for email validation and password validation. This was created frontend by using React and CSS. "},
        {id:9, project_img: facebook,projectName:"FACEBOOK WEB PAGE", githubIcon:<Git/>,projectLink:"https://github.com/Nalin123-56/react_webpage", description:"This is a Facebook web page, I have created for learning react components. This was created frontend by using React and CSS. And also here I have used react icons for Navigation Bar.",},
    ];
    const appData = [
        {id:1, project_img: battery ,projectName:"  BATTERY MGT SYSTEM", githubIcon:<Git/>, projectLink:"https://github.com/Nalin123-56/battery-management-system", description:"This is battery management mobile application. I have used for frontend react native. It has screen with popup window. It is a navigate by using stack navigation. Progress bar created using libraries." },
        {id:2, project_img: shose,projectName:"E-COM SHOSE SALE APP", githubIcon:<Git/>, projectLink:"https://github.com/Nalin123-56/Shoes-Sale-App", description:"This is an E-Commerce shoes sale mobile App. This has created by using react native expo. I have created frontend part only. It is a navigate by using stack navigation. It has converted into web App." },
        {id:3, project_img: service,projectName:"CLEANING SERVICE APP", githubIcon:<Git/>, projectLink:"", description:"This is a cleaning service mobile application created frontend using react native expo.  It includes 7 screens with a splash screen. It has used stack navigation and bottom navigation for navigate. It has used svg also." },
        {id:4, project_img: ambulance,projectName:" LOCATION DETECT APP", githubIcon:<Git/>, projectLink:"https://github.com/Nalin123-56/Location-App", description:"This is an ambulance location system, it has created by using locations of ambulances. It includes login and signup pages. And also it includes 4 screens with splash screen.  I have created frontend part only. " },
        {id:5, project_img: plant,projectName:"IDENTIFY MEDICLE PLANTS", githubIcon:<Git/>, projectLink:"https://github.com/Nalin123-56/plant-identify-App", description:"This is a mobile application for identifying  plants, it was created by using React native expo. It is used for capturing images and identifying them. This was developed for our final-year research project." },
    ];
    const UiData = [
        {id:1, project_img: batteryUI ,projectName:"BATTERY MGT UI", githubIcon:<Behance/>, projectLink:"https://www.behance.net/gallery/197640777/Battery-managment-System-UI", description:"This is a user interface for a battery management application. It was designed using figma software. This includes five screen with pop up window and This was done for a research project." },
        {id:2, project_img: houseUI,projectName:"RENT OF HOUSE UI", githubIcon:<Behance/>, projectLink:"https://www.behance.net/gallery/180016727/Estate-App-UI-Design", description:"This is a user interface for a rent of houses.  It was designed using figma software.  This includes three screens with login screen. Photoshop software was also used for this.  This was done for a assignment." },
        {id:3, project_img: fastfoodUI,projectName:"FOOD DELEVERY UI", githubIcon:<Behance/>, projectLink:"https://www.behance.net/gallery/197641133/Food-Delevery-App-UI",  description:"This is a user interface for a food delevery.  It was designed using figma software.  This includes three screens with login screen. Photoshop software was also used for this.  This was done for a assignment." },
        {id:4, project_img: fooddeleveryUI,projectName:"FOOD DELEVERY UI", githubIcon:<Behance/>, projectLink:"https://www.behance.net/gallery/178983187/Food-delivery-App-UI-design", description:"This is a user interface for a food delevery.  It was designed using figma software.  This includes three screens with start screen. Photoshop software was also used for this.  This was done study figma." },
        {id:5, project_img: loginUI,projectName:"LOGIN / SIGN UP UI", githubIcon:<Behance/>, projectLink:"https://www.behance.net/gallery/178978705/User-login-Page-UI-design", description:"This is a user interface for a login to account.  It was designed using figma. This includes three screens (login, signup, change password).  Photoshop software was also used. This was done for study figma." },
        {id:6, project_img: shoseUI,projectName:"SHOSE APP UI", githubIcon:<Behance/>, projectLink:"https://www.behance.net/gallery/179055583/Shoes-salling-App-UI-design-for-Ecommerce-industry", description:"This is a user interface for a shoes sale.  It was designed using figma software.  This includes three screens with start screen.  Photoshop software was also used for this.  This is to enhance my knowledge" },
        {id:7, project_img: headphoneUI,projectName:"E-COMMERCE UI", githubIcon:<Behance/>, projectLink:"https://www.behance.net/gallery/178978231/Dashboard-design-in-the-Ecommerce-industry", description:"This is a user interface for an e-commerce application.  It was designed using figma software.  Features like navigation bar, offer section are included here.  Photoshop software was also used for this." },
        {id:7, project_img: weather,projectName:"Weather App UI", githubIcon:<Behance/>, projectLink:"https://www.behance.net/gallery/178984191/Weather-App-UI-design", description:"This is a user interface for an application to know the weather.  It was designed using figma software.  Features like rainfall, temperature are included here.  Photoshop software was also used for this." },
    ];
    const GrapichData = [
        {id:1, project_img: cover ,projectName:"COVER PAGE DESIGN", githubIcon:<Behance/>, projectLink:"", description:"This is a cover page for a book.  Designed using Adobe Photoshop.  This was done for an assignment." },
        {id:2, project_img: saloon,projectName:"BEAUTY ADVERTISEMENT", githubIcon:<Behance/>, projectLink:"", description:"This is a poster for a sell cosmetics.  Designed using Adobe Photoshop.  This was done for an assignment." },
        {id:3, project_img: blud,projectName:"BLOOD DONATION POSTER", githubIcon:<Behance/>, projectLink:"", description:"This is a poster for a blood Donation Campaign.  Designed using Photoshop. this was done for an assignment." },
        {id:4, project_img: tree,projectName:"TREE PLANTATION POSTER", githubIcon:<Behance/>, projectLink:"", description:"This is a poster for a Tree Plantation Programme.  Designed using Photoshop.  This was done for an assignment." },
        {id:5, project_img: lap,projectName:"LAP SALE POSTER", githubIcon:<Behance/>, projectLink:"", description:"This is a poster for a laptop sale.  Designed using Adobe Photoshop.  This was done for an assignment." },
    ];

    var settings = {
        className: "center",
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
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
            breakpoint: 1540,
            settings: {
              slidesToShow: 3.5,
              slidesToScroll: 3,
              infinite: false,
              dots: true
            }
          },
          {
            breakpoint: 1200,
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
              slidesToShow: 1.8,
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

      const portfolioLink = 'https://github.com/Nalin123-56/portfolio';
      const headphoneLink = 'https://github.com/Nalin123-56/Ecommerce_website';
      const freelacerLink = "";
      const cakeorderLink = "https://github.com/Nalin123-56/restaurant_website";
      const lmsLLink = "https://github.com/Nalin123-56/Lms-web-App";
      const scooterLink = "https://github.com/Nalin123-56/scooter_shop_website";
      const todoLink = "https://github.com/Nalin123-56/TODO_WebApp";
      const validateLink = "https://github.com/Nalin123-56/form-validate-";
      const facebookLink = "https://github.com/Nalin123-56/react_webpage";

      const batteryApplink="https://github.com/Nalin123-56/battery-management-system";
      const shoseAppLink ="https://github.com/Nalin123-56/Shoes-Sale-App";
      const serviceAppLink ="";
      const ambulanceAppLink ="https://github.com/Nalin123-56/Location-App";
      const plantAppLink ="https://github.com/Nalin123-56/plant-identify-App";

      const batteryUILink ="";
      const houseUILink ="https://www.behance.net/gallery/180016727/Estate-App-UI-Design";
      const fastFoodUILink ="";
      const foodDeleveryUILink ="https://www.behance.net/gallery/178983187/Food-delivery-App-UI-design";
      const loginUILink ="https://www.behance.net/gallery/178978705/User-login-Page-UI-design";
      const shoseUUILink ="https://www.behance.net/gallery/179055583/Shoes-salling-App-UI-design-for-Ecommerce-industry";
      const headphoneUILink ="https://www.behance.net/gallery/178978231/Dashboard-design-in-the-Ecommerce-industry";
      const weatherUILink = "https://www.behance.net/gallery/178984191/Weather-App-UI-design";

      const coverLink ="";
      const saloonLink ="";
      const bludLink ="";
      const lapLink ="";
    
  return (
    <div id='project' className='project_container'>
         <hr className='project_line'/>
        <div className='project_topic'>
            <p className='my_work'>MY WORKS, PROJECTS & CONTRIBUTIONS</p>
            <h1 className='proj'>Projects</h1>
        </div>

        <div className='web_project_navbar'>
           <button className={`proj_button ${activeSection ==='web' ? 'active' : ''}`}onClick={() => handleSectionChange('web')}> Web Development</button>
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
                    <a href={item.projectLink} target="_blank" rel="noopener noreferrer" className='github_icon'>
                       <div>
                        {item.githubIcon}
                    </div>
                    </a>
                   
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
                    <a href={item.projectLink} target="_blank" rel="noopener noreferrer" className='github_icon'>
                        <div>
                        {item.githubIcon}
                    </div>
                    </a>
                  
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
                    <a href={item.projectLink} target="_blank" rel="noopener noreferrer" className='github_icon'>
                    <div>
                        {item.githubIcon}
                    </div>
                    </a>
                    
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
                    <a href={item.projectLink} target="_blank" rel="noopener noreferrer" className='github_icon'>
                    <div>
                        {item.githubIcon}
                    </div>
                    </a>
                   
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
