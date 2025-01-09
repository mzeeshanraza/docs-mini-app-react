import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

const Cards = () => {
  return (
    <div className="rounded-[40px] w-60 h-72 bg-zinc-900/90 text-white p-5 relative overflow-hidden px-8 py-10 ">
      <FaRegFileAlt />
      <p className="mt-5 text-sm font-semibold leading-tight ">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>

      <div className="absolute bottom-0 left-0 w-full footer ">
        <div className="flex items-center justify-between px-8 py-3 mb-5">
          <h5>.4mb</h5>
          <span className="flex items-center justify-center rounded-full w-7 h-7 bg-zinc-600">
            <LuDownload size=".8em" color="#fff" />
          </span>
        </div>
        <div className="flex items-center justify-center w-full py-4 bg-green-600 tag">
                <h3 className="text-sm font-semibold">Download Now</h3>
        </div>
      </div>
    </div>
  );
};

export default Cards;
