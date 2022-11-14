import React, { useContext } from 'react'

import AppContext from '../../../context/AppContext';

const Category = ({ name, selected, onClick }) => {

  const { store } = useContext(AppContext);
  const { borderColor } = store;
  const onClickAction = selected ? 'remove' : 'add';


  return (
    <button
      className={`m-2 rounded-full px-2 py-1 border-2 ${selected ? borderColor : 'border-gray-500'}  hover:opacity-70`}
      onClick={() => onClick(name, onClickAction)}
    >
      {name.replace('-', ' ')}
    </button>
  )
}

export default Category