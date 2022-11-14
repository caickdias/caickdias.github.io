import React from 'react'

const Skills = ({ visible }) => {

    const isVisible = visible ? 100 : 0;

    return (
        <div 
            className='absolute top-0 bottom-0 left-0 right-0 m-auto bg-cyan-800 transition-all duration-500'
            style={{ width: `${isVisible}%`, height: `${isVisible}%` }}
        >

        </div>
    )
}

export default Skills