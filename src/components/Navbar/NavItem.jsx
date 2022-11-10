import React, { useContext } from 'react'

import AppContext from '../../context/AppContext';

const NavItem = ({ title, link="#" }) => {

  const { currentHoverBorderColor } = useContext(AppContext);

  return (
    <button className={`flex flex-1 items-center justify-center h-full 
    border-transparent border-b-2 ${currentHoverBorderColor}
    transition-all duration-300`}>        
      {title || 'empty'}        
    </button>
  )
}
export default NavItem