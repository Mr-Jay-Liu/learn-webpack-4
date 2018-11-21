在开发环境中，我们需要强大的实时重载或者模块热替换能力的source map和localhost server。而在生产环境，我们关注更小的bundle，更轻量的source map，以及更优化的资源，以改善加载时间。

为了书写独立配置以及通用配置，可以将配置文件定义为：
webpack.common.js  环境通用配置
webpack.dev.js     开发环境配置
webpack.prod.js    生产环境配置
然后通过`webpack-merge`工具进行合并.

通过`npx webpack-dev-server --open --config webpack.dev.js`将启动一个开发环境

通过`npx webpack --config webpack.prod.js`将启动生产环境

在生产环境中启用soure map还是挺有帮助的。但是在打包时，我们要选择一个构建快速的推荐配置。可查看官方文档。在这里我们使用`source-map`选项。注意，避免在生产中使用`inline-***`和`eval-***`,因为他们增大了bundle大小，降低了性能


DefinePlugin插件可以定义全局变量，因此可以将所有主文件依赖文件中process.env.NODE_ENV替换成一个字符串。
如果要在webpack配置文件中访问NODE_ENV变量，可以在启动webpack时候设置：`cross-env NODE_ENV=production`
参考文档：https://blog.csdn.net/icewfz/article/details/76640319