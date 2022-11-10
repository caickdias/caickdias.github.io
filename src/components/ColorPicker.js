import React, { useContext } from 'react'

import AppContext from '../context/AppContext';

const ColorPicker = () => {

    const { setCurrentBgColor, setCurrentShadowColor, setCurrentTextColor, setCurrentBorderColor, setCurrentHoverBorderColor } = useContext(AppContext);
    const colors = ['blue', 'red', 'green', 'orange'];

    const Square = ({ color }) => {        
        return(
            <button                     
                style={{ backgroundColor: `${color}`, width: 20, height: 20}}
                onClick={() => {
                    setCurrentTextColor('text-red-500')
                    setCurrentBorderColor('border-red-500');
                    setCurrentHoverBorderColor('hover:border-red-500');
                    setCurrentBgColor('bg-red-500');
                    setCurrentShadowColor('shadow-red-500');
                }}
            >
                
            </button>
        )
    }

    return (
        <div className='flex flex-col items-center justify-evenly
        z-30 w-full h-full
        rounded-xl rounded-bl-none
        bg-gray-200'>            
        {            
            colors.map(color => <Square key={color} color={color} />)
        }
        </div>
    )
}

export default ColorPicker