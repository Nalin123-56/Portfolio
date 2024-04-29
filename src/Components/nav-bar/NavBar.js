import React from 'react'
import './navBar.css'

const NavBar = () => {
    const pageName = [
        {id:1, name:'Home', url:""},
        {id:2, name:'Service', url:""},
        {id:3, name:'Project', url:""},
        {id:4, name:'Resume', url:""},
        {id:5, name:'Experience', url:""},
        {id:6, name:'Contact', url:""},
    ]
  return (
    <div className='nav'>
    <div className='nav_container'>
      <div className='name'>
        <span className='n'>N</span>
        <span className='alin'>ALIN</span>
      </div>
      <div className='page_container'>
            <ul>
                {pageName.map((item)=>(
                    <li>{item.name}</li>
                ))}
                
            </ul>
      </div>
    </div>
    <hr className='nav_line'/>
    </div>
    
  )
}

export default NavBar
