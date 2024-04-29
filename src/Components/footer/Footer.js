import React from 'react'
import './footer.css'
import Fb from '../../svg/Fb'
import Git from '../../svg/Git'
import LinkedIn from '../../svg/LinkedIn'


const Footer = () => {
  return (
    <div className='footer_container'>
          <hr className='footer_line'/>
       <div className='contact_icon_container'>
       <div className="f_fb">
               <Fb/>
            </div>
            <div className="f_git">
              <Git />
            </div>
            <div className="f_linkdin">
              <LinkedIn />
            </div>
       </div>
    <p className='design_by'>Designed by Nalin Priyankara || All rights reserved.</p>
    </div>
  )
}

export default Footer
