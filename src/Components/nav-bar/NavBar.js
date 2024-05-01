import React, { useState } from 'react'
import './navBar.css'
import Menu from '../../svg/Menu'
import Close from '../../svg/Close'
import { Link } from 'react-scroll'
import Headroom from 'react-headroom'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
    const pageName = [
        {id:"about", name:'Home',url:"" },
        {id:"service", name:'Service', url:""},
        {id:"project", name:'Project', url:""},
        {id:"resume", name:'Resume', url:""},
        {id:"experience", name:'Experience', url:""},
        {id:"contact", name:'Contact', url:""},
    ]
  return (
    <Headroom>
      <div className='nav'>
    <div className='nav_container'>
      <div className='name'>
        <span className='n'>N</span>
        <span className='alin'>ALIN</span>
      </div>
      <div className='page_container'>
      <button className='menu_icon' onClick={toggleMenu}>
           {menuOpen ? <Close/> : <Menu /> } 
          </button>
      <ul className={menuOpen ? 'menu_open' : ''}>
                {pageName.map((item)=>(
                  <Link 
                  className='navname'
                  to={item.id} 
                  spy={true} 
                  smooth={true} 
                  offset={50} 
                  duration={500}>
                    <li>{item.name}</li>
                  </Link>
                    
                ))}
                
            </ul>
          
      </div>
    </div>
    <hr className='nav_line'/>
    </div>
    
    </Headroom>
    
  )
}

export default NavBar
