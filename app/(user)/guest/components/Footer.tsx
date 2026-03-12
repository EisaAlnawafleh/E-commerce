"use client";
import Aos from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  return (
    <div className="flex w-full   flex-col flex-wrap justify-center items-center pb-10">
      <div className="  flex w-full max-w-[75%] flex-wrap text-center  flex-row-reverse  my-5 justify-around text-white  gap-10 ">
        <div>
          <div data-aos="fade-right">تواصل معنا</div>
          <div className="text-[#6d7784] flex flex-col gap-5 text-[12px]  mt-5">
            <div data-aos="fade-right" className="flex flex-row gap-3">
              <div>
                <i className="fa-solid fa-location-dot text-sm text-[#2fa2d4] "></i>
              </div>
              <div> Jordan</div>
            </div>
            <div data-aos="fade-right" className="flex flex-row gap-3">
              <div>
                <i className="fa-solid fa-phone text-sm text-[#00a63e] "></i>
              </div>
              <div>+966351244512</div>
            </div>
            <div data-aos="fade-right" className="flex flex-row gap-3">
              <div>
                <i className="fa-solid fa-envelope text-sm text-[#9810fa]   "></i>
              </div>
              <div>DTAL2026@gmail.com</div>
            </div>
          </div>
        </div>
        <div>
          <div data-aos="fade-right">خدمة العملاء</div>
          <div>
            <div className="text-[#6d7784] flex flex-col gap-2 text-[12px]  mt-5">
              <div
                data-aos="fade-right"
                className="hover:text-[#b23ac8] cursor-pointer transition duration-300 hover:translate-x-0.5"
              >
                تتبع طلبك
              </div>
              <div
                data-aos="fade-right"
                className="hover:text-[#b23ac8] cursor-pointer transition duration-300 hover:translate-x-0.5"
              >
                الأسئلة الشائعة
              </div>
              <div
                data-aos="fade-right"
                className="hover:text-[#b23ac8] cursor-pointer transition duration-300 hover:translate-x-0.5"
              >
                سياسة الخصوصية
              </div>
              <div
                data-aos="fade-right"
                className="hover:text-[#b23ac8] cursor-pointer transition duration-300 hover:translate-x-0.5"
              >
                الشروط وألاحكام
              </div>
            </div>
          </div>
        </div>
        <div>
          <div data-aos="fade-right">روابط هامة</div>
          <div className="text-[#6d7784] flex flex-col gap-2 text-[12px]  mt-5">
            <div
              data-aos="fade-right"
              className="hover:text-[#b23ac8] cursor-pointer transition duration-300 hover:translate-x-0.5"
            >
              الرئيسية
            </div>
            <div
              data-aos="fade-right"
              className="hover:text-[#b23ac8] cursor-pointer transition duration-300 hover:translate-x-0.5"
            >
              المتجر
            </div>
            <div
              data-aos="fade-right"
              className="hover:text-[#b23ac8] cursor-pointer transition duration-300 hover:translate-x-0.5"
            >
              اتصل بنا
            </div>
          </div>
        </div>
      </div>
      <div className="h-1  w-[75%] bg-[#b23ac8]"></div>

      <div className="mt-5 w-[75%] ">
        <div className="flex flex-row  flex-wrap text-[#6d7784] gap-5  w-full justify-between items-center">
          <div>© 2026 DTAL store. جميع الحقوق محفوظة.</div>
          <div className="flex flex-row gap-3 text-2xl">
            <i
              className="fa-brands fa-cc-visa hover:text-[#1a1f71]"
              title="Visa"
            ></i>
            <i
              className="fa-brands fa-cc-mastercard hover:text-[#eb001b]"
              title="Mastercard"
            ></i>

            <i
              className="fa-brands fa-cc-apple-pay hover:text-black dark:hover:text-white"
              title="Apple Pay"
            ></i>

            <i
              className="fa-brands fa-cc-paypal hover:text-[#003087]"
              title="PayPal"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
