import React from "react";

function DescTitle({ title, id, subText }) {
  return (
    <div>
      <div
        className="text-sm font-medium text-gray-900 sm:text-sm sm:text-gray-700"
        id={id}
      >
        {title}
      </div>
      <p className="text-xs text-gray-500">{subText}</p>
    </div>
  );
}

export default DescTitle;
