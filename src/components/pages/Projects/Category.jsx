import React, { useContext } from 'react'

import AppContext from '../../../context/AppContext';

const Category = ({ name }) => {

  const { store } = useContext(AppContext);
  const { borderColor } = store;
  const selected=false;

  return (
    <button
      className={`m-2 rounded-full px-2 py-1 border-2 ${selected ? borderColor : 'border-gray-500'}  hover:opacity-70`}
    >
      {name.replace('-', ' ')}
    </button>
  )
}

export default Category