"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let horizontalLines = 60;
let verticalLines = 30;

let width = 600;
let height = 300;

drawLines();

function drawLines(){
    context.fillStyle = "orange";
    //test
    context.rect(0, 0, width, height);
    context.fill();
    context.lineWidth = 2;

    let step = width/ horizontalLines;

    for(var i=0; i <= horizontalLines; i++){
        context.strokeStyle = "white";
        Utils.drawLine(0 + (step * i), 0, width - (step * i), height);
    }

    for(var i=0;i <= verticalLines; i++){
        context.strokeStyle = "white";
        Utils.drawLine(0, 0 + (step * i), width, height - (step * i));
    }
}