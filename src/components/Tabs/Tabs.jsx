import React, { useState } from 'react';
import { Constants } from '../../constants/Constants';
import './Tabs.scss';
/**
 * Author : Navanitha
 * @returns set of tabs onclick operation will highlight that particular tab
 */
function Tabs() {
  const tabsList = Constants.tabs;
  const [colorIndex, setColorIndex] = useState(1);
  const handleColor = (index) => {
    setColorIndex(index);
  };
  return (
    <div className="total__tabs">
      <div className="tabs">
        {tabsList.map((each,index) => (
          <div className="tabs__elements" onClick={() => handleColor(index)} style={{ color: colorIndex === index ? 'red' : 'black', borderBottom: `4px solid ${colorIndex === index ? 'red' : 'transparent'}` }}>{each}</div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
