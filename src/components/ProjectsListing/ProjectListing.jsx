import React from 'react';
import './ProjectListing.scss';
import { useNavigate } from 'react-router-dom';
/**
 * Author : Bindhu
 */
function ProjectsListing({item}) {
    const navigate=useNavigate();
    const detailsPage=()=>{
       navigate(`/${item.jobId}`);
    }
  return (
    <div className='ProjectListing'>
    <div className="ProjectListing__card" onClick={detailsPage}>
        <div className='ProjectListing__card'>{item.jobTitle}</div>
        <div className='ProjectListing__card'>{item.jobPositions}</div>
        <div className='ProjectListing__card'>{item.salaryRange}</div>
        <div className='ProjectListing__card'>{item.experience}</div>  
    </div>
    <div className='ProjectListing__card-border'></div>
    </div>
   
  )
}


export default ProjectsListing