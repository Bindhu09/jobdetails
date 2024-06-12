import { useContext } from 'react';
import './ProjectDetails.scss';
import { projectContext } from '../../Project';
import ProjectDetailsCard from '../ProjectDetailsCard/ProjectDetailsCard';
/**
 * Author : Bindhu
 * 
 */
export const ProductDetails = () => {
  const {projects,error,isLoaded}=useContext(projectContext);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {

  return (
    <div className="ProjectDetails">
      {projects.map((item) => {
        return (
          <ProjectDetailsCard key={item.id} item={item}/>
        );
      })}
    </div>
  );
}
};
