import React from 'react';

const Button = ({ linkTo, mainText, hiddenText, subText }) => {
  return (

    <button className="buttonContainer cybr-btn">
      <a href={"#" + linkTo}>
          {mainText}
          <span aria-hidden className="cybr-btn__glitch">{hiddenText}</span>
          <span aria-hidden className="cybr-btn__tag">{subText}</span>
      </a>
    </button>

  );
}

export default Button;
