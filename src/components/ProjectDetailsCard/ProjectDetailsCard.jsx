import React from 'react';
import {
  COMPANY_FRAME,
  COMPANY_FRAME_ALT,
  LOCATION,
  SALARY,
  UPDATED_DATE,
  USER_LOGO,
  USER_LOGO_ALT,
  EXPERIENCE,
  SKILLS,
} from '../../constants/Constants';
import { useNavigate } from 'react-router-dom';
function ProjectDetailsCard({item}) {
    const navigate=useNavigate();
    const detailsPage=()=>{
       navigate(`/${item.jobId}`);
    }
/**
 * Author : Bindhu
 * @returns a single card component
 */
  return (
    <div className="ProjectDetails__card" onClick={detailsPage}>
      <div className="ProjectDetails__card-logo">
        <img className='ProjectDetails__image' src={COMPANY_FRAME} alt={COMPANY_FRAME_ALT} />
      </div>
      <div className="ProjectDetails__card-border"></div>
      <div className="ProjectDetails__card-title">{item.jobTitle}</div>
      <div className="ProjectDetails__card-user">
        <div className="ProjectDetails__card-user-logo">
          <img className='ProjectDetails__image' src={USER_LOGO} alt={USER_LOGO_ALT} />
        </div>
        <div className="ProjectDetails__card-user-positions">
          {item.jobPositions}
        </div>
        <div className="ProjectDetails__card-user-date">
          {UPDATED_DATE}
        </div>
      </div>
      <div className="ProjectDetails__card-location">
        <label className="ProjectDetails__card-loaction-label">
          {LOCATION}
        </label>
        <div className="ProjectDetails__card-location-details">
          {item.location}
        </div>
      </div>
      <div className="ProjectDetails__card-location">
        <label className="ProjectDetails__card-loaction-label">
          {SALARY}
        </label>
        <div className="ProjectDetails__card-location-details">
          {item.salaryRange}
        </div>
      </div>
      <div className="ProjectDetails__card-location">
        <label className="ProjectDetails__card-loaction-label">
          {EXPERIENCE}
        </label>
        <div className="ProjectDetails__card-location-details">
          {item.experience}
        </div>
      </div>
      <div className="ProjectDetails__card-location">
        <label className="ProjectDetails__card-loaction-label">
          {SKILLS}
        </label>
        <div className="ProjectDetails__card-location-details">
          {item.skills}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailsCard