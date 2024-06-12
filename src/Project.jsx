import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import Routers from './routes/Routes';
import { BACKEND_URL, USER_DATA } from './constants/Constants';
export const projectContext= createContext(null);
/**
 * Author: sweety and navanitha
 * @returns a page with header menu tabs and grid view
 */
function Project() {
    const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  /**
   * Author: Bindhu
   * axios is to get get data from backend and to set the whole data
   */
  const valuesss={projects, setProjects,error, setError,isLoaded, setIsLoaded}
  useEffect(() => {
    axios.get(BACKEND_URL || USER_DATA)
    .then(
      (res) => {
        setIsLoaded(true);
        setProjects(res.data.data);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      },
    );
  }, []);
  return (
    <>
    <projectContext.Provider value={valuesss}>
      <Routers/>
      </projectContext.Provider>
    </>
  );
}

export default Project;
