import React from "react";
import map1 from "../../images/map1.jpg";

const QuickAccess = () => {
  return (
    <React.Fragment>
      {/* Card 1 */}
      <a href="https://www.google.com/">
      <div className="relative basis-1/2 w-[170px] lg:w-[200px] h-52 bg-white shadow-lg rounded-lg border border-slate-200 overflow-hidden">
        {/* Image */}
        <img
          className="absolute w-full h-full object-cover"
          src={map1}
          width="386"
          height="260"
          alt="Application 17"
        />
        {/* Gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent"
          aria-hidden="true"
        ></div>
        {/* Content */}
        <div className="relative h-full p-5 flex flex-col justify-end">
          <h3 className="text-sm truncate text-white font-semibold mt-16 mb-0.5">
            Agriculture Example
          </h3>
          <p className="text-xs text-white">April 22, 2023</p>
          <a
            className="text-sm font-medium text-secondary-light hover:text-secondary"
            href="https://www.google.com/"
          >
            Explore -&gt;
          </a>
        </div>
      </div>
      </a>

      {/* Card 2 */}
     <a href="https://www.google.com/">
     <div className="relative basis-1/2 w-[170px] lg:w-[200px]  h-52 bg-white shadow-lg rounded-lg border border-slate-200 overflow-hidden">
        {/* Image */}
        <img
          className="absolute w-full h-full object-cover"
          src={map1}
          width="386"
          height="260"
          alt="Application 17"
        />
        {/* Gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent"
          aria-hidden="true"
        ></div>
        {/* Content */}
        <div className="relative h-full p-5 flex flex-col justify-end">
          <h3 className="text-sm truncate text-white font-semibold mt-16 mb-0.5">
            Project Progress Example
          </h3>
          <p className="text-xs text-white">April 22, 2023</p>
          <a
            className="text-sm font-medium text-secondary-light hover:text-secondary"
            href="https://www.google.com/"
          >
            Explore -&gt;
          </a>
        </div>
      </div>
     </a>

      
      {/* Card 3 */}
     <a href="https://www.google.com/">
     <div className="relative basis-1/2 w-[170px] lg:w-[200px]  h-52 bg-white shadow-lg rounded-lg border border-slate-200 overflow-hidden">
        {/* Image */}
        <img
          className="absolute w-full h-full object-cover"
          src={map1}
          width="386"
          height="260"
          alt="Application 17"
        />
        {/* Gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent"
          aria-hidden="true"
        ></div>
        {/* Content */}
        <div className="relative h-full p-5 flex flex-col justify-end">
          <h3 className="text-sm truncate text-white font-semibold mt-16 mb-0.5">
          Walkthrough Closeout Example
          </h3>
          <p className="text-xs text-white">April 22, 2023</p>
          <a
            className="text-sm font-medium text-secondary-light hover:text-secondary"
            href="https://www.google.com/"
          >
            Explore -&gt;
          </a>
        </div>
      </div>
     </a>
     
    </React.Fragment>
  );
};

export default QuickAccess;
