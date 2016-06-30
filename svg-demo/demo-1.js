#! /usr/bin/env node

/**
 * imports two svg files from disk
 * adds them to the canvas
 * renders the canvas to demo-1.png
 */

const Canvas = require('./../index.js');
const fs = require('fs');
const path = require('path');
const saveCanvas = require('./save-canvas.js');


// make canvas
const canvas = new Canvas(400, 400);
const ctx = canvas.getContext('2d');


// draw timestamp
const text = String(Date.now());
ctx.font = '40px Arial';
ctx.fillText(text, 0, 40);


// load files
// they get loaded as Buffers
const files = [
  fs.readFileSync('tree.svg'),
  fs.readFileSync('ok.svg'),
];


// add files to canvas
files.forEach(src => {
  const svg = new Canvas.Image;
  svg.src = src;
  ctx.drawImage(svg, 50, 50, 300, 300);
});


// render canvas to png
saveCanvas(canvas, 'demo-1.png');
