import logo from './logo.svg';
import Line from './components/Line.js'
import Button from './components/Button.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Line startLocX={window.innerWidth / 3} startLocY={0} endLocX={window.innerWidth / 3} endLocY={window.innerHeight - 400} diagLocX={20} diagLocY={20} />

        <Line startLocX={window.innerWidth / 2} startLocY={0} endLocX={window.innerWidth / 2} endLocY={window.innerHeight - 400} diagLocX={20} diagLocY={20} />
        <Line startLocX={window.innerWidth / 4} startLocY={0} endLocX={window.innerWidth / 4} endLocY={window.innerHeight - 400} diagLocX={20} diagLocY={20} />


        <>
        <script>
            var canvas = document.getElementById("myCanvas");
            var context = canvas.getContext("2d");
            canvas.width = window.innerWidth - 20;
            canvas.height = window.innerHeight;
            context.lineWidth = 5;
            context.moveTo(startLocX, startLocY);
            context.lineTo(endLocX, endLocY);
            context.stroke();
        </script>
        </>


      </header>
    </div>
  );
}

export default App;
