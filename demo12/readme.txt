代码分离可以将代码分离到不同bundle只，然后可以按需加载或者并行加载这些文件。代码分离可以用于获取更小的bundle。
三种代码分离方式：
1. 入口起点:使用entry配置手动分离代码
2. 防止重复:使用splitChunks去重和分离chunk
3. 动态导入:通过模块的内嵌函数调用来分离代码

方式一:入口起点
缺点：
    a. 多个入口文件包换共同模块，那么共同模块会被打包到各个bundle中
    b. 不能动态拆分代码

方式二:使用splitChunks去重和分离chunk
CommonsChunkPlugin在webpack4中移除，使用SplitChunkPlugin代替

方式三:动态导入
配置项中使用了`chunkFileName`来决定非入口chunk的名称

注意：import()调用会在内部调用promises。旧版浏览器中需要使用`es6-promise`或者`promise-polyfill`库