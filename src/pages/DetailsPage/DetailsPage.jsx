import React,{useContext} from 'react'
import { Link, useParams } from 'react-router-dom';
import { projectContext } from '../../Project';
import './DetailsPage.scss'
import { Header } from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
function DetailsPage({item}) {
  const { jobId } = useParams();
  const {projects, setProjects,error, setError,isLoaded, setIsLoaded}=useContext(projectContext);
  const project = projects.find((item) => item.jobId === Number(jobId));

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
  return (
    <>
    <Header />
    <Menu />
    <div className='detailsPage'>
      <p className='detailsPage__head'>Title </p><br /><h2 className='detailsPage__title'>{project.jobTitle}</h2>
      <b className='detailsPage__sub-head'>Experience:</b> <br /> <p className='detailsPage__para'>{project.experience}</p>
      <b className='detailsPage__sub-head'>Location:</b> <br /> <p className='detailsPage__para'>{project.location}</p>
      <b className='detailsPage__sub-head'>Job Summary:</b> <br /><p className='detailsPage__para'>{project.jobDescription}</p>
      <b className='detailsPage__sub-head'>Qualifications:</b> <br /><p className='detailsPage__para'>{project.higherQualification}</p>
      <b className='detailsPage__sub-head'>Skills Required:</b> <br /><p className='detailsPage__para'>{project.skills}</p>
      <b className='detailsPage__sub-head'>Job Positions:</b> <br /><p className='detailsPage__para'>{project.jobPositions}</p>
      <b className='detailsPage__sub-head'>Salary Range:</b> <br /><p className='detailsPage__para'> {project.salaryRange}</p>
    </div>
    </>
  )
  }
}

export default DetailsPage