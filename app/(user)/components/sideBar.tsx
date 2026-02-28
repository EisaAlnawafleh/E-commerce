"use client";
type SideBarProps = {
  open: boolean;
  onClose: () => void;
};
const SideBar = ({ open, onClose }: SideBarProps) => {
  return (
    <div
      className={`fixed w-[320px] h-full bg-[#101828] right-0 top-0 z-50 text-white `}
    >
      <div className="bg-[#172030] flex justify-between w-full h-20 pt-5 px-5 ">
        <i className="ri-menu-line text-3xl "> القائمة</i>
        <i
          onClick={onClose}
          className={`ri-close-large-fill text-3xl  hover:text-red-700 transition duration-300 `}
        ></i>
      </div>
      <div className="flex flex-col ">
        <div className="flex flex-row gap-5 mt-10 justify-center">
          <div className="bg-[#364153] w-30 h-10 flex justify-center items-center hover:opacity-85 cursor-pointer transition duration-300 rounded-[5px] ">
            Sign in
          </div>
          <div className="bg-[#2fa2d4] w-30 h-10 flex justify-center items-center hover:opacity-85 cursor-pointer transition duration-300 rounded-[5px]  shadow-2xl/50  shadow-[#2fa2d4]">
            Login
          </div>
        </div>
        <div className="flex flex-col mt-15 gap-10 pl-8 w-full">
          <div className="flex gap-10  items-center cursor-pointer hover:text-[#2fa2d4] transition duration-300">
            <i className="fa-solid fa-house  "></i>
            الرئيسية
          </div>
          <div className="flex gap-10  items-center cursor-pointer hover:text-[#2fa2d4] transition duration-300">
            <i className="fa-solid fa-store"></i>المتجر و الأقسام
          </div>
          <div className="flex gap-10  items-center cursor-pointer hover:text-[#2fa2d4] transition duration-300">
            <i className="fa-solid fa-basket-shopping"></i>
            صفحات التسوق
          </div>
          <div className="flex gap-10  items-center cursor-pointer hover:text-[#2fa2d4] transition duration-300">
            <i className="fa-solid fa-circle-info"></i>
            روابط هامة
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
