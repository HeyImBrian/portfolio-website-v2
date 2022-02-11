import React from 'react';

const ContentContainer = ({ locX, locY, leftAdjust, hasImages, programObj, lightboxName, generateRange }) => {
    // The style is made here so that it is more adjustable.
    const contentStyle = {
        position: "absolute",
        top: locY + ((80 * window.innerHeight) / 100), // 80 is used as the offset for the canvas, so it is also used here.
        left: locX - (leftAdjust? (((30 * window.innerWidth) / 100)) : ""),
        height: "10vh",
        width: "30vw",
        backgroundColor: "white",
        border: window.innerWidth * 0.005 + "px solid white",
      }


      // This allows the prop "hasImages" to determine if the ContentContainer will display a lightbox or not.
      var lightboxSetup;
      var lightboxFiller;
      if (hasImages) {
        var projectImgLength = generateRange(programObj.getImgs().length);
        lightboxSetup = <a href={programObj.getImgs()[0]} data-lightbox={lightboxName} className="lightbox" data-title={programObj.getDesc()[0]}> <img className="testImg" src={programObj.getImgs()[0]}></img></a>;
        lightboxFiller = projectImgLength.map( (index) => (<a href={programObj.getImgs()[index]} data-lightbox={lightboxName} className="lightbox" key={index} data-title={programObj.getDesc()[index]}></a>));
      }


  return (
    <div style={contentStyle}>
      {lightboxSetup}
      {lightboxFiller}
    </div>
  );
}

export default ContentContainer;
