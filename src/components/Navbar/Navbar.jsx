import React from 'react'

import NavItem from './NavItem';

const Navbar = () => {

  return (
    <div className='relative z-10 py-12
        w-full h-16
        flex items-center justify-between'>
        
        <h1 className="text-center text-[4rem] flex-1 relative z-10 font-['Kolker_Brush']">
            Caick Andrade
        </h1>

        <div className='flex flex-1 items-center justify-evenly h-16 transition-all duration-300'>
            <NavItem title="projects" />
            <NavItem title="skills" />            
            <NavItem title="blog" />
            <NavItem title="about me" />
        </div>
    </div>
  )
}

export default Navbar