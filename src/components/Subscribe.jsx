import React from 'react';

const Subscribe = () => {
  return (
    <div>
      <section
        
        className="w-full  bg-white "
      >
        <div className="container relative flex flex-col py-16 px-6 mx-auto">
          <section className="flex items-center flex-1">
            <div className="flex flex-col w-full ">
              <h1 className="text-xl poppins text-[#20B15A] font-medium text-center ">
                SUBSCRIBE
              </h1>

              <p className="capitalize text-center text-[#000] font-semibold  text-[30px] poppins">
                Subscribe to get the latest <br /> news about us
              </p>
              <p className=" font-sans font-medium text-[#8B8B8B] capitalize text-center">
                Please drop your email below to get daily update about what we
                do
              </p>

              <div className="  flex justify-center">
                <div className="w-full   mt-8 bg-transparent border rounded-lg lg:max-w-sm dark:border-gray-700 focus-within:border-[#000] focus-within:ring focus-within:ring-blue-300  focus-within:ring-opacity-40">
                  <form className="flex flex-col lg:flex-row">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 capitalize h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
                    />

                    <button
                      type="button"
                      className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform   hover:bg-blue-400 focus:outline-none bg-[#F55F1D] rounded-lg"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>

              <p className="mt-8 text-center text-gray-700 dark:text-white text-md md:text-xl">
                Notify me when App is launched :)
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;