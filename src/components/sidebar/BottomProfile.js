import React from "react";
import { LogOut } from "feather-icons-react";

function BottomProfile(props) {
  return (
    <div className="flex-shrink-0 flex items-start justify-between border-t border-gray-200 mx-4 py-4">
      <a href="/" className="flex-shrink-0 group block">
        <div className="flex items-center">
          <div>
            <img
              className="inline-block h-9 w-9 rounded-full object-cover object-top "
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1661&q=80"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
              Olivia Rhye
            </p>
            <p className="text-xs text-gray-500 group-hover:text-gray-700">
              olivia@untitiledui.com
            </p>
          </div>
        </div>
      </a>
      <LogOut className="flex-shrink-0 h-5 w-5 text-gray-500 hover:text-gray-700 cursor-pointer" />
    </div>
  );
}

export default BottomProfile;
