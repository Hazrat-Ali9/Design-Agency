import Image from "next/image";


const Footer = () => {
  return (
    <div className=" bg-[#000]">
      <footer className="footer font-sans p-10  text-base-content">
        <aside>
          <h1 className=" font-bold text-3xl text-white">WEB LOGO</h1>
          <p className=" text-white text-xl">
            Some footer text about the
            <br />
            Agency. Just a little description to
            <br />
            help people understand you better
          </p>
          <div className=" flex gap-4 mt-5">
            <Image src="/Group 32.png" alt="fb" width={40} height={40} />
            <Image src="/Group 33.png" alt="tw" width={40} height={40} />
            <Image src="/Group 34.png" alt="ld" width={40} height={40} />
            <Image src="/Frame 20095.png" alt="ins" width={40} height={40} />
          </div>
        </aside>
        <nav>
          <h6 className=" text-white font-semibold text-xl">Quick Links</h6>
          <a className="link link-hover text-white text-[18px] font-medium">
            Services
          </a>
          <a className="link link-hover  text-white text-[18px] font-medium">
            Portfolio
          </a>
          <a className="link link-hover  text-white text-[18px] font-medium">
            About Us
          </a>
          <a className="link link-hover  text-white text-[18px] font-medium">
            Contact Us
          </a>
        </nav>
        <nav>
          <h6 className="  text-white font-semibold text-xl">Address</h6>
          <p className="  text-white text-xl font-semibold">
            Design Agency Head Office. <br /> Airport Road United <br /> Arab
            Emirate
          </p>
        </nav>
      </footer>
      <footer className="footer font-sans  pl-10 pb-7  text-base-content">
        <aside>
          <p className="text-white text-[20px] font-medium">
            Copyright Design Agency 2022
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;