import React, { useContext, useEffect } from 'react'

import AppContext from '../context/AppContext'

const CaickTalks = () => {

  const { username, setUsername, showCaickTalks } = useContext(AppContext);

  const isVisible = showCaickTalks ? 1 : 0;

  useEffect(() => {
    console.log(showCaickTalks)
  }, []);

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  }

  const handleKeyDown = event => {
    if(event.key === 'Enter'){
      alert('opa')
    }
  }

  return (
    <div className='absolute float-right top-0 bottom-0 left-30 w-40 h-fit z-50 p-2
      text-black font-bold bg-white 
      border-2 border-black rounded-t-xl rounded-bl-xl
      transition-all duration-500'
      style={{ opacity: `${isVisible}`}}
    >          
        
        Hello there! I'd be pleased to know your name:
        
        <input 
            className='w-full border-b-2 border-gray-500' 
            type="text"
            onChange={handleUsernameChange}
            onKeyDown={handleKeyDown}
        ></input>
    </div>
  )
}

export default CaickTalks