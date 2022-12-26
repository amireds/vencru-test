import React from "react";

function EmailSelector({
  selected,
  setSelected,
  value,
  selectorId,
  label,
  subLabel,
}) {
  return (
    <div className="relative flex items-start">
      <div className="flex items-center h-5">
        <input
          id={selectorId}
          name="send-email"
          type="radio"
          className="focus:ring-white focus:ring-0 focus:border-purple-600 h-4 w-4 text-purple-600 border-gray-300"
          value={value}
          checked={selected === value}
          onChange={(event) => setSelected(event.target.value)}
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={selectorId} className="font-medium text-gray-700">
          {label}
        </label>
        {subLabel && <p className="text-gray-500">{subLabel}</p>}
      </div>
    </div>
  );
}

export default EmailSelector;
