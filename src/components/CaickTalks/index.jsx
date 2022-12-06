import React, { useContext, useEffect } from 'react'

import AppContext from '../../context/AppContext'
import GetName from './GetName';

const CaickTalks = () => {

  const { username, setUsername, showCaickTalks } = useContext(AppContext);

  const isVisible = showCaickTalks ? 1 : 0;

  useEffect(() => {
    console.log(showCaickTalks)
  }, []);

  

  return (
    <div className='absolute float-right top-0 bottom-0 left-30 w-40 h-fit z-50 p-2
      text-black font-bold bg-white 
      border-2 border-black rounded-t-xl rounded-bl-xl
      transition-all duration-500'
      style={{ opacity: `${isVisible}`}}
    >          

      <GetName />    
    
    </div>
  )
}

export default CaickTalks