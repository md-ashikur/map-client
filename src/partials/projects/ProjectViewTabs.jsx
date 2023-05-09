import React, { useEffect, useRef, useState } from "react";
import ProjectsList from "./ProjectsList";
import "./ProjectViewTabs.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./ProjectViewTabs.css";
import ProjectsMapView from "./ProjectsMapView";


const ProjectViewTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="">
     
    
      <div className="tabs">
        <div className="tab-header">
          <div
            className={activeTab === 0 ? "active" : ""}
            onClick={() => handleTabClick(0)}
          >
              <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 mr-2 shrink-0 icon icon-tabler icon-tabler-list-details"
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
          <div
            className={activeTab === 1 ? "active" : ""}
            onClick={() => handleTabClick(1)}
          >
           <div className="flex justify-center items-center">
           <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 mr-2 shrink-0 icon icon-tabler icon-tabler-list-details"
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
              <span>Map</span>
           </div>
          </div>
        </div>
        <div className="tab-content">
          <div className={activeTab === 0 ? "active" : ""}>
            <ProjectsList/>
          </div>
          <div className={activeTab === 1 ? "active" : ""}>
            <ProjectsMapView/>
          </div>
        </div>
      </div>
    

     
     
    </div>
  );
};

export default ProjectViewTabs;
