import React from 'react'

import '../App.css';

const HeroAvatar = () => {
  return (
    <div>                        
        <div className='absolute bottom-[7rem] top-0 right-32 left-0 m-auto 
        w-96 h-96 
        overflow-hidden transition-all duration-300 
        rounded-full caick 
        border-b-8 border-blue-700 border-dotted
        '>            
            
            <button className='absolute -top-6 bottom-0 left-0 -right-4 m-auto 
              z-30 w-[1.1rem] h-[1.1rem] tattoo 
              opacity-40'
              onClick={() => alert('tattoo')}
            >              
            </button>

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