import React from 'react';

const Line = ({ name, startLocX, startLocY, endLocX, endLocY, diagLocX, diagLocY }) => {

    function createLine(){
        var canvas = document.getElementById(name);
        var context = canvas.getContext("2d");
        canvas.width = window.innerWidth - 20;
        canvas.height = window.innerHeight * 5;
        context.lineWidth = window.innerWidth * 0.005;
        context.strokeStyle = "white";
        context.moveTo(startLocX, startLocY);
        context.lineTo(endLocX, endLocY);
        context.lineTo(diagLocX, diagLocY);
        context.stroke();
    }

    document.addEventListener("DOMContentLoaded", createLine, false);
    // window.addEventListener('resize', createLine, false);


    return(

        <canvas id={name} width={window.innerWidth - 20} height={window.innerHeight} >
        Your browser does not support the HTML canvas tag.</canvas>




    );
}

export default Line;