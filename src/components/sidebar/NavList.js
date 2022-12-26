import React from "react";
import { navigation } from "../../data/sampleData";
import { classNames } from "../../utils/functions";

function NavList(props) {
  return (
    <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            item.current
              ? "bg-gray-100 text-gray-900"
              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
            "group flex items-center justify-between px-2 py-2 text-sm font-medium rounded-md"
          )}
        >
          <div className="flex items-center">
            {item.isDivider && (
              <item.icon
                className={classNames(
                  item.current
                    ? "text-gray-500"
                    : "text-gray-400 group-hover:text-gray-500",
                  "mr-3 flex-shrink-0 h-6 w-6"
                )}
                aria-hidden="true"
              />
            )}
            {item.name}
          </div>
          {item.count ? (
            <span
              className={classNames(
                item.current
                  ? "bg-white"
                  : "bg-gray-100 group-hover:bg-gray-200",
                "ml-3 inline-block py-0.5 px-2 text-xs font-normal rounded-full"
              )}
            >
              {item.count}
            </span>
          ) : null}
        </a>
      ))}
    </nav>
  );
}

export default NavList;
