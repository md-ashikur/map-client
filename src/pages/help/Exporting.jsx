import React, { useState } from "react";
import Sidebar from "../../partials/Sidebar";


const Exporting = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
  

    return (
        <div className="flex h-screen overflow-hidden">
     
        
            <div className="relative flex m-5">
           export
            </div>
         
      </div>
    );
};

export default Exporting;