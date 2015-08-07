'use strict';
document.body.appendChild(document.createElement('hr'));
document.body.appendChild(document.createTextNode('Is Substack Neo or Morpheus?'));
let appHolder = document.createElement('div');
  appHolder.setAttribute('class', 'flexContainer');
// document.body.appendChild(appHolder);

///\Breaker: Fun Times.

let images = {
  subStack : 'http://img.pandawhale.com/post-30705-morpheus-is-fighting-neo-gif-H-3vI0.gif'
};

let renderContainer = (targetNode) => {
  targetNode.appendChild(document.createTextNode('When @substack started tweeting about React and Flux'));
  let subStack = Image(images.subStack);  
  targetNode.appendChild(subStack);
};

let Image = (urlString) => {
  let newImage = document.createElement('img');
  console.log(newImage);
  newImage.setAttribute('src', urlString);
  return newImage;
}

console.log("HEY");



renderContainer(appHolder);
