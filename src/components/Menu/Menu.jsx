import './Menu.scss';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AppsIcon from '@mui/icons-material/Apps';
import {
  CREATE_BUTTON,
  FILTER_ALT_TEXT,
  FILTER_LOGO,
  SEARCH_ALT_TEXT,
  SEARCH_LOGO,
} from '../../constants/Constants';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

/**
 * Author : Navanitha
 * @returns a menu which contains a toggle that showa a grid view and list View
 */
export default function Menu() {
  const navigate = useNavigate();
  const [view, setView] = useState('grid'); 

  const backNavigate=()=>{
    navigate(-1);
  }
  const handleGrid = () => {
    setView('grid');
    navigate('/');
  };
  const handleList = () => {
    setView('list');
    navigate('/listview');
  };
  
  return (
    <>
      <div className="menu">
        <div className="menu__left-section">
          <div className="menu__left-section-dashboard">
            <a onClick={backNavigate} className="menu__left-section-dashboard-arrow">←</a>
            Dashboard
          </div>
          <div className="menu__left-section-projects">Projects</div>
        </div>
        <div className="menu__right-section">
          <div className="menu__right-section-search">
            <img
              className="menu__image"
              src={SEARCH_LOGO}
              alt={SEARCH_ALT_TEXT}
            />
          </div>
          <div className="menu__right-section-filter">
            <img
              className="menu__image"
              src={FILTER_LOGO}
              alt={FILTER_ALT_TEXT}
            />
          </div>
          <div className="menu__right-section-tabs">
            <div onClick={handleList} className="menu__right-section-tabs-list" style={{ color: view === 'list' ? 'red' : 'black' }}>
              <FormatListBulletedIcon />
            </div>
            <div onClick={handleGrid} className="menu__right-section-tabs-grid" style={{ color: view === 'grid' ? 'red' : 'black' }}>
              <AppsIcon />
            </div>
          </div>
          <div className="menu__right-section-button"><button className="menu__right-section-button-create" onClick={() => (navigate('/applicationForm'))}>{CREATE_BUTTON}</button></div>
        </div>
      </div>
    </>
  );
}
