import React from "react";
import { Link } from "react-router-dom";
import DropdownEditMenu from "../../components/DropdownEditMenu";

const ProjectListItem = (props) => {
  return (
    <div
      className={`shadow-lg rounded-sm border w-auto m-2  px-5 py-4 ${
        props.type === "Featured"
          ? "bg-amber-50 border-amber-300"
          : "bg-white border-slate-200"
      }`}
    >
      <div className="md:flex  justify-between  items-center space-y-4 md:space-y-0 space-x-2">
        {/* Left side */}
        <div className="flex items-start items-center space-x-3 md:space-x-4">
          <div className="w-9 h-9 shrink-0 mt-1">
            <img
              className="w-9 h-9 rounded-full"
              src={props.image}
              width="36"
              height="36"
              alt={props.company}
            />
          </div>
          <div>
            <Link
              className="inline-flex font-semibold text-slate-800"
              to={props.link}
            >
              {props.role}
            </Link>
            {/* example  */}

            {/* Start */}
            <div className="text-xs m-2 inline-flex font-medium bg-slate-700 text-slate-100 rounded-full text-center px-2.5 py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon mr-2 icon-tabler icon-tabler-box-multiple"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="7" y="3" width="14" height="14" rx="2" />
                <path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
              </svg>
              Example
            </div>
            {/* End */}
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center space-x-4 pl-10 md:pl-0">
          <div className="text-sm text-slate-500 whitespace-nowrap">
            {props.date}
          </div>

          {/* Quick Selection */}
          <div>
            <DropdownEditMenu className="relative inline-flex">
              {/* fly  */}
              <li>
                <a
                  className="font-medium text-xs text-slate-600  hover:text-slate-800 flex py-1 px-3"
                  href="#0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="-rotate-90 mr-2 icon icon-tabler icon-tabler-plane"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="0.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      className="fill-slate-600 opacity-50 "
                      d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z"
                    />
                  </svg>
                  Fly
                </a>
              </li>
              {/* move to folder  */}
              <li>
                <a
                  className="font-medium  text-slate-600 text-xs hover:text-slate-800 flex py-1 px-3"
                  href="#0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-folder mr-2"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="0.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      className="fill-slate-600 opacity-50 "
                      d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2"
                    />
                  </svg>
                  Move to folder
                </a>
              </li>
              {/* share  */}
              <li>
                <a
                  className="font-medium  text-slate-600 text-xs hover:text-slate-800 flex py-1 px-3"
                  href="#0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon mr-2 icon-tabler icon-tabler-share"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#9e9e9e"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle
                      cx="6"
                      cy="12"
                      r="3"
                      stroke="none"
                      className="fill-slate-600 opacity-50 "
                    />
                    <circle
                      cx="18"
                      cy="6"
                      r="3"
                      stroke="none"
                      className="fill-slate-600 opacity-50 "
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="3"
                      stroke="none"
                      className="fill-slate-600 opacity-50 "
                    />
                    <line x1="8.7" y1="10.7" x2="15.3" y2="7.3" />
                    <line x1="8.7" y1="13.3" x2="15.3" y2="16.7" />
                  </svg>
                  Share
                </a>
              </li>
              {/* user Settings  */}
              <li>
                <a
                  className="font-medium  text-slate-600 text-xs hover:text-slate-800 flex py-1 px-3"
                  href="#0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 icon icon-tabler icon-tabler-users"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#9e9e9e"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle
                      cx="9"
                      cy="7"
                      r="4"
                      stroke="none"
                      className="fill-slate-600 opacity-50 "
                    />
                    <path
                      d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"
                      stroke="none"
                      className="fill-slate-600 opacity-50 "
                    />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                  </svg>
                  User Settings
                </a>
              </li>
              {/* delete examples */}
              <li>
                <a
                  className="font-medium text-xs text-rose-500 hover:text-rose-600 flex py-1 px-3"
                  href="#0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 icon icon-tabler icon-tabler-trash"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#9e9e9e"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                  </svg>
                  Delete
                </a>
              </li>
            </DropdownEditMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectListItem;
