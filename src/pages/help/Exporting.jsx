import React, { useState } from "react";
import Sidebar from "../../partials/Sidebar";


const Exporting = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
  

    return (
        <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
  
        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
         
  
          <main>
            <div className="relative flex m-5">
           export
            </div>
          </main>
        </div>
      </div>
    );
};

export default Exporting;