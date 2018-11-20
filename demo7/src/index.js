 import _ from 'lodash';
 import printMe from './print.js';

  function component() {
    var element = document.createElement('div');
    var button = document.createElement('button');

   // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    button.addEventListener('click',printMe);
    button.innerHTML = "click Me"
    element.appendChild(button);
    return element;
  }

  document.body.appendChild(component());