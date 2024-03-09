import React from 'react';

const SectionTitle = ({title,text}) => {
  return (
    <div className=" text-center md:text-left">
      <p className=" text-[#20B15A] font-medium poppins text-xl uppercase ">
        {title}
      </p>
      <h1 className="  text-[#000] font-semibold poppins text-[30px] mb-10 mt-3 md:w-[45%]">
        {text}
      </h1>
    </div>
  );
};

export default SectionTitle;