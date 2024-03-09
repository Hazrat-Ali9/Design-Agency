import Image from 'next/image';
import React from 'react';

const ReviewCard = ({dt}) => {
  return (
    <div className="hover:-translate-y-5 transition-all duration-300">
      <div className="py-12     rounded-2xl bg-white shadow-md">
        <div className="flex justify-center ">
          <div className="bg-[#D7F5DC] w-[100px] h-[100px] rounded-lg flex justify-center      ">
            <div>
              <figure className="px-8 pt-8  ">
                <Image
                  src={dt?.img}
                  alt="img"
                  width={35}
                  height={35}
                  className="    "
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                />
              </figure>
            </div>
          </div>
        </div>
        <div className=" items-center text-center">
          <h2 className=" mt-5 text-[#000] font-semibold poppins text-[30px]">
            {dt?.number}
          </h2>
          <p className=" poppins font-medium text-[#000]">{dt?.title}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;