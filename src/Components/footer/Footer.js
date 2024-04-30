import React from 'react'
import './footer.css'
import Fb from '../../svg/Fb'
import Git from '../../svg/Git'
import LinkedIn from '../../svg/LinkedIn'


const Footer = () => {

  const linkedin = 'https://www.linkedin.com/in/nalin-priyankara-580513275/';
  const github = 'https://github.com/Nalin123-56';
  const facebook = 'https://www.facebook.com/profile.php?id=100014221509513';


  return (
    <div id='footer' className='footer_container'>
          <hr className='footer_line'/>
       <div className='contact_icon_container'>
        <a href={facebook} target="_blank" rel="noopener noreferrer"  className="f_fb">
            <div >
               <Fb />
            </div>
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" className="f_git" >
            <div>
              <Git />
            </div>
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="f_linkdin">
             <div>
              <LinkedIn />
            </div>
            </a>
       </div>
    <p className='design_by'>Designed by Nalin Priyankara || All rights reserved.</p>
    </div>
  )
}

export default Footer
