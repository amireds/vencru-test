import React from "react";

function CardSelector({ selected, value, setSelected, Icon, topText, exp }) {
  return (
    <label
      className={
        selected === value
          ? "flex items-start justify-between bg-purple-50 px-4 py-3 rounded-lg border border-purple-200"
          : "flex items-start justify-between bg-white px-4 py-3 rounded-lg border border-gray-200"
      }
    >
      <div className="flex justify-start items-start">
        <div className="bg-white w-10 h-6 rounded justify-center flex items-center border border-gray-100">
          <Icon className="" />
        </div>
        <div className="ml-3 text-xs space-y-0.5">
          <div
            className={selected !== value ? "text-gray-900" : "text-purple-900"}
          >
            {topText}
          </div>
          <div
            className={
              selected === "visa" ? "text-purple-400" : "text-gray-500"
            }
          >
            {exp}
          </div>
          <div
            className={
              selected === value ? "text-purple-400 pt-2" : "text-gray-700 pt-2"
            }
          >
            Set as default
            <span className="text-purple-800 font-medium ml-4">Edit</span>
          </div>
        </div>
      </div>
      <input
        type="radio"
        className="focus:ring-0 focus:ring-white h-4 w-4 text-purple-600 border-gray-300 focus:outline-0"
        value={value}
        checked={selected === value}
        onChange={(event) => setSelected(event.target.value)}
      />
    </label>
  );
}

export default CardSelector;
