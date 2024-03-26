import React from 'react'
import Button from './Button';


const list = [
    "All",
    "Gaming",
    "News",
    "Live",
    "HTML",
    "Programming",
    "CSS",
    "Biryani",
    "Programming",
    "CSS",
    "Biryani",
    "CSS",
  ];

const ButtonList = () => {
 


    
      return (
        <div className='flex justify-center'>
            {list.map((name, index) => (
              <Button key={index} name={name} />
            ))}
        </div>
      );

}

export default ButtonList