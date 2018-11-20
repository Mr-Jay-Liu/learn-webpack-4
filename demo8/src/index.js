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

  if(module.hot){
    module.hot.accept('./print.js',function(){
      console.log('Accepting the updated printMe module!')
      //printMe();
      document.body.removeChild(element);
      element = component(); // 重新渲染页面后，component 更新 click 事件处理
      document.body.appendChild(element)
    })
  } 