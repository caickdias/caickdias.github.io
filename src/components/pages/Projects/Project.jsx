import React from 'react'

const Project = ({ data }) => {
  
    const { name, description, categories, external_links } = data;
    
    return (
        <div className='w-32 h-24 m-2 min-h-[105px] bg-green-500'>
        {
            name
        }
        </div>
    )
}

export default Project