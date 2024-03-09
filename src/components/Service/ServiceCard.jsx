import Image from 'next/image';
import ServiceImgCard from './ServiceImgCard';


const ServiceCard = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* <div>
        <h1>Build & Launch without problems</h1>
        <p>
          Increase your team’s productivity and save time with a bot that
          answers and fields customer inquiries
        </p>
        <div>
          <ServiceImgCard
            img1="/s1.png"
            img2="/s2.png"
            img3="/s3.png"
            img4="/s4.png"
          />
        </div>
        <Image src="/Group 7038.png" alt="img1" width={604} height={694} />
      </div>
      <div>
        <Image src="/Group 7038 (1).png" alt="img1" width={604} height={694} />
      </div>
      <div>
        <Image src="/Group 7038 (2).png" alt="img1" width={604} height={694} />
      </div>
      <div>
        <Image src="/Group 7038 (4).png" alt="img1" width={604} height={694} />
      </div> */}
      <div className=' bg-white shadow-xl rounded-[20px] py-10 px-7'>
        <h1 className=" text-[#000] font-semibold text-[26px] mb-4">
          Build & Launch without problems
        </h1>
        <p className=" text-[#9D9D9D] capitalize mb-5">
          Increase your team’s productivity and save time with a bot that
          answers and fields customer inquiries
        </p>
        <div>
          <ServiceImgCard
            img1="/s1.png"
            img2="/s2.png"
            img3="/s3.png"
            img4="/s4.png"
          />
        </div>
      </div>
      <div className=' bg-white shadow-xl rounded-[20px] py-10 px-7'>
        <h1 className=" text-[#000] font-semibold text-[26px] mb-4">
          Build & Launch without problems
        </h1>
        <p className=" text-[#9D9D9D] capitalize mb-5">
          Increase your team’s productivity and save time with a bot that
          answers and fields customer inquiries
        </p>
        <div>
          <ServiceImgCard
            img1="/s5.png"
            img2="/s6.png"
            img3="/s7.png"
            img4="/s8.png"
          />
        </div>
      </div>
      <div className=' bg-white shadow-xl rounded-[20px] py-10 px-7'>
        <h1 className=" text-[#000] font-semibold text-[26px] mb-4">
          Build & Launch without problems
        </h1>
        <p className=" text-[#9D9D9D] capitalize mb-5">
          Increase your team’s productivity and save time with a bot that
          answers and fields customer inquiries
        </p>
        <div>
          <ServiceImgCard
            img1="/s9.png"
            img2="/s10.png"
            img3="/s11.png"
            img4="/s12.png"
          />
        </div>
      </div>
      <div className=' bg-white shadow-xl rounded-[20px] py-10 px-7'>
        <h1 className=" text-[#000] font-semibold text-[26px] mb-4">
          Build & Launch without problems
        </h1>
        <p className=" text-[#9D9D9D] capitalize mb-5">
          Increase your team’s productivity and save time with a bot that
          answers and fields customer inquiries
        </p>
        <div>
          <ServiceImgCard
            img1="/s13.png"
            img2="/s14.png"
            img3="/s15.png"
            img4="/s16.png"
          />
        </div>
      </div>
      
    </div>
  );
};

export default ServiceCard;