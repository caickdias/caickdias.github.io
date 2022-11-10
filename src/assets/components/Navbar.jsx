import React from 'react'

import NavItem from './NavItem';

const Navbar = () => {
  return (
    <div className='relative z-10 p-8 py-8
        w-full h-12
        flex items-center justify-between'>
        
        <h1 className="text-5xl flex-1 relative z-10 font-['Kolker_Brush']">
            Caick Andrade
        </h1>

        <div className='flex flex-1 items-center justify-evenly h-12 transition-all duration-300'>
            <NavItem title="projects" />
            <NavItem title="skills" />            
            <NavItem title="blog" />
            <NavItem title="about me" />
        </div>
    </div>
  )
}

export default Navbar