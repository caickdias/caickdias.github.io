import React from 'react'

import '../App.css';

const HeroAvatar = () => {
  return (
    <div>                        
        <div className='absolute bottom-[7rem] top-0 right-32 left-0 m-auto 
        w-96 h-96 
        overflow-hidden transition-all duration-300 
        rounded-full 
        border-b-8 border-blue-700 border-dotted
        '>            
            
            <img className='absolute -bottom-0 top-0 right-0 left-0 m-auto             
            transition-all duration-300' 
            width={300}
            src={require('../assets/caick.png')} alt="not found"
            />

        </div>

    </div>
  )
}

export default HeroAvatar;