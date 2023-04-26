import React, { useState } from "react";
import QuickAccess from "./QuickAccess";
import ProjectsList from "./ProjectsList";
import ModalBasic from "../../components/ModalBasic";

const ProjectsBody = () => {
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);

  return (
    <div className="bg flex flex-col flex-1 my-5 lg:mx-28 mx-5">
      {/* quick access */}
      <div className="mt-8">
        <h2 className="text-xl leading-snug text-slate-800 font-bold mb-5">
          Quick Access
        </h2>
        <div className="grid lg:grid-cols-12 gap-6">
          <QuickAccess />
        </div>
      </div>

      {/* all projects */}
      <div className="mt-8">
        <h2 className="text-xl leading-snug text-slate-800 font-bold mb-5">
          All Projects
        </h2>
        <div className="mb-5 flex">
          {/* new project button */}
          <div className="m-1.5">
            {/* Start */}
            <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
              <svg
                className="w-4 h-4 fill-current opacity-50 shrink-0"
                viewBox="0 0 16 16"
              >
                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
              </svg>
              <span className="ml-2 hidden lg:block">New Project</span>
            </button>
            {/* End */}
          </div>

          {/* new folder */}
          <div className="">
            {/* Start */}
            <div  className="m-1.5">
            <button
              className="btn  bg-indigo-500 hover:bg-indigo-600 text-white"
              aria-controls="feedback-modal"
              onClick={(e) => {
                e.stopPropagation();
                setFeedbackModalOpen(true);
              }}
            >
                <span className="ml-2 hidden lg:block">New Folder</span>
            
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 lg:ml-2 icon icon-tabler icon-tabler-folder-plus" width="28" height="28" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
  <line x1="12" y1="10" x2="12" y2="16" />
  <line x1="9" y1="13" x2="15" y2="13" />
</svg>
            </button>
            </div>
            <ModalBasic
              id="feedback-modal"
              modalOpen={feedbackModalOpen}
              setModalOpen={setFeedbackModalOpen}
              title="Create Folder"
            >
              {/* Modal content */}
              <div className="px-5 py-4">
                
                <div className="space-y-3">
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="name"
                    >
                      Folder Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      className="form-input w-full px-2 py-1"
                      type="text"
                      required
                    />
                  </div>
                  
                  
                </div>
              </div>
              {/* Modal footer */}
              <div className="px-5 py-4 border-t border-slate-200">
                <div className="flex flex-wrap justify-end space-x-2">
                  <button
                    className="btn-sm border-slate-200 hover:border-slate-300 text-slate-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFeedbackModalOpen(false);
                    }}
                  >
                    Cancel
                  </button>
                  <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">
                    Create Folder
                  </button>
                </div>
              </div>
            </ModalBasic>
            {/* End */}
          </div>
        </div>
        <ProjectsList />
      </div>
    </div>
  );
};

export default ProjectsBody;
