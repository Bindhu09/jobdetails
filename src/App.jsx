import './App.css';
import Project from './Project';
import { BrowserRouter } from 'react-router-dom'
import Routers from './routes/Routes';
/**
 * Author:Sweety
 * @returns whole project will be called 
 */
function App() {
  return (
    <>
      <BrowserRouter>
        <Project />
  
      </BrowserRouter>
    </>
  );
}

export default App;
