(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
