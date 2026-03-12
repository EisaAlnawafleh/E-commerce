"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import SideBar from "./sideBar";
const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <header className="pb-25 overflow-hidden">
      <div className="flex flex-row   justify-around w-screen gap-10 bg-[#0b0f3a]/95   py-6 z-[999] fixed top-0 right-0 left-0 HeaderActions ">
        <div className="text-[#b23ac8]  flex gap-5 justify-center items-center pl-5">
          <div className=" HeaderName text-3xl" data-aos="fade-right">
            DTAL Store
          </div>
        </div>

        <div
          data-aos="fade-right"
          className=" max-w-140 w-full border-[#b23ac8] rounded-3xl border Search  flex flex-row   justify-around  items-center "
        >
          <input
            type="text"
            placeholder="...ابحث عن منتج"
            className="w-[80%] h-11  text-[#6d7784]  pb-2  focus:outline-0   "
          />

          <div>
            <i className="ri-search-line  hover:scale-115 transition duration-300 bg-[#b23ac8] cursor-pointer text-white w-8 h-8 rounded-[50%] flex justify-center items-center"></i>
          </div>
        </div>
        <div className="text-white flex gap-7 text-2xl HeaderIcon justify-center items-center pr-5">
          <i
            data-aos="fade-left"
            className={`ri-notification-3-line hover:text-[#b23ac8] cursor-pointer hover:bg-[#6d7784] rounded-2xl w-9 h-9 flex justify-center items-center transition duration-300`}
          ></i>
          <i
            data-aos="fade-left"
            className={`ri-heart-line hover:text-[#b23ac8] hover:bg-[#6d7784] cursor-pointer rounded-2xl w-9 h-9 flex justify-center items-center transition duration-300`}
          ></i>
          <i
            data-aos="fade-left"
            className={`ri-shopping-cart-line hover:text-[#b23ac8] hover:bg-[#6d7784] cursor-pointer rounded-2xl w-9 h-9 flex justify-center items-center transition duration-300`}
          ></i>
          <i
            data-aos="fade-left"
            onClick={() => setOpen((prev) => !prev)}
            className="ri-menu-3-line hover:text-[#b23ac8] hover:bg-[#132247] bg-[#6d7784] cursor-pointer  rounded-2xl w-9 h-9 flex justify-center items-center transition duration-300"
          ></i>
        </div>
        {open && (
          <>
            <div
              onClick={() => setOpen(false)}
              className={`fixed ${open ? `fixed inset-0 z-[9998]   bg-black/40 backdrop-blur-sm` : "hidden"}`}
            ></div>
            <SideBar open={open} onClose={() => setOpen(false)} />
          </>
        )}
      </div>
      <div className="bg-[#b23ac8] w-full overflow-hidden h-10 mt-25 flex flex-row   gap-50 justify-center items-center text-white  ">
        <div className="marquee">
          <span className="px-10">
            أحدث الهواتف بأفضل الأسعار – DTAL Store وجهتك الأولى لأحدث الهواتف
            والتقنيات
          </span>
          <span className="px-10">
            أحدث الهواتف بأفضل الأسعار – DTAL Store وجهتك الأولى لأحدث الهواتف
            والتقنيات
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
