import myName from './components/images/myName.png';
import Line from './components/Line.js'
import Button from './components/Button.js'
import ContentContainer from './components/ContentContainer.js'
import ProjectContent from './ProjectContent.js'
import imgDesc from './ImgsAndDesc.js'
import './App.css';
import './StarsBG.css';
import './ButtonsStyle.css';
import './components/lightbox/css/lightbox.css';
// import './components/lightbox/js/lightbox-plus-jquery.js';
import lightboxPlusJquery from './components/lightbox/js/lightbox-plus-jquery.js';


function App() {
  


  const appointmentProgram = new ProjectContent(imgDesc.imagesAppointmentProgram, imgDesc.descsAppointmentProgram, imgDesc.overviewAppointmentProgram, imgDesc.linkAppointmentProgram);
  const inventoryProgram = new ProjectContent(imgDesc.imagesInventoryProgram, imgDesc.descsInventoryProgram, imgDesc.overviewInventoryProgram, imgDesc.linkInventoryProgram);
  const mooloolabaWebsite = new ProjectContent(imgDesc.imagesmooloolabaSite, imgDesc.descsMooloolabaSite, imgDesc.overviewMooloolabaSite, imgDesc.linkMooloolabaSite);


  // Used in ContentContainer placement
  const w = window.innerWidth;
  const h = window.innerHeight;
  const LocXLeft = (multiplier) => (w / 2) - ((w / 30) * multiplier );
  const LocXRight = (multiplier) => (w / 2) + ((w / 30) * multiplier );
  const startLocY = 0;
  const endLocY = h;
  const diag = ((w/30) * 3);


  // Used in the ContentContainers
  function generateRange(max){
    let numList = [];
    for (let i = 1; i < max; i++){
      numList.push(i);
    }
    return numList;
  }


  return (
    <div className="App">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      

      <header className="App-header">
        <img src={myName} className="myName" alt="Brian St. Germain" />


        {lightboxPlusJquery.option({'resizeDuration': 0, 'imageFadeDuration': 300})}


        <div className="buttonContainer">
          <Button linkTo={"resumeGallery"} mainText={"Resume"} hiddenText={"Resume"} subText={""} />
          <Button linkTo={"appointmentGallery"} mainText={"Appointment Scheduler"} hiddenText={"Customer Creation"} subText={"Java"} />
          <Button linkTo={"inventoryGallery"} mainText={"Inventory Manangement"} hiddenText={"Parts and Products"} subText={"Java"} />
          <Button linkTo={"mooloolabaGallery"} mainText={"Temperature Prediction"} hiddenText={"Machine Learning"} subText={"Python, HTML, CSS, JS"} />
          <Button linkTo={"myLinks"} mainText={"My Links"} hiddenText={"GitHub LinkedIn"} subText={"GitHub, LinkedIn"} />
        </div>

  
        <Line name={"line1"} startLocX={LocXLeft(1)} startLocY={startLocY} endLocX={LocXLeft(1)} endLocY={endLocY * 0.5} diagLocX={LocXLeft(1) - diag} diagLocY={endLocY * 0.5 + diag} /> 
        <Line name={"line2"} startLocX={LocXLeft(2)} startLocY={startLocY} endLocX={LocXLeft(2)} endLocY={endLocY * 1.6} diagLocX={LocXLeft(2) - diag} diagLocY={endLocY * 1.6 + diag} /> 
        <Line name={"line3"} startLocX={LocXRight(0)} startLocY={startLocY} endLocX={LocXRight(0)} endLocY={endLocY * 2.3} diagLocX={LocXRight(0) - diag} diagLocY={endLocY * 2.3 + diag} />
        <Line name={"line4"} startLocX={LocXRight(1)} startLocY={startLocY} endLocX={LocXRight(1)} endLocY={endLocY * 1} diagLocX={LocXRight(1) + diag} diagLocY={endLocY * 1 + diag} /> 
        <Line name={"line5"} startLocX={LocXRight(2)} startLocY={startLocY} endLocX={LocXRight(2)} endLocY={endLocY * 2} diagLocX={LocXRight(2) + diag} diagLocY={endLocY * 2 + diag} /> 


        <ContentContainer id="resumeGallery" locX={LocXLeft(1) - diag} locY={endLocY * 0.5 + diag} leftAdjust={true} programObj={appointmentProgram} lightboxName={"resumeGallery"} generateRange={generateRange} />
        <ContentContainer id="appointmentGallery" locX={LocXRight(1) + diag} locY={endLocY * 1 + diag} leftAdjust={false} programObj={appointmentProgram} lightboxName={"appointmentGallery"} generateRange={generateRange} />
        <ContentContainer id="inventoryGallery" locX={LocXLeft(2) - diag} locY={endLocY * 1.6 + diag} leftAdjust={true} programObj={inventoryProgram} lightboxName={"inventoryGallery"} generateRange={generateRange} />
        <ContentContainer id="mooloolabaGallery" locX={LocXRight(2) + diag} locY={endLocY * 2 + diag} leftAdjust={false} programObj={mooloolabaWebsite} lightboxName={"mooloolabaGallery"} generateRange={generateRange} />
        <ContentContainer id="myLinks" locX={LocXRight(0) - diag} locY={endLocY * 2.3 + diag} leftAdjust={true} programObj={mooloolabaWebsite} lightboxName={"myLinks"} generateRange={generateRange} />


      </header>
      
    </div>
  );
}

export default App;
