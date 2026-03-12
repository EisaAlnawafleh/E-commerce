"use client";
import { motion } from "framer-motion";
import "swiper/css";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Products1 = () => {
  return (
    <div className="flex flex-col">
      
      <Header />

     
      <div className="  text-white flex text-center items-center justify-center gap-5 px-2 marqueee flex-wrap ">
        <motion.div
          whileHover={{ y: -10, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-out"
          className="bg-[#391658] max-w-55 max-h-100 rounded-2xl pb-5"
        >
          <div>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="rounded-t-2xl"
            />
          </div>
          <div className="mt-5">Apple iPhone 13 Pro Max </div>
          <div className="text-green-700 mt-5">JD 799.00</div>
          <motion.div className=" rounded-2xl h-10 w-50 flex ml-2 justify-center items-center mt-8 hover:opacity-85 cursor-pointer transition duration-300 bg-[#b23ac8] border-0">
            أضف للسلة
          </motion.div>
        </motion.div>
        <motion.div
          whileHover={{ y: -10, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-out"
          className="bg-[#391658] max-w-55 max-h-100 rounded-2xl pb-5 "
        >
          <div>
            <img
              src="https://eshop.orange.jo/images/thumbs/0011414_apple-iphone-17-256gb_220.jpeg"
              alt=""
              className="rounded-t-2xl"
            />
          </div>
          <div className="mt-5">Apple iPhone 17 - 256GB</div>
          <div className="text-green-700 mt-5">JD 799</div>
          <div className=" rounded-2xl h-10 w-50 flex ml-2 justify-center items-center mt-8 hover:opacity-85 cursor-pointer transition duration-300 bg-[#b23ac8] border-0">
            أضف للسلة
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -10, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-out"
          className="bg-[#391658] max-w-55 max-h-100 rounded-2xl pb-5"
        >
          <div>
            <img
              src="https://eshop.orange.jo/images/thumbs/0010605_honor-x8c8gb256gb_220.jpeg"
              alt=""
              className="rounded-t-2xl"
            />
          </div>
          <div className="mt-5">Honor X8C,8GB,512GB</div>
          <div className="text-green-700 mt-5">JD 169.00</div>
          <div className=" rounded-2xl h-10 w-50 flex ml-2 justify-center items-center mt-8 hover:opacity-85 cursor-pointer transition duration-300 bg-[#b23ac8] border-0">
            أضف للسلة
          </div>
        </motion.div>
        <motion.div
          whileHover={{ y: -10, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-out"
          className="bg-[#391658] max-w-55 max-h-100 rounded-2xl pb-5"
        >
          <div>
            <img
              src="https://eshop.orange.jo/images/thumbs/0011392_samsung-galaxy-z-flip-7256gb12gb_220.jpeg"
              alt=""
              className="rounded-t-2xl"
            />
          </div>
          <div className="mt-5">Samsung Galaxy Z Flip </div>
          <div className="text-green-700 mt-5">JD 799.00</div>
          <div className=" rounded-2xl h-10 w-50 flex ml-2 justify-center items-center mt-8 hover:opacity-85 cursor-pointer transition duration-300 bg-[#b23ac8] border-0">
            أضف للسلة
          </div>
        </motion.div>
        <motion.div
          whileHover={{ y: -10, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-out"
          className="bg-[#391658] max-w-55 max-h-100 rounded-2xl pb-5"
        >
          <div>
            <img
              src="https://eshop.orange.jo/images/thumbs/0011763_apple-iphone-air-512gb_220.jpeg"
              alt=""
              className="rounded-t-2xl"
            />
          </div>
          <div className="mt-5">Apple iPhone Air - 512GB</div>
          <div className="text-green-700 mt-5">JD 1199.00</div>
          <div className=" rounded-2xl h-10 w-50 flex ml-2 justify-center items-center mt-8 hover:opacity-85 cursor-pointer transition duration-300 bg-[#b23ac8] border-0">
            أضف للسلة
          </div>
        </motion.div>
        <motion.div
          whileHover={{ y: -10, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-out"
          className="bg-[#391658] max-w-55 max-h-100 rounded-2xl pb-5"
        >
          <div>
            <img
              src="https://eshop.orange.jo/images/thumbs/0011427_apple-iphone-17-pro-max-256gb_220.jpeg"
              alt=""
              className="rounded-t-2xl"
            />
          </div>
          <div className="mt-5">Apple iPhone 17 Pro </div>
          <div className="text-green-700 mt-5">JD 1299.00</div>
          <div className=" rounded-2xl h-10 w-50 flex ml-2 justify-center items-center mt-8 hover:opacity-85 cursor-pointer transition duration-300 bg-[#b23ac8] border-0">
            أضف للسلة
          </div>
        </motion.div>
        <motion.div
          whileHover={{ y: -10, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-out"
          className="bg-[#391658] max-w-55 max-h-100 rounded-2xl pb-5"
        >
          <div>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="rounded-t-2xl"
            />
          </div>
          <div className="mt-5">Apple iPhone 13 Pro Max </div>
          <div className="text-green-700 mt-5">JD 799.00</div>
          <motion.div className=" rounded-2xl h-10 w-50 flex ml-2 justify-center items-center mt-8 hover:opacity-85 cursor-pointer transition duration-300 bg-[#b23ac8] border-0">
            أضف للسلة
          </motion.div>
        </motion.div>
        <motion.div
          whileHover={{ y: -10, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-out"
          className="bg-[#391658] max-w-55 max-h-100 rounded-2xl pb-5 "
        >
          <div>
            <img
              src="https://eshop.orange.jo/images/thumbs/0011414_apple-iphone-17-256gb_220.jpeg"
              alt=""
              className="rounded-t-2xl"
            />
          </div>
          <div className="mt-5">Apple iPhone 17 - 256GB</div>
          <div className="text-green-700 mt-5">JD 799</div>
          <div className=" rounded-2xl h-10 w-50 flex ml-2 justify-center items-center mt-8 hover:opacity-85 cursor-pointer transition duration-300 bg-[#b23ac8] border-0">
            أضف للسلة
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -10, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-out"
          className="bg-[#391658] max-w-55 max-h-100 rounded-2xl pb-5"
        >
          <div>
            <img
              src="https://eshop.orange.jo/images/thumbs/0010605_honor-x8c8gb256gb_220.jpeg"
              alt=""
              className="rounded-t-2xl"
            />
          </div>
          <div className="mt-5">Honor X8C,8GB,512GB</div>
          <div className="text-green-700 mt-5">JD 169.00</div>
          <div className=" rounded-2xl h-10 w-50 flex ml-2 justify-center items-center mt-8 hover:opacity-85 cursor-pointer transition duration-300 bg-[#b23ac8] border-0">
            أضف للسلة
          </div>
        </motion.div>
        <motion.div
          whileHover={{ y: -10, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-out"
          className="bg-[#391658] max-w-55 max-h-100 rounded-2xl pb-5"
        >
          <div>
            <img
              src="https://eshop.orange.jo/images/thumbs/0011392_samsung-galaxy-z-flip-7256gb12gb_220.jpeg"
              alt=""
              className="rounded-t-2xl"
            />
          </div>
          <div className="mt-5">Samsung Galaxy Z Flip </div>
          <div className="text-green-700 mt-5">JD 799.00</div>
          <div className=" rounded-2xl h-10 w-50 flex ml-2 justify-center items-center mt-8 hover:opacity-85 cursor-pointer transition duration-300 bg-[#b23ac8] border-0">
            أضف للسلة
          </div>
        </motion.div>
        <motion.div
          whileHover={{ y: -10, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-out"
          className="bg-[#391658] max-w-55 max-h-100 rounded-2xl pb-5"
        >
          <div>
            <img
              src="https://eshop.orange.jo/images/thumbs/0011763_apple-iphone-air-512gb_220.jpeg"
              alt=""
              className="rounded-t-2xl"
            />
          </div>
          <div className="mt-5">Apple iPhone Air - 512GB</div>
          <div className="text-green-700 mt-5">JD 1199.00</div>
          <div className=" rounded-2xl h-10 w-50 flex ml-2 justify-center items-center mt-8 hover:opacity-85 cursor-pointer transition duration-300 bg-[#b23ac8] border-0">
            أضف للسلة
          </div>
        </motion.div>
        <motion.div
          whileHover={{ y: -10, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-out"
          className="bg-[#391658] max-w-55 max-h-100 rounded-2xl pb-5"
        >
          <div>
            <img
              src="https://eshop.orange.jo/images/thumbs/0011427_apple-iphone-17-pro-max-256gb_220.jpeg"
              alt=""
              className="rounded-t-2xl"
            />
          </div>
          <div className="mt-5">Apple iPhone 17 Pro </div>
          <div className="text-green-700 mt-5">JD 1299.00</div>
          <div className=" rounded-2xl h-10 w-50 flex ml-2 justify-center items-center mt-8 hover:opacity-85 cursor-pointer transition duration-300 bg-[#b23ac8] border-0">
            أضف للسلة
          </div>
        </motion.div>
      </div>
      <div className="w-full h-1 mt-5 bg-[#b23ac8]"></div>
      <Footer />
    </div>
  );
};

export default Products1;
