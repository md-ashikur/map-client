import React, { useState } from "react";
import ProjectsList from "./ProjectsList";
import "./ProjectViewTabs.css";
import ProjectsMapView from "./ProjectsMapView";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { Link } from "react-router-dom";

const ProjectViewTabs = () => {
  var menu = ["List", "Map"];

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + menu[index] + "</span>";
    },
  };

  return (
    <div className="relative">
      
      <div className=" flex absolute top-4">
        <div class="">
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
        </div>
        <div class="ml-10">
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
        </div>
      </div>

      {/* ======================= */}

      <Swiper pagination={pagination} modules={[Pagination]} className="">
        <div className="">
          <SwiperSlide>          
            <ProjectsList />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectsMapView />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default ProjectViewTabs;
