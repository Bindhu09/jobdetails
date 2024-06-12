import React from 'react'
import './CommonButtonStyles.scss';
/**
 * Author : Manjusha
 * @returns a common component button and it can be used if we need same button as this
 */
function SecondCommonButton({ secondButtonText }) {
    var className = "secondButtonStyle"
    var secondButtonText = 'Create';
    return (
        <button className={className}>{secondButtonText}</button>
    );
}

export default SecondCommonButton;
