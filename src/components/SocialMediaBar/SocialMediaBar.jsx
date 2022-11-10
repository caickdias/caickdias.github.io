import React from 'react'

import { ReactComponent as Linkedin } from '../../assets/linkedin.svg';
import { ReactComponent as Github } from '../../assets/github.svg';
import { ReactComponent as Email } from '../../assets/email.svg';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';

const SocialMediaBar = () => {
  return (
    <div className={`absolute z-20 left-0 right-0 bottom-0 mx-auto bg-zinc-900
        flex items-center justify-evenly
        w-72 h-12 rounded-tl-3xl rounded-tr-3xl        
        shadow-special-social shadow-blue-600 transition-all duration-300`}>        
        
        <Linkedin className='hover:scale-125 transition-all duration-300 ' />
        <Github className='hover:scale-125 transition-all duration-300 ' />
        <Instagram className='hover:scale-125 transition-all duration-300' />
        <Email className='hover:scale-125 transition-all duration-300 ' />                
      </div>
  )
}

export default SocialMediaBar