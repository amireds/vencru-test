import React from "react";

function SectionHeader({ title, subTitle }) {
  return (
    <div>
      <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">{subTitle}</p>
    </div>
  );
}

export default SectionHeader;
