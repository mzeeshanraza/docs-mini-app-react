import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Cards = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className="rounded-[40px] w-60 h-72 bg-zinc-900/90 text-white p-5 relative overflow-hidden px-8 py-10 flex-shrink-0 "
    >
      <FaRegFileAlt />
      <p className="mt-5 text-sm font-semibold leading-tight ">{data.desc}</p>

      <div className="absolute bottom-0 left-0 w-full footer ">
        <div className="flex items-center justify-between px-8 py-3 mb-5">
          <h5>{data.filesize}</h5>
          <span className="flex items-center justify-center rounded-full w-7 h-7 bg-zinc-600">
            {data.close ? <IoClose /> : <LuDownload size=".8em" color="#fff" />}
          </span>
        </div>
        {/* {data.tag.isOpen ? (
          <div className="flex items-center justify-center w-full py-4 bg-green-600 tag">
            <h3 className="text-sm font-semibold">Download Now</h3>
          </div>
        ) : null} */}

        {data.tag.isOpen && (
          <div
            className={`flex items-center justify-center w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } tag`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Cards;
