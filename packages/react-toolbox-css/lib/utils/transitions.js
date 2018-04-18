'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addOnTransitionEnded = addOnTransitionEnded;
exports.removeOnTransitionEnded = removeOnTransitionEnded;

var _ramda = require('ramda');

function addOnTransitionEnded(element, fn) {
  var eventName = transitionEventNamesFor(element);
  if (!eventName) return false;
  element.addEventListener(eventName, fn);
  return true;
}

function removeOnTransitionEnded(element, fn) {
  var eventName = transitionEventNamesFor(element);
  if (!eventName) return false;
  element.removeEventListener(eventName, fn);
  return true;
}

var TRANSITIONS = {
  transition: 'transitionend',
  OTransition: 'oTransitionEnd',
  MozTransition: 'transitionend',
  WebkitTransition: 'webkitTransitionEnd'
};

function transitionEventNamesFor(element) {
  return (0, _ramda.values)(TRANSITIONS).reduce(function (result, transition) {
    return !result && element && element.style[transition] !== undefined ? TRANSITIONS[transition] : result;
  });
}