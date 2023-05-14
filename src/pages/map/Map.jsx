import React, { useState } from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import MapBody from "../../partials/map/MapBody";
import MapHeader from "../../partials/map/MapHeader";


const Map = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
     

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Map header */}
        <header className="fixed top-0 z-30 pt-2 pl-0">
          <div className=" sm:px-6 lg:pr-0 ">

              {/* Header: Left side */}
              <div className="flex items-center justify-center gap-2">
                {/* Hamburger button */}
                <div>
                <MapHeader/>
                </div>
               
                
                <button className="flex items-center bg-gray-400/25 hover:bg-gray-400/50 rounded-lg gap-1 px-3 py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-device-floppy"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#9e9e9e"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
                    <circle cx="12" cy="14" r="2" />
                    <polyline points="14 4 14 8 8 8 8 4" />
                  </svg>
                
                </button>

                
                <button className="flex items-center bg-gray-400/25 hover:bg-gray-400/50 rounded-lg gap-1  px-3 py-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-rotate-2"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#9e9e9e"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 4.55a8 8 0 0 0 -6 14.9m0 -4.45v5h-5" />
                    <line x1="18.37" y1="7.16" x2="18.37" y2="7.17" />
                    <line x1="13" y1="19.94" x2="13" y2="19.95" />
                    <line x1="16.84" y1="18.37" x2="16.84" y2="18.38" />
                    <line x1="19.37" y1="15.1" x2="19.37" y2="15.11" />
                    <line x1="19.94" y1="11" x2="19.94" y2="11.01" />
                  </svg>
                  
                </button>

                <button className="flex items-center bg-gray-400/25 hover:bg-gray-400/50 rounded-lg gap-1 px-3 py-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-rotate-clockwise"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#9e9e9e"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" />
                  </svg>
              
                </button>
              
              </div>

          </div>
        </header>

        <main>
          <div className="relative flex flex-col">
            <MapBody />
           
          </div>
        </main>
      </div>
    </div>
  );
};

export default Map;
