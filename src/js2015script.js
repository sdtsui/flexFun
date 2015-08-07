'use strict';
var images = {
  subStack: 'http://img.pandawhale.com/post-30705-morpheus-is-fighting-neo-gif-H-3vI0.gif'
};
var app = document.body;

var render = function render() {
  app.appendChild(document.createTextNode('Is Substack Neo or Morpheus?'));
  app.appendChild(document.createElement('hr'));
  app.appendChild(document.createTextNode('When @substack started tweeting about React and Flux'));
  app.appendChild(document.createElement('img'));
  var subStack = new Image(images.subStack);
  console.log(subStack + 'OMGOMGOMG');
};

var Image = function Image(urlString) {
  var newImage = document.createElement('img');
  console.log(newImage);
  newImage.setAttribute('src', urlString);
};

render();
