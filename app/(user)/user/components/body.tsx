"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
const Body = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    
    <div className="flex  flex-col gap-10 justify-center items-center  ">

      <div className="flex flex-row w-full justify-around flex-wrap px-5 ">
        <div className="text-xl flex flex-col gap-2">
          <p className="text-[#b23ac8] pb-5" data-aos="fade-right">
            DISCOVER THE FUTURE OF MOBILE
          </p>
          <div
            className="text-[#3de2fe] text-5xl  drop-shadow-[0_0_20px_#3de2fe] font-bold"
            data-aos="fade-right"
          >
            SMART PHONE
          </div>
          <div
            className="text-[#3de2fe] text-5xl  drop-shadow-[0_0_20px_#3de2fe] font-bold"
            data-aos="fade-right"
          >
            INNOVATION STARTS HERE
          </div>
          <div className="text-white text-[12px] pt-10" data-aos="fade-right">
            Explore the latest smartphones with powerful performance, advanced
            <br />
            cameras, and stunning design built for the future.
          </div>
          <div className="flex flex-row gap-10 pt-5 ">
            <div
              data-aos="fade-right"
              className="bg-[#b73bcd] w-35 cursor-pointer font-medium transition duration-300 text-[16px] hover:shadow hover:bg-[#1d1246] hover:border-[#b73bcd] border-2 border-[#b73bcd] shadow-2xl text-white shadow-[#b73bcd] flex justify-center items-center h-10 rounded-4xl"
            >
              SHOP NOW
            </div>
            <div
              data-aos="fade-right"
              className="border-[#b73bcd] hover:bg-[#b73bcd] font-medium cursor-pointer border-2 text-[12px] w-35 transition duration-300 text-white hover:shadow-2xl shadow-[#b73bcd] flex justify-center items-center h-10 rounded-4xl"
            >
              EXPLORE PHONES
            </div>
          </div>
        </div>
        <div className="">
          <motion.img
            data-aos="fade-left"
            className="w-100"
            src="/image/icon4.png"
            alt="phone"
            animate={{ y: [0, -25, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      <div
        data-aos="fade-right"
        className=" w-[81%] h-auto mt-5 shadow-2xl shadow-[#b73bcd] items-center p-10 flex-wrap gap-5 flex flex-row   justify-between rounded-2xl "
      >
        <div className="flex flex-col gap-2">
          <div className="text-white font-bold relative">شحن سريع</div>
          <div className="text-[#b23ac8] text-[12px]">
            نوفر خدمة شحن سريع وآمن لجميع الطلبات داخل المملكة وخارجها.
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-white font-bold">جودة مضمونة</div>
          <div className="text-[#b23ac8] text-[12px]">
            جميع منتجاتنا أصلية وعالية الجودة مع ضمان رضاك الكامل.
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-white font-bold">خدمة العملاء 24/7</div>
          <div className="text-[#b23ac8] text-[12px]">
            فريقنا جاهز للإجابة على استفساراتك ودعمك طوال اليوم.
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-white font-bold">طرق دفع متعددة</div>
          <div className="text-[#b23ac8] text-[12px]">
            نوفر جميع وسائل الدفع الإلكترونية والبطاقات البنكية بكل أمان.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
