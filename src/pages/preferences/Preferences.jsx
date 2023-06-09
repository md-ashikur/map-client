import React, { useState } from 'react';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import PreferencesBody from '../../partials/preferences/PreferencesBody';

const Preferences = () => {
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
            <PreferencesBody/>
          </div>
        </main>
      </div>
    </div>
    );
};

export default Preferences;