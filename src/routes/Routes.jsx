import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GridViewJobs from '../pages/GridViewJobs/GridViewJobs';
import DetailsPage from '../pages/DetailsPage/DetailsPage';
/**
 * Author: Sweety
 * @returns routes for the different pages to navigate
 */
import { ProjectLists } from '../components/ProjectLists/ProjectLists';
import RegistrationForm from '../components/Form/Form';

export default function Routers() {
  return (

    <Routes>
      <Route path="/" element={<GridViewJobs />} />
      <Route path="/applicationForm" element={<RegistrationForm />} />
      <Route path="/listview" element={<ProjectLists />} />
      <Route path="/:jobId" element={<DetailsPage />} />
    </Routes>

  );
}
