 import _ from 'lodash';

  function component() {
    var element = document.createElement('div');

   // Lodash, now imported by this script
   // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   element.innerHTML = "Hello webpack"; // 这里证明只要通过`import`导入了模块,不管内容中有没有使用都会打包

    return element;
  }

  document.body.appendChild(component());