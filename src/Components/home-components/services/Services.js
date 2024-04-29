import React from 'react'
import './services.css'
import ReactIcon from '../../../svg/ReactIcon';
import FigmaIcon from '../../../svg/FigmaIcon';
import PhotoshopIcon from '../../../svg/PhotoshopIcon';

const Services = () => {
    const serviceData = [
        {id:1,icon:<ReactIcon/>, name:'Web Development', description:"Behind the scenes, I build robust and efficient web applications that power your websites and applications. providing a seamless and engaging experience for users on the go."},
        {id:2,icon:<ReactIcon/>, name:'Mobile App Development', description:"Behind the scenes, I build robust and efficient web applications that power your websites and applications. providing a seamless and engaging experience for users on the go."},
        {id:3,icon:<FigmaIcon/>, name:'UI/UX Design', description:"Behind the scenes, I build robust and efficient web applications that power your websites and applications. providing a seamless and engaging experience for users on the go."},
        {id:4,icon:<PhotoshopIcon/>, name:'Graphic Design', description:"Behind the scenes, I build robust and efficient web applications that power your websites and applications. providing a seamless and engaging experience for users on the go."},
    ];
  return (
    <>
    <div className='services_container'>
    <hr className='service_line'/>
        <div className='topic_container'>
           <p className='service_that'>  SERVICES THAT I OFFER AS A FREELANCER</p>
            <h1 className='service_topic'>Services</h1> 
        </div>
       
       <div className='services'>
        {serviceData.map((item)=>( 
        <div key={item.id} className='service_section'>
            <div className='move_section'>
                    <div className='service_icon'>
                        {item.icon}
                    </div>
                    <h3 className='s_topic'>{item.name}</h3>
                    <p  className='s_description'>{item.description}</p>
            </div>
        </div>
        ))}
       </div>
    </div>
    </>
    
  )
}

export default Services
