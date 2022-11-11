import React, { useContext } from 'react'

import AppContext from '../../context/AppContext';

const NavItem = ({ title, link="#" }) => {

  const { store } = useContext(AppContext);
  const { hoverBorderColor } = store;

  return (
    <button className={`flex flex-1 items-center justify-center h-full 
    border-transparent border-b-2 ${hoverBorderColor}
    transition-all duration-300`}>        
      {title || 'empty'}        
    </button>
  )
}
export default NavItem