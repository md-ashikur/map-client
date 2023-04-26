import React from 'react';
import ProjectsBody from '../partials/projects/ProjectsBody';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

const Projects = () => {

    return (
        <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar  />

      {/* Content area */} 
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header />

        <main>
          <div className="relative flex">

           <ProjectsBody/>

          </div>
        </main>

      </div>
      
    </div>
    );
};

export default Projects;