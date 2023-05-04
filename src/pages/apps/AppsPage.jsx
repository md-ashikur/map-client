import React, { useState } from 'react';
import Header from '../../partials/Header';
import Sidebar from '../../partials/Sidebar';
import AppBody from '../../partials/app/AppBody';

const AppsPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="relative flex">
            <AppBody/> 
          </div>
        </main>
      </div>
    </div>
    );
};

export default AppsPage;