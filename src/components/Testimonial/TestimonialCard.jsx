import Image from 'next/image';
import React from 'react';

const TestimonialCard = ({test}) => {
  return (
    <div>
      <div className="card  bg-white shadow-xl">
        <figure className="px-10 pt-10">
          <Image
            className="hover:scale-110 transition-all duration-300"
            src={test?.img}
            alt="img"
            width={100}
            height={100}
          />
        </figure>
        <div className="card-body items-center text-center">
          <p className=" text-[#9D9D9D]">{test?.des}</p>
          <h1 className=" mt-2 text-[26px] font-semibold text-[#000]">
            {test?.name}
          </h1>
          <div className="card-actions">
            <h4 className=" text-[#000]">{test?.title}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;