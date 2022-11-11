import React, { useState, useContext } from 'react'

import AppContext from '../context/AppContext';

import '../App.css';
import ColorPicker from './ColorPicker';


const HeroAvatar = () => {

  const { currentBgColor, currentBorderColor } = useContext(AppContext);
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <div>                        
        <div className={`absolute bottom-[7rem] top-0 right-32 left-0 m-auto 
        w-96 h-96 
        overflow-hidden transition-all duration-300 
        rounded-full caick 
        border-b-8 ${currentBorderColor} border-dotted
        `}>            
            
            <button className='absolute -top-6 bottom-0 left-0 -right-4 m-auto 
              z-30 w-[1.1rem] h-[1.1rem] tattoo 
              opacity-40 transition-all duration-300'
              onClick={() => setShowColorPicker(!showColorPicker)}
            >              
            </button>

            
              <img
                style={{ opacity: `${currentBgColor === 'bg-red-500' ? 100 : 0}` }} 
                className='absolute -bottom-0 top-0 right-0 left-0 m-auto             
                transition-all duration-500' 
                width={300}
                src={require('../assets/caick-red.png')} alt="not found"
              />
                        
              <img 
                style={{ opacity: `${currentBgColor === 'bg-blue-500' ? 100 : 0}` }} 
                className='absolute -bottom-0 top-0 right-0 left-0 m-auto             
                transition-all duration-500' 
                width={300}
                src={require('../assets/caick-blue.png')} alt="not found"
              />

              <img 
                style={{ opacity: `${currentBgColor === 'bg-green-500' ? 100 : 0}` }} 
                className='absolute -bottom-0 top-0 right-0 left-0 m-auto             
                transition-all duration-500' 
                width={300}
                src={require('../assets/caick-green.png')} alt="not found"
              />

              <img 
                style={{ opacity: `${currentBgColor === 'bg-orange-500' ? 100 : 0}` }} 
                className='absolute -bottom-0 top-0 right-0 left-0 m-auto             
                transition-all duration-500' 
                width={300}
                src={require('../assets/caick-orange.png')} alt="not found"
              />
            

            <div 
              style={{ opacity: `${showColorPicker ? 100 : 0}` }}
              className='absolute top-10 bottom-0 right-28
              z-30 w-8 h-28 transition-all duration-300'>
              <ColorPicker />
            </div>

        </div>

    </div>
  )
}

export default HeroAvatar;