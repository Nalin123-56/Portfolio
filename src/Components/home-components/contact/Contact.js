import React, { useState } from 'react'
import './contact.css'
import profile from '../../../images/pro-img1.png'
import Fb from '../../../svg/Fb'
import Git from '../../../svg/Git'
import LinkedIn from '../../../svg/LinkedIn'

const Contact = () => {
  
const [email,setemail]=useState('')
// const [passwd,setpasswd]=useState('')
const [name,setName]=useState('')
const [phone,setPhone]=useState('')
const [subject,setSubject]=useState('')
const [message,setmessage]=useState('')
const [errors,setErrors] = useState([])

const handleSubmit = (event)=>{
    event.preventDefault();
    const errors = validate();
    setErrors(errors);
    if(Object.keys(errors).length === 0){
        alert("Done")
    }
}

const validate =() =>{
    const error = {};

    if(!name){
        error.name="first name is required";
    }
    else {
        error.name="";
    }


    if(!phone){
        error.phone="phone number is required";
    }
    else if(phone.length < 10){
      error.phone="phone number not match";
  }
    else {
        error.phone="";
    }




    if(!subject){
        error.subject="subject is required";
    }
    else {
        error.subject="";
    }


    if(!message){
        error.message="message is required";
    }
    else {
        error.message="";
    }



    if(!email){
        error.email= "email is required";
        }
        else if(!/\S+@\S+\.\S+/.test(email)){
            error.email="email not match";
        }
        else{
            error.email="";
        }




        // if(!passwd){
        //     error.passwd= "password is required";
        //     }
        //     else if(passwd.length < 8){
        //         error.passwd="password not match";
        //     }
        //     else{
        //         error.passwd="";
        //     }

            return error;
    
}

const linkedin = 'https://www.linkedin.com/in/nalin-priyankara-580513275/';
  const github = 'https://github.com/Nalin123-56';
  const facebook = 'https://www.facebook.com/profile.php?id=100014221509513';

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
          <a href={facebook} target="_blank" rel="noopener noreferrer"  className="c_fb">
            <div  className="c_fb1">
               <Fb />
            </div>
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" className="c_git" >
            <div className="c_git1">
              <Git/>
            </div>
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="c_linkdin">
             <div className="c_linkdin1">
              <LinkedIn/>
            </div>
            </a>
          </div>
        </div>
       </div>
       <div className='right_contact'>
         <form onSubmit={handleSubmit}>
            <div className='name_section'>
            <div className='phone_parent'>
            <label className='label'>Name</label> <br/>
            <input className='name_input' type='text' placeholder='enter your name' onChange={(e)=>setName(e.target.value)}/><br/>
            {<div className="error"><span className='dot'>.</span>{errors.name}</div>}
            </div>
            
            <div className='phone_parent'>
            <label className='label'>Phone Number</label> <br/>
            <input className='phone_input' type='text' placeholder='enter your phone number' onChange={(e)=>setPhone(e.target.value)}/><br/>
            { <div className="error"><span className='dot'>.</span>{errors.phone}</div>}
            </div>
           
            </div>
            <div className='email_section'>
               <label className='label'>Email</label> <br/>
                <input className='email_input' type='text' placeholder='enter your email' onChange={(e)=>setemail(e.target.value)}/><br/>
                {<div className="error"><span className='dot'>.</span>{errors.email}</div>}
            </div>
            
            <div className='subject_section'>
                <label className='label'>Subject</label> <br/>
                <input className='subject_input' type='text' placeholder='enter your subject'  onChange={(e)=>setSubject(e.target.value)}/><br/>
                {<div className="error"><span className='dot'>.</span>{errors.subject}</div>}
            </div>
            
            <div className='message_section'>
                <label className='label'>Message</label> <br/>
                <input className='message_input' type='text' placeholder='enter your message' onChange={(e)=>setmessage(e.target.value)}/><br/>
                {<div className="error"><span className='dot'>.</span>{errors.message}</div>}
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
