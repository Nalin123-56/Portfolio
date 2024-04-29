import React from 'react'
import './contact.css'
import profile from '../../../images/pro-img1.png'
import Fb from '../../../svg/Fb'
import Git from '../../../svg/Git'
import LinkedIn from '../../../svg/LinkedIn'

const Contact = () => {
  return (
    <>
    <div className='full_contact_container'>
    <hr className='contact_line'/>
    <h2 className='contact'>CONTACT</h2>
     <div className='contact_container'>
       <div className='left_contact'>
         <img className='contact_img' src={profile} alt=''/>
         <h5 className='contact_name'>Nalin Priyankara</h5>
         <p className='contact_possition'>Softwere Developer</p>
         <p className='contact_details'>I'm all ears for your feedback, and if my skills align with your needs, feel free to get in touch. Let's make things happen!</p>
         <p className='contact_number'><span className='phone'>Phone : </span>+94717049257</p>
         <div className='contact_email'><span className='email'>Email :</span> udayanalinpriyankara@gmail.com</div>
       
         <p className="c_find">FIND ME ON</p>
        <div className="c_find_container">
          <div className="c_find_icon">
            <div className="c_fb">
               <Fb />
            </div>
            <div className="c_git">
              <Git />
            </div>
            <div className="c_linkdin">
              <LinkedIn />
            </div>
          </div>
        </div>
       </div>
       <div className='right_contact'>
         <form>
            <div className='name_section'>
            <div className='phone_parent'>
            <label className='label'>Name</label> <br/>
            <input className='name_input' type='text' placeholder='enter your name'/><br/>
            </div>
            
            <div className='phone_parent'>
            <label className='label'>Phone Number</label> <br/>
            <input className='phone_input' type='text' placeholder='enter your phone number'/><br/>
            </div>
           
            </div>
            <div className='email_section'>
               <label className='label'>Email</label> <br/>
                <input className='email_input' type='text' placeholder='enter your email'/><br/>
            </div>
            
            <div className='subject_section'>
                <label className='label'>Subject</label> <br/>
                <input className='subject_input' type='text' placeholder='enter your subject'/><br/>
            </div>
            
            <div className='message_section'>
                <label className='label'>Message</label> <br/>
                <input className='message_input' type='text' placeholder='enter your message'/><br/>
          
            </div>
           
         <button className='sent_button'>Sent message</button>
         </form>
       </div>
    </div>
    </div>
 
    </>
   
  )
}

export default Contact
