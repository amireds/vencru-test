import React from "react";

function FeatureCard(props) {
  return (
    <div className="bg-gray-50 py-4 px-4 w-full rounded">
      <div className="font-medium text-sm text-gray-900">
        New features available!
      </div>
      <div className="text-sm text-gray-500 pb-3 pt-1 font-normal">
        Check out the new dashboard view. Pages now load faster
      </div>
      <img
        src="https://images.unsplash.com/photo-1605925575028-eb8b33197733?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
        className="rounded-md w-full object-cover object-center h-[136px] cursor-pointer"
        alt="new feature"
      />
      <div className="flex items-center justify-start space-x-2 text-sm font-medium">
        <span className="text-gray-500 cursor-pointer py-3">Dismiss</span>
        <span className="text-purple-700 cursor-pointer py-3">What's new?</span>
      </div>
    </div>
  );
}

export default FeatureCard;
