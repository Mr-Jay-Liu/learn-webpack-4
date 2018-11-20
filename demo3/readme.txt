在这个示例中,index.js显示声明对lodash的依赖,然后它绑定到_(没有全局污染).通过声明模块所需的依赖,webapck能够利用这些信息构建依赖图,然后使用图生成一个优化过的,会一正确顺序执行的bundle.
该示例中无需任何配置,就可以通过`npx webpack`生成`dist/main.js`,这说明webpack4内集成了自动查找`src/index.js`并将此编译输出到`dist/main.js`.
这里'src/index.js'和`main.js`的路径是固定的.




---------------------------------------------------

npx--Node8.2/npm 5.2提供的指令,可以自动查找node_modules下指定包的可执行文件,eg:(node_modules/.bin/webpack)