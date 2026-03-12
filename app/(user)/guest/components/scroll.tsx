"use client";
import { useState, useEffect } from "react";

const ScrollTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {show && (
        <div
          onClick={scrollTop}
          className="fixed bottom-8 right-8 z-[9999] bg-[#b23ac8] text-white w-12 h-12 flex justify-center items-center rounded-full cursor-pointer hover:scale-110 transition"
        >
          <i className="ri-arrow-up-line text-xl"></i>
        </div>
      )}
    </>
  );
};

export default ScrollTop;
