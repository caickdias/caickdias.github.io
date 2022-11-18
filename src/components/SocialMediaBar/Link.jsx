import React from 'react'

const Link = ({ Icon, link }) => {

    
    return (
        <a
            className='hover:scale-125 transition-all duration-300'
            href={link}
            target="_blank" 
            rel="noreferrer"
        >
            <Icon />
        </a>
  )
}

export default Link