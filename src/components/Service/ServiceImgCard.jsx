import Image from 'next/image';
import React from 'react';

const ServiceImgCard = ({img1,img2,img3,img4}) => {
  return (
    <div className=" ">
      <div className=" grid grid-cols-12">
        <div className=" col-span-9">
          <Image
            src={img1}
            alt="s1"
            width={358}
            height={164}
            style={{
              width: "auto",
              height: "auto",
            }}
          />
        </div>
        <div className=" col-span-3">
          <Image
            src={img2}
            alt="s1"
            width={143}
            height={164}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
      <div className=" grid grid-cols-12">
        <div className=" col-span-6">
          <Image
            src={img3}
            alt="s1"
            width={257}
            height={263}
            style={{
              width: "auto",
              height: "auto",
            }}
          />
        </div>
        <div className=" col-span-6">
          <Image
            src={img4}
            alt="s1"
            width={248}
            height={263}
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

export default ServiceImgCard;