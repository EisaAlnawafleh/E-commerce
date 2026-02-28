const Body = () => {
  return (
    <div className="flex  flex-col gap-10 justify-center items-center ">
      <div className=" flex justify-center mt-10 items-center px-10 opacity-60 hover:opacity-100 transition duration-300 hover:scale-105">
        <img
          src="https://r2media.horizondm.com/magefan_blog/_-_.jpg"
          alt="Phone Image"
          className="border-2 border-[#2fa2d4] rounded-2xl"
        />
      </div>

      <div className="bg-[#1e2939] w-[75%] h-auto mt-5 items-center p-10 flex-wrap gap-5 flex flex-row  justify-between rounded-2xl">
        <div className="flex flex-col gap-2">
          <div className="text-white font-bold relative">شحن سريع</div>
          <div className="text-[#6d7784] text-[12px]">
            نوفر خدمة شحن سريع وآمن لجميع الطلبات داخل المملكة وخارجها.
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-white font-bold">جودة مضمونة</div>
          <div className="text-[#6d7784] text-[12px]">
            جميع منتجاتنا أصلية وعالية الجودة مع ضمان رضاك الكامل.
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-white font-bold">خدمة العملاء 24/7</div>
          <div className="text-[#6d7784] text-[12px]">
            فريقنا جاهز للإجابة على استفساراتك ودعمك طوال اليوم.
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-white font-bold">طرق دفع متعددة</div>
          <div className="text-[#6d7784] text-[12px]">
            نوفر جميع وسائل الدفع الإلكترونية والبطاقات البنكية بكل أمان.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
