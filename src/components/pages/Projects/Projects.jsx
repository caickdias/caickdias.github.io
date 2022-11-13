import React from 'react'

import { categories } from '../../../data/categories/projects';
import Category from './Category';

const Projects = () => {
  return (
    <div 
        className='absolute w-full h-full'
        style={{ transform: `translate(${0}px, 0)` }}                
    >
        <div className="flex items-center justify-center ">
        {
          categories.map(category => <Category name={category} />)
        }
        </div>

    </div>
  )
}

export default Projects