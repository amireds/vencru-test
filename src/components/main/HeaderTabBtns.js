import React from "react";
import { tabBtn } from "../../data/sampleData";
import "./HideScroller.css";

function HeaderTabBtns(props) {
  return (
    <div className="py-4 overflow-auto -mx-3 scrollbar-hide">
      <span className="relative z-0 inline-flex shadow-sm rounded-md">
        {tabBtn.map((btn, index) => (
          <button
            type="button"
            key={btn.name}
            className={
              index === 0
                ? "relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-0 focus:ring-purple-500"
                : index === tabBtn.length - 1
                ? "-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white  text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-0 focus:ring-purple-500"
                : "relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-0 focus:ring-purple-500 border-l-0"
            }
          >
            {btn.name}
          </button>
        ))}
      </span>
    </div>
  );
}

export default HeaderTabBtns;
