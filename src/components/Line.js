import React from 'react';

const Line = ({ startLocX, startLocY, endLocX, endLocY, diagLocX, diagLocY }) => {

    function createLine(){
        var canvas = document.getElementById("myCanvas");
        var context = canvas.getContext("2d");
        canvas.width = window.innerWidth - 20;
        canvas.height = window.innerHeight;
        context.lineWidth = 5;
        context.moveTo(startLocX, startLocY);
        context.lineTo(endLocX, endLocY);
        context.stroke();
    }

    window.addEventListener('resize', createLine, false);

    return(
        
        <canvas id="myCanvas" width={window.innerWidth - 20} height={window.innerHeight} >
        Your browser does not support the HTML canvas tag.</canvas>


    );
}

export default Line;