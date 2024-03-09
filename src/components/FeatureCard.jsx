import Image from 'next/image';
import React from 'react';

const FeatureCard = ({fd}) => {
  return (
    <div>
      <div className=" ">
        <Image
          className="hover:scale-105 transition-all duration-300"
          src={fd?.img}
          alt="m"
          width={287}
          height={188}
        />
        <p className=" text-[#2E3E5C] text-[14px] mt-4">{fd?.title}</p>
        <h1 className=" text-[#2E3E5C] font-bold text-[18px]">{fd?.text}</h1>
      </div>
    </div>
  );
};

export default FeatureCard;