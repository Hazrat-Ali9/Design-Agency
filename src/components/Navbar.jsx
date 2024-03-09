"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';


const Navbar = () => {
   const [sticky, setSticky] = useState(false);
  const pathname = usePathname();
   useEffect(() => {
     const handleScroll = () => {
       const offset = window.scrollY;
       if (offset > 0) {
         setSticky(true);
       } else {
         setSticky(false);
       }
     };
     window.addEventListener("scroll", handleScroll);
     return () => {
       window.addEventListener("scroll", handleScroll);
     };
   }, []);
  return (
    <div className=" fixed left-0 right-0 top-0 max-w-screen-xl  mx-auto z-20">
      <div
        className={`navbar ${
          sticky
            ? "shadow-xl transition-all  bg-[#D7F5DC] duration-300 ease-in-out"
            : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  className={`link ${
                    pathname === "/" ? "text-[#20B15A] " : " text-[#000] "
                  } font-medium no-underline`}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${
                    pathname === "/team" ? "text-[#20B15A] " : " text-[#000] "
                  } font-medium no-underline`}
                  href="/team"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${
                    pathname === "/service"
                      ? "text-[#20B15A] "
                      : " text-[#000] "
                  } font-medium no-underline`}
                  href="/service"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${
                    pathname === "/projects"
                      ? "text-[#20B15A] "
                      : " text-[#000] "
                  } font-medium no-underline`}
                  href="/projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${
                    pathname === "/testimonial"
                      ? "text-[#20B15A] "
                      : " text-[#000] "
                  } font-medium no-underline`}
                  href="/testimonial"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl">
            <Image
              src="/DesignAGENCY.png"
              alt="logo"
              width={156}
              height={30}
              style={{
                width: "auto",
                height: "auto",
              }}
            />
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link
                  className={`link ${
                    pathname === "/" ? "text-[#20B15A] " : " text-[#000] "
                  } font-medium no-underline`}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  className={`link ${
                    pathname === "/team" ? "text-[#20B15A] " : " text-[#000] "
                  } font-medium no-underline`}
                  href="/team"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${
                    pathname === "/service"
                      ? "text-[#20B15A] "
                      : " text-[#000] "
                  } font-medium no-underline`}
                  href="/service"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${
                    pathname === "/projects"
                      ? "text-[#20B15A] "
                      : " text-[#000] "
                  } font-medium no-underline`}
                  href="/projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${
                    pathname === "/testimonial"
                      ? "text-[#20B15A] "
                      : " text-[#000] "
                  } font-medium no-underline`}
                  href="/testimonial"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          <Link href="">
            <button className="btn btn-outline border-[#20B15A] rounded-[10px] text-[#000] font-medium ">
              Login
            </button>
          </Link>
          <Link href="">
            <button className="btn ml-4 lg:ml-7 rounded-[10px] text-white bg-[#20B15A] font-medium hidden md:block ">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;