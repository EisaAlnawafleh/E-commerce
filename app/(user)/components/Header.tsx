"use client";
import Image from "next/image";
import { useState } from "react";
import SideBar from "./sideBar";
const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <header>
      <div className="flex flex-row justify-center w-screen gap-10  py-6 z-50 fixed top-0 right-0 left-0 HeaderActions  bg-[#101828]">
        <div className="text-[#2fa2d4]  flex gap-5 justify-center items-center pl-5">
          <div className=" HeaderName"> DTAL Store</div>
        </div>

        <div className=" max-w-140 w-full border-[#2fa2d4] rounded-3xl border Search  flex flex-row   justify-around  items-center ">
          <input
            type="text"
            placeholder="...ابحث عن منتج"
            className="w-[80%] h-11  text-[#6d7784]  pb-2  focus:outline-0   "
          />

          <div>
            <i className="ri-search-line  hover:scale-115 transition duration-300 bg-[#2fa2d4] cursor-pointer text-white w-8 h-8 rounded-[50%] flex justify-center items-center"></i>
          </div>
        </div>
        <div className="text-white flex gap-7 text-2xl HeaderIcon justify-center items-center pr-5">
          <i className="ri-notification-3-line hover:text-[#2fa2d4] hover:bg-[#6d7784] rounded-2xl w-9 h-9 flex justify-center items-center transition duration-300"></i>
          <i className="ri-heart-line hover:text-[#2fa2d4] hover:bg-[#6d7784] rounded-2xl w-9 h-9 flex justify-center items-center transition duration-300"></i>
          <i className="ri-shopping-cart-line hover:text-[#2fa2d4] hover:bg-[#6d7784] rounded-2xl w-9 h-9 flex justify-center items-center transition duration-300"></i>
          <i
            onClick={() => setOpen((prev) => !prev)}
            className="ri-menu-3-line hover:text-[#2fa2d4] hover:bg-[#132247] bg-[#6d7784]  rounded-2xl w-9 h-9 flex justify-center items-center transition duration-300"
          ></i>
        </div>
        {open && (
          <>
            <div
              onClick={() => setOpen(false)}
              className={`fixed ${open ? `fixed inset-0 z-40 bg-black/40 backdrop-blur-sm` : "hidden"}`}
            ></div>
            <SideBar open={open} onClose={() => setOpen(false)} />
          </>
        )}
      </div>
      <div className="bg-[#2fa2d4] w-full overflow-hidden h-10 mt-25 flex flex-row   gap-50 justify-center items-center text-white  ">
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
