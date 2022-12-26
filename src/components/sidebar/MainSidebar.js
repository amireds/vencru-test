import React from "react";
import Searchbar from "./Searchbar";
import NavList from "./NavList";
import FeatureCard from "./FeatureCard";
import BottomProfile from "./BottomProfile";

function MainSidebar({ Logo }) {
  return (
    <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <Logo className="h-8 w-auto" />
        </div>
        {/* Sidebar Search */}
        <Searchbar />

        {/* Sidebar Nav list */}
        <NavList />

        {/* Sidebar Featured Card */}
        <div className="flex-1 flex items-start justify-center px-4">
          <FeatureCard />
        </div>
      </div>
      <BottomProfile />
    </div>
  );
}

export default MainSidebar;
