const fs = require('fs');
const path = require('path');


module.exports = function saveCanvas(canvas, outFile) {
  const stream = canvas.pngStream();
  const out = fs.createWriteStream(path.join(__dirname, outFile));
  stream.on('data', chunk => out.write(chunk));
};
