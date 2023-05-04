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
        <header className="fixed top-0 bg-gray-400/25 z-30 py-2 w-full lg:w-[81%]">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-10 -mb-px">
              {/* Header: Left side */}
              <div className="flex">
                {/* Hamburger button */}
                <MapHeader/>
                
              </div>

              {/* Header: Right side */}
              <div className="flex items-center justify-center space-x-3">
                <button className="flex items-center gap-1 bg-slate-600 text-white px-3 py-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-device-floppy"
                    width="25"
                    height="25"
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
                  Save
                </button>

                
                <button className="flex items-center gap-1 bg-slate-600 text-white px-3 py-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-rotate-2"
                    width="25"
                    height="25"
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
                  Undo
                </button>

                <button className="flex items-center gap-1 bg-slate-600 text-white px-3 py-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-rotate-clockwise"
                    width="25"
                    height="25"
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
                  Redo
                </button>
              </div>
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
