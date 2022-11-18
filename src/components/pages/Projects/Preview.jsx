import React from 'react'

const Preview = ({ project }) => {
   
  return (
    <div className='flex flex-[2] flex-col'>
            <div className='flex items-center justify-center w-full h-1/2'>
            {              
              <video controls            
                className='max-h-full'    
                src={require(`../../../assets/projects/divideai/divideai.mp4`)} 
                alt='not found'                
              />
            }
            </div>

            <div className='flex flex-col items-center justify-center p-4 text-gray-400'>
              
              <Title title={project?.name || ''} />
              
              <Description text={project?.description || ''} />
                  
              <Categories categories={project?.categories || []} />

              <div className='flex justify-evenly items-center w-full'>
              {
                project && 
                Object.entries(project?.external_links)?.map(([name, link]) => <Link name={name} link={link} />)
              }
              </div>
            </div>

          </div>
  )

  
}

const Title = ({ title }) => {
  return <h1 className='font-bold text-xl text-[#dfe4ea]'>
    {title}
  </h1>
}

const Description = ({ text }) => {
  return  <h1 className='text-base'>
    {text}
  </h1>         
}

const Categories = ({ categories }) => {
  return <span className='m-4'>
        Categories: [ {
        <span> {categories.join(', ').replace('-', ' ')}</span>                  
      }]
    </span>
}

const Link = ({ name, link }) => {
  return <a 
    key={link} 
    className='underline text-blue-400 font-' 
    href={link} 
    target="_blank" 
    rel="noreferrer" >
      {name}
    </a>
}

export default Preview