import Image from 'next/image';
import React from 'react';

const ProjectCard = ({pr}) => {
  return (
    <div className=" pt-10 pl-[30px] pr-[30px] pb-[30px] shadow-lg rounded-2xl">
      <Image className='hover:scale-105 transition-all duration-300' src={pr?.img} alt="img" width={544} height={472} />
      <h1 className=' text-[#000] font-semibold text-[26px] mt-7 '>{pr?.name}</h1>
    </div>
  );
};

export default ProjectCard;