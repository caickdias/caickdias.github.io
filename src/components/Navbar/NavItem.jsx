import React from 'react'

const NavItem = ({ title, link="#" }) => {
  return (
    <button className='flex flex-1 items-center justify-center  h-full border-transparent border-b-2 hover:border-blue-600 transition-all duration-300'>        
      {title || 'empty'}        
    </button>
  )
}
export default NavItem