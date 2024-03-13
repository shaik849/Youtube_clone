import React from 'react'

const Button = ({ name }) => {
    return (
      <button className='px-5 py-2 bg-gray-200 rounded-lg m-2 flex text-black'>
        {name}
      </button>
    );
  };

export default Button