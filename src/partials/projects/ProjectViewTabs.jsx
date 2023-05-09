import React, { useEffect, useRef, useState } from "react";
import ProjectsList from "./ProjectsList";
import "./ProjectViewTabs.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const ProjectViewTabs = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div>
      {/* Start */}
      <div className="mb-8 ">
        <ul className="text-sm font-medium flex flex-nowrap  overflow-x-scroll no-scrollbar">
          <li
            className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
              pathname.includes("projects-list-view") &&
              "border-b-2 border-b-primary-dark text-primary-dark"
            }`}
          >
            <NavLink
              className="whitespace-nowrap flex items-center"
              to="/projects-list-view"
            >
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
            </NavLink>
          </li>
          <li
            className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
              pathname.includes("map-view") &&
              "border-b-2 border-b-primary-dark text-primary-dark"
            }`}
          >
            <NavLink
              className="whitespace-nowrap flex items-center"
              to="/projects-map-view"
            >
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
            </NavLink>
          </li>
          
        </ul>
      </div>
      {/* End */}
      <Outlet/>
      {/* =============== */}
    </div>
  );
};

export default ProjectViewTabs;
