import React from 'react'

import { categories } from '../../../data/categories/projects';
import { projects } from '../../../data/projects';

import Category from './Category';
import Project from './Project';

const Projects = () => {
  return (
    <div 
        className='absolute flex flex-1 flex-col w-full h-full p-2 '
        style={{ transform: `translate(${0}px, 0)` }}                
    >
        <div className="flex items-center justify-center ">
        {
          categories.map(category => <Category name={category} />)
        }
        </div>

        <div className='flex flex-1 flex-row p-8 overflow-hidden'>          
            <div className='flex flex-[3] pt-2 pl-8 pb-4 flex-wrap overflow-y-auto'>              
              {
                projects.map(project => <Project data={project} />)
              }                  
            </div>          

          <div className='flex flex-[2]'>

          </div>
        </div>

    </div>
  )
}

export default Projects