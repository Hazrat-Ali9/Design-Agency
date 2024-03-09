import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const SingleWork = ({work}) => {
  return (
    <div className=" py-12 px-7">
      <Image
        className="hover:scale-105 transition-all duration-300"
        src={work?.img}
        alt="img"
        width={100}
        height={100}
        style={{
          width: "auto",
          height: "auto",
        }}
      />
      <h1 className=" py-4 font-semibold poppins text-[24px] text-[#000]">
        {work?.title}
      </h1>
      <p className=" font-sans text-[18px] text-[#000]">{work?.text}</p>
      <button className="btn bg-white outline-none border-none shadow-none text-[18px] text-[#000] font-normal mt-8">
        Learn More
        <FaArrowRightLong />
      </button>
    </div>
  );
};

export default SingleWork;