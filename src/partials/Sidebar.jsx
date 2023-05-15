import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

import SidebarLinkGroup from "./SidebarLinkGroup";
import "./HelpDrawer.css";
import Logo from "./Logo";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  // help drawer-----------------
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  return (
    <div>
      {/* help part Start */}
      <div className=" overflow-hidden">
        <div className={`sidebar ${isOpen == true ? "active" : ""} `}>
          <div className="sd-header">
            <h4 className="mb-0 text-white">Help</h4>
            <div className="" onClick={ToggleSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-square-x"
                width="45"
                height="45"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#9e9e9e"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M10 10l4 4m0 -4l-4 4" />
              </svg>
            </div>
          </div>
          <hr className="opacity-30" />

          <div className="sd-body no-scrollbar">
            <div className="flex justify-center ">
              <iframe
                width="230"
                height="150"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              ></iframe>
            </div>
            <ul className={`pl-2 mt-1 ${!open && "hidden"}`}>
              <li className="mb-1 last:mb-0">
                <NavLink
                  end
                  to="/"
                  className={({ isActive }) =>
                    "block transition duration-150 truncate " +
                    (isActive
                      ? "text-secondary-light"
                      : "text-tint-light hover:text-slate-200")
                  }
                >
                  <span className="text-sm font-medium lg:opacity-100 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    AgEarth Academy
                  </span>
                </NavLink>
              </li>
              <li className="mb-1 last:mb-0">
                <NavLink
                  end
                  to="/help/what-my-data-mean"
                  className={({ isActive }) =>
                    "block transition duration-150 truncate " +
                    (isActive
                      ? "text-secondary-light"
                      : "text-tint-light hover:text-slate-200")
                  }
                >
                  <span className="text-sm font-medium lg:opacity-100 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    What Does My Data Mean?
                  </span>
                </NavLink>
              </li>
              <li className="mb-1 last:mb-0">
                <NavLink
                  end
                  to="/help/exporting"
                  className={({ isActive }) =>
                    "block transition duration-150 truncate " +
                    (isActive
                      ? "text-secondary-light"
                      : "text-tint-light hover:text-slate-200")
                  }
                >
                  <span className="text-sm font-medium lg:opacity-100 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    Exporting
                  </span>
                </NavLink>
              </li>
              <li className="mb-1 last:mb-0">
                <NavLink
                  end
                  to="/help/annotating"
                  className={({ isActive }) =>
                    "block transition duration-150 truncate " +
                    (isActive
                      ? "text-secondary-light"
                      : "text-tint-light hover:text-slate-200")
                  }
                >
                  <span className="text-sm font-medium lg:opacity-100 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    Annotating
                  </span>
                </NavLink>
              </li>
              <li className="mb-1 last:mb-0">
                <NavLink
                  end
                  to="/help/sharing"
                  className={({ isActive }) =>
                    "block transition duration-150 truncate " +
                    (isActive
                      ? "text-secondary-light"
                      : "text-tint-light hover:text-slate-200")
                  }
                >
                  <span className="text-sm font-medium lg:opacity-100 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    Sharing
                  </span>
                </NavLink>
              </li>
              <li className="mb-1 last:mb-0">
                <NavLink
                  end
                  to="/help/volume-measurements"
                  className={({ isActive }) =>
                    "block transition duration-150 truncate " +
                    (isActive
                      ? "text-secondary-light"
                      : "text-tint-light hover:text-slate-200")
                  }
                >
                  <span className="text-sm font-medium lg:opacity-100 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    Volume Measurements
                  </span>
                </NavLink>
              </li>
              <li className="mb-1 last:mb-0">
                <NavLink
                  end
                  to="/help/cropping-map"
                  className={({ isActive }) =>
                    "block transition duration-150 truncate " +
                    (isActive
                      ? "text-secondary-light"
                      : "text-tint-light hover:text-slate-200")
                  }
                >
                  <span className="text-sm font-medium lg:opacity-100 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    Cropping your map
                  </span>
                </NavLink>
              </li>
              <li className="mb-1 last:mb-0">
                <NavLink
                  end
                  to="/help/app-industry"
                  className={({ isActive }) =>
                    "block transition duration-150 truncate " +
                    (isActive
                      ? "text-secondary-light"
                      : "text-tint-light hover:text-slate-200")
                  }
                >
                  <span className="text-sm font-medium lg:opacity-100 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    Apps for your industry
                  </span>
                </NavLink>
              </li>
              <li className="mb-1 last:mb-0">
                <NavLink
                  end
                  to="/help/plant-health-toolbox"
                  className={({ isActive }) =>
                    "block transition duration-150 truncate " +
                    (isActive
                      ? "text-secondary-light"
                      : "text-tint-light hover:text-slate-200")
                  }
                >
                  <span className="text-sm font-medium lg:opacity-100 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    Plant Health Toolbox
                  </span>
                </NavLink>
              </li>
              <li className="mb-1 last:mb-0">
                <NavLink
                  end
                  to="/help/understanding-ndvi"
                  className={({ isActive }) =>
                    "block transition duration-150 truncate " +
                    (isActive
                      ? "text-secondary-light"
                      : "text-tint-light hover:text-slate-200")
                  }
                >
                  <span className="text-sm font-medium lg:opacity-100 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    Understanding NDVI
                  </span>
                </NavLink>
              </li>
              <li className="mb-1 last:mb-0">
                <NavLink
                  end
                  to="/help/elevation-toolbox"
                  className={({ isActive }) =>
                    "block transition duration-150 truncate " +
                    (isActive
                      ? "text-secondary-light"
                      : "text-tint-light hover:text-slate-200")
                  }
                >
                  <span className="text-sm font-medium lg:opacity-100 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    Elevation Toolbox
                  </span>
                </NavLink>
              </li>
              <li className="mb-1 last:mb-0">
                <NavLink
                  end
                  to="/help/3d-point-cloud"
                  className={({ isActive }) =>
                    "block transition duration-150 truncate " +
                    (isActive
                      ? "text-secondary-light"
                      : "text-tint-light hover:text-slate-200")
                  }
                >
                  <span className="text-sm font-medium lg:opacity-100 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    3D Point Cloud
                  </span>
                </NavLink>
              </li>
              <li className="mb-1 last:mb-0">
                <NavLink
                  end
                  to="/help/support-Page"
                  className={({ isActive }) =>
                    "block transition duration-150 truncate " +
                    (isActive
                      ? "text-secondary-light"
                      : "text-tint-light hover:text-slate-200")
                  }
                >
                  <span className="text-sm font-medium lg:opacity-100 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    AgEarth Support Page
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>
      </div>
      {/* help part End */}

      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-primary p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between items-center pr-3 sm:px-2">
            {/*expand sidebar Logo */}
         <div className="hidden lg:block">
         {sidebarExpanded ? (
            <div>
              <NavLink end to="/" className="hidden lg:block">
                <Logo/>
              </NavLink>
            </div>
          ) : (
            <></>
          )}
         </div>

        {/* mobile device sidebar logo */}
         <div>
              <NavLink end to="/" className="lg:hidden block">
              <Logo/>
              </NavLink>
            </div>
 

          {/* Expand / collapse button */}
          <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto -ml-1">
            <div className="px-3 py-2">
              <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
                <span className="sr-only">Expand / collapse sidebar</span>
                <svg
                  className="w-6 h-6 fill-current sidebar-expanded:rotate-180"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="text-tint-light"
                    d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                  />
                  <path className="text-tint" d="M3 23H1V1h2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-tint hover:text-tint-light"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
        </div>

        {/* trail ============== */}
        {sidebarExpanded ? (
          <div className="bg-[#f37a10] lg:block hidden text-white p-2 rounded-lg mt-4 text-xs">
            Trial expires in 4 days.
            <a href="/" className="underline font-bold">
              Upgrade now.
            </a>
          </div>
        ) : (
          <div></div>
        )}
        {/* for mobile devices */}
        <div className="lg:hidden block bg-[#f37a10] text-white p-2 rounded-lg mt-4 text-xs">
          Trial expires in 4 days.
          <a href="/" className="underline font-bold">
            Upgrade now.
          </a>
        </div>


    {/*collapse Logo */}
    {sidebarExpanded ? (
            <>
            </>
          ) : (
            <div> 
              <NavLink end to="/" className="hidden ml-2 lg:block">
              <Logo/>
              </NavLink></div>
          )}
        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
          
            <ul className="mt-3">


              
              {/* Projects */}

              <li
                activecondition={
                  pathname === "/" || pathname.includes("projects")
                }
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname === "/" || pathname.includes("projects")
                    ? "bg-primary-dark"
                    : ""
                }`}
              >
                <NavLink
                  end
                  to="/"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("projects")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 icon h-6 w-6 icon-tabler icon-tabler-map-pin"
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        stroke="none"
                        className={`fill-current ${
                          pathname === "/" || pathname.includes("projects")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
                      />
                      <circle  className={`stroke-current ${
                          pathname === "/" || pathname.includes("projects")
                            ? "text-primary"
                            : "text-primary"
                        }`} cx="12" cy="11" r="3" />
                    </svg>

                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Projects
                    </span>
                  </div>
                </NavLink>
              </li>

              {/* Map*/}

              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("map") && "bg-primary-dark"
                }`}
              >
                <NavLink
                  end
                  to="/map"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("map")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon shrink-0 w-6 h-6 icon-tabler icon-tabler-map-2"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#9e9e9e"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line  className={`stroke-current ${
                          pathname === "/map" || pathname.includes("map")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`} x1="18" y1="6" x2="18" y2="6.01" />
                      <path
                        d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5"
                        className={`stroke-current ${
                          pathname === "/map" || pathname.includes("map")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                      />
                      <polyline
                        className={`stroke-current ${
                          pathname === "/map" || pathname.includes("map")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15"
                      />
                      <line
                        className={`stroke-current ${
                          pathname === "/map" || pathname.includes("map")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        x1="9"
                        y1="4"
                        x2="9"
                        y2="17"
                      />
                      <line
                        className={`stroke-current ${
                          pathname === "/map" || pathname.includes("map")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        x1="15"
                        y1="15"
                        x2="15"
                        y2="20"
                      />
                    </svg>

                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Map
                    </span>
                  </div>
                </NavLink>
              </li>

              {/* Flight Logs*/}

              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("flightLogs") && "bg-primary-dark"
                }`}
              >
                <NavLink
                  end
                  to="/flightLogs"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("flightLogs")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon shrink-0 w-6 h-6 icon-tabler icon-tabler-brand-telegram"
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
                      <path
                        className={`stroke-current ${
                          pathname === "/flightLogs" ||
                          pathname.includes("flightLogs")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"
                      />
                    </svg>

                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Flight Logs
                    </span>
                  </div>
                </NavLink>
              </li>

              {/* Equipment */}

              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("equipment") && "bg-primary-dark"
                }`}
              >
                <NavLink
                  end
                  to="/equipment"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("equipment")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 w-6 h-6 icon icon-tabler icon-tabler-drone"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#9e9e9e"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        className={`stroke-current ${
                          pathname === "/equipment" ||
                          pathname.includes("equipment")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        d="M10 10h4v4h-4z"
                      />
                      <line
                        className={`stroke-current ${
                          pathname === "/equipment" ||
                          pathname.includes("equipment")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        x1="10"
                        y1="10"
                        x2="6.5"
                        y2="6.5"
                      />
                      <path
                        className={`stroke-current ${
                          pathname === "/equipment" ||
                          pathname.includes("equipment")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        d="M9.96 6a3.5 3.5 0 1 0 -3.96 3.96"
                      />
                      <path
                        className={`stroke-current ${
                          pathname === "/equipment" ||
                          pathname.includes("equipment")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        d="M14 10l3.5 -3.5"
                      />
                      <path
                        className={`stroke-current ${
                          pathname === "/equipment" ||
                          pathname.includes("equipment")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        d="M18 9.96a3.5 3.5 0 1 0 -3.96 -3.96"
                      />
                      <line
                        className={`stroke-current ${
                          pathname === "/equipment" ||
                          pathname.includes("equipment")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        x1="14"
                        y1="14"
                        x2="17.5"
                        y2="17.5"
                      />
                      <path
                        className={`stroke-current ${
                          pathname === "/equipment" ||
                          pathname.includes("equipment")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        d="M14.04 18a3.5 3.5 0 1 0 3.96 -3.96"
                      />
                      <line
                        className={`stroke-current ${
                          pathname === "/equipment" ||
                          pathname.includes("equipment")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        x1="10"
                        y1="14"
                        x2="6.5"
                        y2="17.5"
                      />
                      <path
                        className={`stroke-current ${
                          pathname === "/equipment" ||
                          pathname.includes("equipment")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        d="M6 14.04a3.5 3.5 0 1 0 3.96 3.96"
                      />
                    </svg>

                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Equipment
                    </span>
                  </div>
                </NavLink>
              </li>

              {/* Pilots */}

              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("pilots") && "bg-primary-dark"
                }`}
              >
                <NavLink
                  end
                  to="/pilots"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("pilots")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 w-6 h-6 icon icon-tabler icon-tabler-location"
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
                      <path
                        stroke="none"
                        className={`fill-current ${
                          pathname === "/pilots" || pathname.includes("pilots")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5"
                      />
                    </svg>

                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Pilots
                    </span>
                  </div>
                </NavLink>
              </li>

              {/* Apps*/}

              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("appsPage") && "bg-primary-dark"
                }`}
              >
                <NavLink
                  end
                  to="/appsPage"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("appsPage")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 icon icon-tabler icon-tabler-sort-ascending-2"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#9e9e9e"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        className={`stroke-current ${
                          pathname === "/appsPage" ||
                          pathname.includes("appsPage")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        d="M14 9l3 -3l3 3"
                      />
                      <rect
                        className={`stroke-current ${
                          pathname === "/appsPage" ||
                          pathname.includes("appsPage")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        x="5"
                        y="5"
                        width="5"
                        height="5"
                        rx=".5"
                      />
                      <rect
                        className={`stroke-current ${
                          pathname === "/appsPage" ||
                          pathname.includes("appsPage")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        x="5"
                        y="14"
                        width="5"
                        height="5"
                        rx=".5"
                      />
                      <path
                        className={`stroke-current ${
                          pathname === "/appsPage" ||
                          pathname.includes("appsPage")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        d="M17 6v12"
                      />
                    </svg>

                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Apps
                    </span>
                  </div>
                </NavLink>
              </li>

              {/* Organization */}

              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("organization") && "bg-primary-dark"
                }`}
              >
                <NavLink
                  end
                  to="/organization"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("organization")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon shrink-0 w-6 h-6 icon-tabler icon-tabler-building-skyscraper"
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
                      <line
                        className={`stroke-current ${
                          pathname === "/organization" ||
                          pathname.includes("organization")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        x1="3"
                        y1="21"
                        x2="21"
                        y2="21"
                      />
                      <path
                        className={`stroke-current ${
                          pathname === "/organization" ||
                          pathname.includes("organization")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        d="M5 21v-14l8 -4v18"
                      />
                      <path
                        className={`stroke-current ${
                          pathname === "/organization" ||
                          pathname.includes("organization")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        d="M19 21v-10l-6 -4"
                      />
                      <line
                        className={`stroke-current ${
                          pathname === "/organization" ||
                          pathname.includes("organization")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        x1="9"
                        y1="9"
                        x2="9"
                        y2="9.01"
                      />
                      <line
                        className={`stroke-current ${
                          pathname === "/organization" ||
                          pathname.includes("organization")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        x1="9"
                        y1="12"
                        x2="9"
                        y2="12.01"
                      />
                      <line
                        className={`stroke-current ${
                          pathname === "/organization" ||
                          pathname.includes("organization")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        x1="9"
                        y1="15"
                        x2="9"
                        y2="15.01"
                      />
                      <line
                        className={`stroke-current ${
                          pathname === "/organization" ||
                          pathname.includes("organization")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        x1="9"
                        y1="18"
                        x2="9"
                        y2="18.01"
                      />
                    </svg>

                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Organization
                    </span>
                  </div>
                </NavLink>
              </li>

              {/* help------- */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("help") && "bg-primary-dark"
                }`}
                onClick={ToggleSidebar}
              >
                <NavLink
                  end
                  to=""
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("help")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 icon icon-tabler icon-tabler-zoom-question"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#9e9e9e"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle
                        cx="10"
                        cy="10"
                        r="7"
                        className={`stroke-current ${
                          pathname === "/help" || pathname.includes("help")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                      />

                      <line
                        className={`stroke-current ${
                          pathname === "/help" || pathname.includes("help")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        x1="10"
                        y1="13"
                        x2="10"
                        y2="13.01"
                      />
                      <path
                        className={`stroke-current ${
                          pathname === "/help" || pathname.includes("help")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        d="M10 10a1.5 1.5 0 1 0 -1.14 -2.474"
                      />
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Help
                    </span>
                  </div>
                </NavLink>
              </li>

              {/* Preferences */}

              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("preferences") && "bg-primary-dark"
                }`}
              >
                <NavLink
                  end
                  to="/preferences"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("preferences")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 icon icon-tabler icon-tabler-settings"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#9e9e9e"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        className={`stroke-current ${
                          pathname === "/preferences" ||
                          pathname.includes("preferences")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"
                      />
                      <circle
                        className={`stroke-current ${
                          pathname === "/preferences" ||
                          pathname.includes("preferences")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        cx="12"
                        cy="12"
                        r="3"
                      />
                    </svg>

                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Preferences
                    </span>
                  </div>
                </NavLink>
              </li>

              {/* Dashboard */}
              <SidebarLinkGroup
                activecondition={
                  pathname === "/dashboard" || pathname.includes("dashboard")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname === "/dashboard" ||
                          pathname.includes("dashboard")
                            ? "hover:text-slate-200"
                            : "hover:text-white"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick();
                          setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg
                              className="shrink-0 h-6 w-6"
                              viewBox="0 0 24 24"
                            >
                              <path
                                className={`fill-current ${
                                  pathname === "/dashboard" ||
                                  pathname.includes("dashboard")
                                    ? "text-secondary-light"
                                    : "text-tint"
                                }`}
                                d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                              />
                              <path
                                className={`fill-current ${
                                  pathname === "/dashboard" ||
                                  pathname.includes("dashboard")
                                    ? "text-secondary"
                                    : "text-tint-dark"
                                }`}
                                d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                              />
                              <path
                                className={`fill-current ${
                                  pathname === "/dashboard" ||
                                  pathname.includes("dashboard")
                                    ? "text-indigo-200"
                                    : "text-tint-light"
                                }`}
                                d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
                              />
                            </svg>
                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Dashboard
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg
                              className={`w-3 h-3 shrink-0 ml-1 fill-current text-tint-light ${
                                open && "rotate-180"
                              }`}
                              viewBox="0 0 12 12"
                            >
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/dashboard"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Main
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/dashboard/analytics"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Analytics
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/dashboard/fintech"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Fintech
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* E-Commerce */}
              <SidebarLinkGroup
                activecondition={pathname.includes("ecommerce")}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("ecommerce")
                            ? "hover:text-slate-200"
                            : "hover:text-white"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick();
                          setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg
                              className="shrink-0 h-6 w-6"
                              viewBox="0 0 24 24"
                            >
                              <path
                                className={`fill-current ${
                                  pathname.includes("ecommerce")
                                    ? "text-secondary-100"
                                    : "text-tint-light"
                                }`}
                                d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
                              />
                              <path
                                className={`fill-current ${
                                  pathname.includes("ecommerce")
                                    ? "text-secondary"
                                    : "text-tint-dark"
                                }`}
                                d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
                              />
                              <path
                                className={`fill-current ${
                                  pathname.includes("ecommerce")
                                    ? "text-secondary-light"
                                    : "text-tint"
                                }`}
                                d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
                              />
                            </svg>
                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              E-Commerce
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg
                              className={`w-3 h-3 shrink-0 ml-1 fill-current text-tint-light ${
                                open && "rotate-180"
                              }`}
                              viewBox="0 0 12 12"
                            >
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/ecommerce/customers"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Customers
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/ecommerce/orders"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Orders
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/ecommerce/invoices"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Invoices
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/ecommerce/shop"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Shop
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/ecommerce/shop-2"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Shop 2
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/ecommerce/product"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Single Product
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/ecommerce/cart"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Cart
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/ecommerce/cart-2"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Cart 2
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/ecommerce/cart-3"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Cart 3
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/ecommerce/pay"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Pay
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Community */}
              <SidebarLinkGroup
                activecondition={pathname.includes("community")}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("community")
                            ? "hover:text-slate-200"
                            : "hover:text-white"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick();
                          setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg
                              className="shrink-0 h-6 w-6"
                              viewBox="0 0 24 24"
                            >
                              <path
                                className={`fill-current ${
                                  pathname.includes("community")
                                    ? "text-secondary-light"
                                    : "text-tint"
                                }`}
                                d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"
                              />
                              <path
                                className={`fill-current ${
                                  pathname.includes("community")
                                    ? "text-secondary"
                                    : "text-tint-light"
                                }`}
                                d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"
                              />
                            </svg>
                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Community
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg
                              className={`w-3 h-3 shrink-0 ml-1 fill-current text-tint-light ${
                                open && "rotate-180"
                              }`}
                              viewBox="0 0 12 12"
                            >
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/community/users-tabs"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Users - Tabs
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/community/users-tiles"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Users - Tiles
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/community/profile"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Profile
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/community/feed"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Feed
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/community/forum"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Forum
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/community/forum-post"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Forum - Post
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/community/meetups"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Meetups
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/community/meetups-post"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Meetups - Post
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Finance */}
              <SidebarLinkGroup activecondition={pathname.includes("finance")}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("finance")
                            ? "hover:text-slate-200"
                            : "hover:text-white"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick();
                          setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg
                              className="shrink-0 h-6 w-6"
                              viewBox="0 0 24 24"
                            >
                              <path
                                className={`fill-current ${
                                  pathname.includes("finance")
                                    ? "text-secondary-100"
                                    : "text-tint-light"
                                }`}
                                d="M13 6.068a6.035 6.035 0 0 1 4.932 4.933H24c-.486-5.846-5.154-10.515-11-11v6.067Z"
                              />
                              <path
                                className={`fill-current ${
                                  pathname.includes("finance")
                                    ? "text-secondary-light"
                                    : "text-tint-dark"
                                }`}
                                d="M18.007 13c-.474 2.833-2.919 5-5.864 5a5.888 5.888 0 0 1-3.694-1.304L4 20.731C6.131 22.752 8.992 24 12.143 24c6.232 0 11.35-4.851 11.857-11h-5.993Z"
                              />
                              <path
                                className={`fill-current ${
                                  pathname.includes("finance")
                                    ? "text-secondary"
                                    : "text-tint"
                                }`}
                                d="M6.939 15.007A5.861 5.861 0 0 1 6 11.829c0-2.937 2.167-5.376 5-5.85V0C4.85.507 0 5.614 0 11.83c0 2.695.922 5.174 2.456 7.17l4.483-3.993Z"
                              />
                            </svg>
                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Finance
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg
                              className={`w-3 h-3 shrink-0 ml-1 fill-current text-tint-light ${
                                open && "rotate-180"
                              }`}
                              viewBox="0 0 12 12"
                            >
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/finance/cards"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Cards
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/finance/transactions"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Transactions
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/finance/transaction-details"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Transaction Details
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Job Board */}
              <SidebarLinkGroup activecondition={pathname.includes("job")}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("job")
                            ? "hover:text-slate-200"
                            : "hover:text-white"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick();
                          setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg
                              className="shrink-0 h-6 w-6"
                              viewBox="0 0 24 24"
                            >
                              <path
                                className={`fill-current ${
                                  pathname.includes("job")
                                    ? "text-secondary"
                                    : "text-tint-dark"
                                }`}
                                d="M4.418 19.612A9.092 9.092 0 0 1 2.59 17.03L.475 19.14c-.848.85-.536 2.395.743 3.673a4.413 4.413 0 0 0 1.677 1.082c.253.086.519.131.787.135.45.011.886-.16 1.208-.474L7 21.44a8.962 8.962 0 0 1-2.582-1.828Z"
                              />
                              <path
                                className={`fill-current ${
                                  pathname.includes("job")
                                    ? "text-secondary-light"
                                    : "text-tint"
                                }`}
                                d="M10.034 13.997a11.011 11.011 0 0 1-2.551-3.862L4.595 13.02a2.513 2.513 0 0 0-.4 2.645 6.668 6.668 0 0 0 1.64 2.532 5.525 5.525 0 0 0 3.643 1.824 2.1 2.1 0 0 0 1.534-.587l2.883-2.882a11.156 11.156 0 0 1-3.861-2.556Z"
                              />
                              <path
                                className={`fill-current ${
                                  pathname.includes("job")
                                    ? "text-secondary-100"
                                    : "text-tint-light"
                                }`}
                                d="M21.554 2.471A8.958 8.958 0 0 0 18.167.276a3.105 3.105 0 0 0-3.295.467L9.715 5.888c-1.41 1.408-.665 4.275 1.733 6.668a8.958 8.958 0 0 0 3.387 2.196c.459.157.94.24 1.425.246a2.559 2.559 0 0 0 1.87-.715l5.156-5.146c1.415-1.406.666-4.273-1.732-6.666Zm.318 5.257c-.148.147-.594.2-1.256-.018A7.037 7.037 0 0 1 18.016 6c-1.73-1.728-2.104-3.475-1.73-3.845a.671.671 0 0 1 .465-.129c.27.008.536.057.79.146a7.07 7.07 0 0 1 2.6 1.711c1.73 1.73 2.105 3.472 1.73 3.846Z"
                              />
                            </svg>
                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Job Board
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg
                              className={`w-3 h-3 shrink-0 ml-1 fill-current text-tint-light ${
                                open && "rotate-180"
                              }`}
                              viewBox="0 0 12 12"
                            >
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/job/job-listing"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Listing
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/job/job-post"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Job Post
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/job/company-profile"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Company Profile
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Tasks */}
              <SidebarLinkGroup activecondition={pathname.includes("tasks")}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("tasks")
                            ? "hover:text-slate-200"
                            : "hover:text-white"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick();
                          setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg
                              className="shrink-0 h-6 w-6"
                              viewBox="0 0 24 24"
                            >
                              <path
                                className={`fill-current ${
                                  pathname.includes("tasks")
                                    ? "text-secondary-light"
                                    : "text-tint"
                                }`}
                                d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z"
                              />
                              <path
                                className={`fill-current ${
                                  pathname.includes("tasks")
                                    ? "text-secondary"
                                    : "text-tint"
                                }`}
                                d="M1 1h22v23H1z"
                              />
                              <path
                                className={`fill-current ${
                                  pathname.includes("tasks")
                                    ? "text-secondary-100"
                                    : "text-tint-light"
                                }`}
                                d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z"
                              />
                            </svg>
                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Tasks
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg
                              className={`w-3 h-3 shrink-0 ml-1 fill-current text-tint-light ${
                                open && "rotate-180"
                              }`}
                              viewBox="0 0 12 12"
                            >
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/tasks/kanban"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Kanban
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/tasks/list"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                List
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Messages */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("messages") && "bg-primary-dark"
                }`}
              >
                <NavLink
                  end
                  to="/messages"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("messages")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center">
                      <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                        <path
                          className={`fill-current ${
                            pathname.includes("messages")
                              ? "text-secondary"
                              : "text-tint"
                          }`}
                          d="M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z"
                        />
                        <path
                          className={`fill-current ${
                            pathname.includes("messages")
                              ? "text-secondary-100"
                              : "text-tint-light"
                          }`}
                          d="M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z"
                        />
                      </svg>
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        Messages
                      </span>
                    </div>
                    {/* Badge */}
                    <div className="flex flex-shrink-0 ml-2">
                      <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-secondary px-2 rounded">
                        4
                      </span>
                    </div>
                  </div>
                </NavLink>
              </li>
              {/* Inbox */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("inbox") && "bg-primary-dark"
                }`}
              >
                <NavLink
                  end
                  to="/inbox"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("inbox")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path
                        className={`fill-current ${
                          pathname.includes("inbox")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        d="M16 13v4H8v-4H0l3-9h18l3 9h-8Z"
                      />
                      <path
                        className={`fill-current ${
                          pathname.includes("inbox")
                            ? "text-secondary"
                            : "text-tint-light"
                        }`}
                        d="m23.72 12 .229.686A.984.984 0 0 1 24 13v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-8c0-.107.017-.213.051-.314L.28 12H8v4h8v-4H23.72ZM13 0v7h3l-4 5-4-5h3V0h2Z"
                      />
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Inbox
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* Calendar */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("calendar") && "bg-primary-dark"
                }`}
              >
                <NavLink
                  end
                  to="/calendar"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("calendar")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path
                        className={`fill-current ${
                          pathname.includes("calendar")
                            ? "text-secondary"
                            : "text-tint"
                        }`}
                        d="M1 3h22v20H1z"
                      />
                      <path
                        className={`fill-current ${
                          pathname.includes("calendar")
                            ? "text-secondary-100"
                            : "text-tint-light"
                        }`}
                        d="M21 3h2v4H1V3h2V1h4v2h10V1h4v2Z"
                      />
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Calendar
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* Campaigns */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("campaigns") && "bg-primary-dark"
                }`}
              >
                <NavLink
                  end
                  to="/campaigns"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("campaigns")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path
                        className={`fill-current ${
                          pathname.includes("campaigns")
                            ? "text-secondary-light"
                            : "text-tint"
                        }`}
                        d="M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z"
                      />
                      <path
                        className={`fill-current ${
                          pathname.includes("campaigns")
                            ? "text-secondary"
                            : "text-tint-light"
                        }`}
                        d="M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z"
                      />
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Campaigns
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* Settings */}
              <SidebarLinkGroup activecondition={pathname.includes("settings")}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("settings")
                            ? "hover:text-slate-200"
                            : "hover:text-white"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick();
                          setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg
                              className="shrink-0 h-6 w-6"
                              viewBox="0 0 24 24"
                            >
                              <path
                                className={`fill-current ${
                                  pathname.includes("settings")
                                    ? "text-secondary"
                                    : "text-tint"
                                }`}
                                d="M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z"
                              />
                              <path
                                className={`fill-current ${
                                  pathname.includes("settings")
                                    ? "text-secondary-100"
                                    : "text-tint-light"
                                }`}
                                d="M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z"
                              />
                              <path
                                className={`fill-current ${
                                  pathname.includes("settings")
                                    ? "text-secondary"
                                    : "text-tint"
                                }`}
                                d="M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z"
                              />
                              <path
                                className={`fill-current ${
                                  pathname.includes("settings")
                                    ? "text-secondary-100"
                                    : "text-tint-light"
                                }`}
                                d="M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z"
                              />
                            </svg>
                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Settings
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg
                              className={`w-3 h-3 shrink-0 ml-1 fill-current text-tint-light ${
                                open && "rotate-180"
                              }`}
                              viewBox="0 0 12 12"
                            >
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/settings/account"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                My Account
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/settings/notifications"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                My Notifications
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/settings/apps"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Connected Apps
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/settings/plans"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Plans
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/settings/billing"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Billing & Invoices
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/settings/feedback"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Give Feedback
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Utility */}
              <SidebarLinkGroup activecondition={pathname.includes("utility")}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("utility")
                            ? "hover:text-slate-200"
                            : "hover:text-white"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick();
                          setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg
                              className="shrink-0 h-6 w-6"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className={`fill-current ${
                                  pathname.includes("utility")
                                    ? "text-secondary-100"
                                    : "text-tint-light"
                                }`}
                                cx="18.5"
                                cy="5.5"
                                r="4.5"
                              />
                              <circle
                                className={`fill-current ${
                                  pathname.includes("utility")
                                    ? "text-secondary"
                                    : "text-tint"
                                }`}
                                cx="5.5"
                                cy="5.5"
                                r="4.5"
                              />
                              <circle
                                className={`fill-current ${
                                  pathname.includes("utility")
                                    ? "text-secondary"
                                    : "text-tint"
                                }`}
                                cx="18.5"
                                cy="18.5"
                                r="4.5"
                              />
                              <circle
                                className={`fill-current ${
                                  pathname.includes("utility")
                                    ? "text-secondary-100"
                                    : "text-tint-light"
                                }`}
                                cx="5.5"
                                cy="18.5"
                                r="4.5"
                              />
                            </svg>
                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Utility
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg
                              className={`w-3 h-3 shrink-0 ml-1 fill-current text-tint-light ${
                                open && "rotate-180"
                              }`}
                              viewBox="0 0 12 12"
                            >
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/utility/changelog"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Changelog
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/utility/roadmap"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Roadmap
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/utility/faqs"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                FAQs
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/utility/empty-state"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Empty State
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/utility/404"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                404
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/utility/knowledge-base"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Knowledge Base
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>
          {/* More group */}
          <div>
            <h3 className="text-xs uppercase text-tint font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                More
              </span>
            </h3>
            <ul className="mt-3">
              {/* Authentication */}
              <SidebarLinkGroup>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          open ? "hover:text-slate-200" : "hover:text-white"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick();
                          setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg
                              className="shrink-0 h-6 w-6"
                              viewBox="0 0 24 24"
                            >
                              <path
                                className="fill-current text-tint"
                                d="M8.07 16H10V8H8.07a8 8 0 110 8z"
                              />
                              <path
                                className="fill-current text-tint-light"
                                d="M15 12L8 6v5H0v2h8v5z"
                              />
                            </svg>
                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Authentication
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg
                              className={`w-3 h-3 shrink-0 ml-1 fill-current text-tint-light ${
                                open && "rotate-180"
                              }`}
                              viewBox="0 0 12 12"
                            >
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/signin"
                              className="block text-tint-light hover:text-slate-200 transition duration-150 truncate"
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Sign in
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/signup"
                              className="block text-tint-light hover:text-slate-200 transition duration-150 truncate"
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Sign up
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/reset-password"
                              className="block text-tint-light hover:text-slate-200 transition duration-150 truncate"
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Reset Password
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Onboarding */}
              <SidebarLinkGroup>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          open ? "hover:text-slate-200" : "hover:text-white"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick();
                          setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg
                              className="shrink-0 h-6 w-6"
                              viewBox="0 0 24 24"
                            >
                              <path
                                className="fill-current text-tint"
                                d="M19 5h1v14h-2V7.414L5.707 19.707 5 19H4V5h2v11.586L18.293 4.293 19 5Z"
                              />
                              <path
                                className="fill-current text-tint-light"
                                d="M5 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm14 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM5 23a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm14 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
                              />
                            </svg>
                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Onboarding
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg
                              className={`w-3 h-3 shrink-0 ml-1 fill-current text-tint-light ${
                                open && "rotate-180"
                              }`}
                              viewBox="0 0 12 12"
                            >
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/onboarding-01"
                              className="block text-tint-light hover:text-slate-200 transition duration-150 truncate"
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Step 1
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/onboarding-02"
                              className="block text-tint-light hover:text-slate-200 transition duration-150 truncate"
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Step 2
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/onboarding-03"
                              className="block text-tint-light hover:text-slate-200 transition duration-150 truncate"
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Step 3
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/onboarding-04"
                              className="block text-tint-light hover:text-slate-200 transition duration-150 truncate"
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Step 4
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Components */}
              <SidebarLinkGroup
                activecondition={pathname.includes("component")}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("component")
                            ? "hover:text-slate-200"
                            : "hover:text-white"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick();
                          setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg
                              className="shrink-0 h-6 w-6"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className={`fill-current ${
                                  pathname.includes("component")
                                    ? "text-secondary-light"
                                    : "text-tint"
                                }`}
                                cx="16"
                                cy="8"
                                r="8"
                              />
                              <circle
                                className={`fill-current ${
                                  pathname.includes("component")
                                    ? "text-secondary"
                                    : "text-tint-light"
                                }`}
                                cx="8"
                                cy="16"
                                r="8"
                              />
                            </svg>
                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Components
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg
                              className={`w-3 h-3 shrink-0 ml-1 fill-current text-tint-light ${
                                open && "rotate-180"
                              }`}
                              viewBox="0 0 12 12"
                            >
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/component/button"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Button
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/component/form"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Input Form
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/component/dropdown"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Dropdown
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/component/alert"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Alert & Banner
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/component/modal"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Modal
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/component/pagination"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Pagination
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/component/tabs"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Tabs
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/component/breadcrumb"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Breadcrumb
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/component/badge"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Badge
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/component/avatar"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Avatar
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/component/tooltip"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Tooltip
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/component/accordion"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Accordion
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/component/icons"
                              className={({ isActive }) =>
                                "block transition duration-150 truncate " +
                                (isActive
                                  ? "text-secondary-light"
                                  : "text-tint-light hover:text-slate-200")
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Icons
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
