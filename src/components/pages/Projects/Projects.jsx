import React, { useState, useEffect } from 'react'

import { categories } from '../../../data/categories/projects';
import { projects } from '../../../data/projects';

import Category from './Category';
import Project from './Project';

const Projects = () => {

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const handleCategorySelection = (category, action) => {
    if(action === 'add'){
      setSelectedCategories(categories => [...categories, category]);

    } else if(action === 'remove') {
      const newCategories = selectedCategories.filter(categoryName => categoryName !== category);
      setSelectedCategories(newCategories);
    }    
  }

  useEffect(() => {
    if(selectedCategories.length === 0){
      setFilteredProjects([...projects]);
    } else {
      const selectedProjects = projects.filter(project => {
        return project.categories.some(category => selectedCategories.includes(category))
      });
      console.log(selectedProjects);
      setFilteredProjects(selectedProjects);
    }
  }, [selectedCategories]);
  

  return (
    <div 
        className='absolute flex flex-1 flex-col w-full h-full p-2 '
        style={{ transform: `translate(${0}px, 0)` }}                
    >
        <div className="flex items-center justify-center">
        {
          categories.map(category => (
            <Category
              key={category} 
              name={category} 
              selected={selectedCategories.includes(category)}
              onClick={handleCategorySelection}
            />
          ))
        }
        </div>

        <div className='flex flex-1 flex-row p-8 overflow-hidden'>          
            <div className='flex flex-[2] pt-2 pl-8 pb-4 flex-wrap overflow-y-auto'>              
              {
                filteredProjects.map((project, index) => (
                  <Project 
                    key={index}
                    selected={selectedProjectIndex === index} 
                    data={project} 
                    onClick={() => setSelectedProjectIndex(index)}
                  />)
                )
              }                  
            </div>          

          <div className='flex flex-[2]'>

          </div>
        </div>

    </div>
  )
}

export default Projects