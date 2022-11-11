import React from 'react'

const ColorPicker = ({ onThemeChange }) => {

    const colors = ['blue', 'red', 'green', 'orange'];

    const Square = ({ color }) => {        
        return(
            <button                     
                style={{ backgroundColor: `${color}`, width: 20, height: 20}}
                onClick={() => onThemeChange(color)}
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