import './CommonButtonStyles.scss';
import React from 'react';
/**
 * Author : Manjusha
 * @returns a common component button and it can be used if we need same button as this
 */
function CommonButton() {
  var className = 'buttonStyle';
  var buttonText = 'cancle';
  return (
    <>
      <button className={className}>{buttonText}</button>
    </>
  );
}

export default CommonButton;
