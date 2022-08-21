import { motion } from "framer-motion";
import Image from "next/image";

export default function Index() {
  return (
    <div className="p-10 w-full">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">All Images</div>
        <div className="">
          <button
            className="py-2 px-4 rounded-md
          border border-white active:bg-white/10 transition-all flex gap-3"
          >
            <div className="txt">Filters</div>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="relative z-20 images-continer mt-5 grid  md:grid-cols-4 sm:grid-cols-2 grid-cols-1 auto-rows-[15em] gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="border border-white rounded"
        >
          <div
            className="img relative w-full h-full object-cover 
            grayscale 
            brightness-50
            hover:grayscale-0 
            hover:brightness-100
            transition-all duration-300
            cursor-pointer
            "
          >
            <Image
            alt="image"
              src="/images/1.jpg"
              className="w-full h-full object-cover"
              layout="fill"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
