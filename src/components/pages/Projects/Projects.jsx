import React, { useState, useEffect } from 'react'

import { categories } from '../../../data/categories/projects';
import { projects } from '../../../data/projects';

import Category from './Category';
import Preview from './Preview';
import Project from './Project';

const Projects = ({ visible }) => {

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);  
  const selectedProject = filteredProjects[selectedProjectIndex];

  const isVisible = visible ? 0 : 1000;

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
      setFilteredProjects(selectedProjects);
    }    
    setSelectedProjectIndex(0);
  }, [selectedCategories]);
  

  return (
    <div 
        className='absolute p-8 flex flex-1 items-center justify-center flex-col w-full h-full transition-all duration-500'        
        style={{ transform: `translate(0, ${isVisible}px)` }}     
    >
        <div 
          className="flex items-center justify-center transition-all duration-500" 
          style={{ transform: `translate(0, -${isVisible*2}px)` }}                
        >
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

        <div 
          className='flex flex-1 flex-row p-8 overflow-hidden transition-all duration-500'           
          style={{ transform: `translate(0, ${isVisible}px)` }}     
        >          
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

          <Preview project={selectedProject} />
        </div>

    </div>
  )
}

export default Projects