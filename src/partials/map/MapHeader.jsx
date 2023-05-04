import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../HelpDrawer.css";
import Sidebar from "../Sidebar";

import MapSidebar from "./MapSideBar";

const MapHeader = () => {

  
  // help drawer-----------------
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <div>
      <div className="relative ">
        <div className={`sidebar ${isOpen == true ? "active" : ""} `}>
          <div className="sd-header">
            <h4 className="mb-0 "></h4>
            <div className="" onClick={ToggleSidebar}>
            <svg
                className="w-6 h-6 fill-current rotate-180 m-5"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-slate-400"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </div>
          </div>
        

          <div className="sd-body no-scrollbar">
            <MapSidebar
              
            />
          </div>
        </div>
      </div>

      {/* Hamburger button */}
      <button
        className="text-slate-500 hover:text-slate-600"
        aria-controls="sidebar"
        onClick={ToggleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="4" y="5" width="16" height="2" />
          <rect x="4" y="11" width="16" height="2" />
          <rect x="4" y="17" width="16" height="2" />
        </svg>
      </button>
    </div>
  );
};

export default MapHeader;
