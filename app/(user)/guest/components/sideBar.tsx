"use client";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import { useRef } from "react";
type SideBarProps = {
  open: boolean;
  onClose: () => void;
};
const SideBar = ({ open, onClose }: SideBarProps) => {
  return (
    <div
      data-aos="fade-left"
      className={`fixed w-[320px] h-full bg-[#23134a] right-0 top-0 z-[9999]  text-white `}
    >
      <div className="bg-[#0f103c] flex justify-between w-full h-20 pt-5 px-5 ">
        <i className="ri-menu-line text-3xl "> القائمة</i>
        <i
          onClick={onClose}
          className={`ri-close-large-fill text-3xl  hover:text-red-700 transition duration-300 `}
        ></i>
      </div>
      <div className="flex flex-col ">
        <div className="flex flex-row gap-5 mt-10 justify-center">
          <Link href="./auth/login">
            <div className="border-[#b73bcd] hover:bg-[#b73bcd] font-medium hover:shadow-2xl shadow-[#b73bcd] border-2 w-30 h-10 flex justify-center items-center hover:opacity-85 cursor-pointer transition duration-300 rounded-[5px] ">
              تسجيل الدخول
            </div>
          </Link>
         
          <Link href="./auth/signup">
             <div className="bg-[#b73bcd] w-30 h-10 flex justify-center shadow-2xl hover:shadow hover:bg-[#1d1246] hover:border-[#b73bcd] border-2 border-[#b73bcd] shadow-[#b73bcd] items-center hover:opacity-85 cursor-pointer transition duration-300 rounded-[5px]  shadow-2xl/50 ">
            إنشاء حساب
          </div>
          </Link>
         
        </div>
        <div className="flex flex-col mt-15 gap-10 pl-8 w-full">
          <div className="flex gap-10  items-center cursor-pointer hover:text-[#b23ac8] transition duration-300">
            <i className="fa-solid fa-house  "></i>
            الرئيسية
          </div>
          <div className="flex gap-10  items-center cursor-pointer hover:text-[#b23ac8] transition duration-300">
            <i className="fa-solid fa-store"></i>المتجر و الأقسام
          </div>
          <div className="flex gap-10  items-center cursor-pointer hover:text-[#b23ac8] transition duration-300">
            <i className="fa-solid fa-basket-shopping"></i>
            صفحات التسوق
          </div>
          <div className="flex gap-10  items-center cursor-pointer hover:text-[#b23ac8] transition duration-300">
            <i className="fa-solid fa-circle-info"></i>
            روابط هامة
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
