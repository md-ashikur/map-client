import React from 'react';
import mapview from '../../images/mapview.png';

const ProjectsMapView = () => {
    return (
        <div className='flex mt-16 gap-4 lg:h-96 w-full overflow-hidden'>
   <img src={mapview} alt="" className='w-auto h-auto'/>
        </div>
    );
};

export default ProjectsMapView;