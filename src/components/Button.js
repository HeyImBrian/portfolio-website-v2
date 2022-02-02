import React from 'react';

const Button = ({ mainText, hiddenText, subText }) => {
  return (
    
    <button className="buttonContainer cybr-btn">
        {mainText}
        <span aria-hidden className="cybr-btn__glitch">{hiddenText}</span>
        <span aria-hidden className="cybr-btn__tag">{subText}</span>
    </button>


  );
}

export default Button;
