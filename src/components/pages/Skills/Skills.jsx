import React from 'react'
import MemoryGame from '../MemoryGame/MemoryGame';

const Skills = ({ visible }) => {

    const isVisible = visible ? 1 : 0;

    return (
        <div 
            className='absolute top-0 bottom-0 left-0 right-0 m-auto transition-all duration-500'
            style={{ transform: `scale(${isVisible})` }}
        >
            <MemoryGame />
        </div>
    )
}

export default Skills