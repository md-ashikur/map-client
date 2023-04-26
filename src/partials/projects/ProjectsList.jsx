import React from 'react';
import ProjectListItem from './ProjectListItem';

import map1 from "../../images/map1.jpg";

import PaginationNumeric from '../../components/PaginationNumeric';
import DropdownSort from '../../components/DropdownSort';


const ProjectsList = () => {

    const items = [
        {
          id: 0,
          image: map1,
          company: 'Company 01',
          role: 'Agriculture Example',
          link: '/job/job-post',
          details: 'Contract / Remote / New York, NYC',
          date: 'April 22, 2023',
          type: 'Featured',
          fav: false,
        },
        {
          id: 1,
          image: map1,
          company: 'Company 02',
          role: 'Project Progress Example',
          link: '/job/job-post',
          details: 'Contract / Remote / New York, NYC',
          date: 'April 22, 2023',
          type: 'New',
          fav: true,
        },
        {
          id: 2,
          image: map1,
          company: 'Company 03',
          role: 'Walkthrough Closeout Example',
          link: '/job/job-post',
          details: 'Contract / Remote / New York, NYC',
          date: 'April 22, 2023',
          type: 'New',
          fav: false,
        },
        {
          id: 3,
          image: map1,
          company: 'Company 04',
          role: ' Closeout Example',
          link: '/job/job-post',
          details: 'Full-time / Remote / Anywhere',
          date: 'April 22, 2023',
          type: 'New',
          fav: false,
        },
       
       
      ];
    return (
        <div>
              {/* Content */}
              <div className='w-full'>


                {/* Jobs list */}
                <div className='space-y-2'>
                  {items.map((item) => {
                    return (
                      <ProjectListItem
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        role={item.role}
                        link={item.link}
                        details={item.details}
                        date={item.date}
                        type={item.type}
                        fav={item.fav}
                      />
                    );
                  })}
                </div>

                {/* Pagination */}
                <div className="mt-6">
                  <PaginationNumeric />
                </div>

              </div>
        </div>
    );
};

export default ProjectsList;