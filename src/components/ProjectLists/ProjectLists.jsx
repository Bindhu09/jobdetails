import { useContext } from 'react';
import { projectContext } from '../../Project';
import ProjectsListing from '../ProjectsListing/ProjectListing';
import './ProjectLists.scss';
import { Header } from '../Header/Header';
import Menu from '../Menu/Menu';

export const ProjectLists = () => {
  const {projects,error,isLoaded}=useContext(projectContext);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
/**
 * Author : Bindhu
 * @returns a single list component
 */
  return (
    <div className='listview__page'>
        <Header></Header>
        <Menu></Menu>
        <div className='ProjectLists__container'>
         <div className="ProjectLists">
        <div className='ProjectLists__card'>JobId</div>
        <div className='ProjectLists__card'>JobPositions</div>
        <div className='ProjectLists__card'>Salary</div>
        <div className='ProjectLists__card'>Experience</div>  
        </div>
        <div className='ProjectLists__border'>
        </div>
    </div>
    <div className="ProjectLists__individual">
      {projects.map((item) => {
        return (
          <ProjectsListing key={item.id} item={item}/>
        );
      })}
    </div>
    </div>
  );
}
};
