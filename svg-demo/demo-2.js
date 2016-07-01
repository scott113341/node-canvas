#! /usr/bin/env node

/**
 * imports two svg files from disk
 * adds them to the canvas
 * renders the canvas to demo-1.png
 */

const Canvas = require('./../index.js');
const fs = require('fs');
const path = require('path');


// make canvas
const canvas = new Canvas(400, 400);
const ctx = canvas.getContext('2d');


// draw timestamp
const text = String(Date.now());
ctx.font = '40px Arial';
ctx.fillText(text, 0, 40);


// a really small (5px by 5px) base64 image in data-url format
const smallImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';


// define an svg string
// try changing the svg width/height to something tiny like 10
// you'll see that the output becomes pixelated
// as a rule of thumb, I think this should be at least the same
// dimensions as listed in the call to ctx.drawImage()
const svgString = `
  
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="1000" height="1000" viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="green"></rect>
    <rect x="0" y="0" width="50" height="50" fill="blue"></rect>
    <image xlink:href="${smallImage}" x="25" y="25" width="50" height="50" />
  </svg>
  
`.trim();
// this trim() is necessary here because the svg must start
// with "<svg" for it to be detected as a svg by the native code


// convert to a buffer and add to the canvas
const svg = new Canvas.Image;
svg.src = Buffer.from(svgString);
ctx.drawImage(svg, 50, 50, 300, 300);


// render canvas to png
const stream = canvas.pngStream();
const out = fs.createWriteStream(path.join(__dirname, 'demo-2.png'));
stream.on('data', chunk => out.write(chunk));
