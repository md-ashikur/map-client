import React, { useState } from "react";
import ProjectsList from "./ProjectsList";
import "./ProjectViewTabs.css";
import ProjectsMapView from "./ProjectsMapView";

const ProjectViewTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tabs">
        <div className="tab-header">
          {/* list view  */}
          <div
            className={activeTab === 0 ? "active" : ""}
            onClick={() => handleTabClick(0)}
          >
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2 shrink-0 icon icon-tabler icon-tabler-list-details"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#597e8d"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13 5h8" />
                <path d="M13 9h5" />
                <path d="M13 15h8" />
                <path d="M13 19h5" />
                <rect x="3" y="4" width="6" height="6" rx="1" />
                <rect x="3" y="14" width="6" height="6" rx="1" />
              </svg>
              <span>List</span>
            </div>
          </div>

          {/* map view  */}
          <div
            className={activeTab === 1 ? "active" : ""}
            onClick={() => handleTabClick(1)}
          >
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2 shrink-0 icon icon-tabler icon-tabler-map-pins"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#597e8d"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10.828 9.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z" />
                <path d="M8 7l0 .01" />
                <path d="M18.828 17.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z" />
                <path d="M16 15l0 .01" />
              </svg>
              <span>Map</span>
            </div>
          </div>
        </div>
        <div className="tab-content">
          <div className={activeTab === 0 ? "active z-10" : ""}>
            <ProjectsList />
          </div>
          <div className={activeTab === 1 ? "active" : ""}>
            <ProjectsMapView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectViewTabs;
