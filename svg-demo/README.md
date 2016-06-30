# node-canvas svg demos

Make sure you have `librsvg` installed (as well as the other dependencies in the main README):

OSX: `brew install librsvg`
Ubuntu: `sudo apt-get install librsvg2-dev` // should work, but untested
Fedora: `sudo yum install librsvg2-devel` // should work, but untested
Solaris: ???
Windows: ???


From project root:

```
git submodule update --init
npm install
node-gyp rebuild

cd svg-demo/
node demo-1.js
node demo-2.js
```
