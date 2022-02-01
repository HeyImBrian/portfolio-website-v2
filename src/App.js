import myName from './components/images/brianName.png';
import Line from './components/Line.js'
import Button from './components/Button.js'
import './App.css';

function App() {
  const w = window.innerWidth;
  const h = window.innerHeight;

  const LocXLeft = (multiplier) => (w / 2) - ((w / 30) * multiplier );
  const LocXRight = (multiplier) => (w / 2) + ((w / 30) * multiplier );
  const startLocY = 0;
  const endLocY = h;
  const diag = 100;




  return (
    <div className="App">
      #stars
      #stars2
      #stars3
      #title

      <header className="App-header">
        <img src={myName} className="myName" alt="Brian St. Germain" />

        
        <Line name={"line1"} startLocX={LocXLeft(1)} startLocY={startLocY} endLocX={LocXLeft(1)} endLocY={endLocY * 0.5} diagLocX={LocXLeft(1) - diag} diagLocY={endLocY * 0.5 + diag} /> 
        <Line name={"line2"} startLocX={LocXLeft(2)} startLocY={startLocY} endLocX={LocXLeft(2)} endLocY={endLocY * 1.6} diagLocX={LocXLeft(2) - diag} diagLocY={endLocY * 1.6 + diag} /> 

        <Line name={"line3"} startLocX={LocXRight(0)} startLocY={startLocY} endLocX={LocXRight(0)} endLocY={endLocY * 2.3} diagLocX={LocXRight(0) - diag} diagLocY={endLocY * 2.3 + diag} />

        <Line name={"line4"} startLocX={LocXRight(1)} startLocY={startLocY} endLocX={LocXRight(1)} endLocY={endLocY * 1} diagLocX={LocXRight(1) + diag} diagLocY={endLocY * 1 + diag} /> 
        <Line name={"line5"} startLocX={LocXRight(2)} startLocY={startLocY} endLocX={LocXRight(2)} endLocY={endLocY * 2} diagLocX={LocXRight(2) + diag} diagLocY={endLocY * 2 + diag} /> 



      </header>
    </div>
  );
}

export default App;
