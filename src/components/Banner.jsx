import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div>
      <header className="pb-56 pt-32 dark:bg-[#D7F5DC]">
        <div className="container px-6 py-6 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-[#000] lg:font-bold lg:text-5xl poppins  ">
                  Increase Your Customers Loyalty and Satisfaction
                </h1>

                <p className="mt-4 text-xl font-sans font-semibold text-[#000] mb-10">
                  We help businesses like yours earn more customers, standout
                  from competitors, make more money
                </p>

                <button className="w-full px-7 py-4 mt-6 text-xl font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-[#20B15A] rounded-2xl lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  Get Started
                </button>
              </div>
            </div>

            <div className=" w-full mt-6 lg:mt-0 lg:w-1/2">
              <div className=" grid grid-cols-12 gap-4 mb-3">
                <Image
                  className=" col-span-8"
                  src="/ban1.png"
                  alt="ban1"
                  width={408}
                  height={271}
                />
                <Image
                  className=" col-span-4"
                  src="/ban2.png"
                  alt="ban1"
                  width={180}
                  height={250}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <div className=" grid grid-cols-12 gap-4">
                <Image
                  className=" col-span-5"
                  src="/ban3.png"
                  alt="ban1"
                  width={246}
                  height={164}
                />
                <Image
                  className=" col-span-7"
                  src="/ban4.png"
                  alt="ban1"
                  width={365}
                  height={145}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;
