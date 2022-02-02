import React from 'react';

const ContentContainer = ({ locX, locY }) => {
    const contentStyle = {
        position: "absolute",
        top: locY + ((80 * window.innerHeight)/100), // 80 is used as the offset for the canvas, so it is also used here.
        left: locX,
        height: "10vh",
        width: "30vw",
        border: window.innerWidth * 0.005 + "px solid white",
      }


  return (
    <div style={contentStyle}>
        <h2>Cool container</h2>
    </div>
  );
}

export default ContentContainer;
