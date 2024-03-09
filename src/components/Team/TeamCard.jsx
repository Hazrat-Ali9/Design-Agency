import Image from 'next/image';
import React from 'react';

const TeamCard = ({t}) => {
  return (
    <div className=" relative">
      <div className="card card-compact hover:scale-105 transition-all duration-300  bg-base-100 shadow-lg">
        <figure>
          <Image src={t?.img} alt="team" width={390} height={390} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center flex justify-center mt-5 pb-7 text-[#101A29] text-[30px] font-semibold">
            {t?.name}
          </h2>
        </div>
      </div>
      <div className=" translate-y-[50%] -translate-x-[50%] absolute left-1/2 flex  bg-white py-5 px-4 rounded-full top-1/2">
        <div className=" border-r border-[#E3E3E3] pr-4 ">
          <Image
            src="/f.png"
            alt="f"
            width={10}
            height={16}
            style={{
              width: "auto",
              height: "auto",
            }}
          />
        </div>
        <div className=" border-r border-[#E3E3E3] px-4 ">
          <Image
            className=" "
            src="/t.png"
            alt="t"
            width={16}
            height={16}
            priority={false}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div className="  pl-4 ">
          <Image
            src="/i.png"
            alt="i"
            width={14}
            height={16}
            style={{
              width: "auto",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;