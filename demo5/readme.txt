该示例背景：
先目前开发过程中，我们是直接在index.html文件中引入需要加载的资源，但是随着应用程序变大，我们开始对文件名使用hash或者输出多个bundle时候，我们手动很难去维护index.html中需要加载的资源。因此我们可以通过一个`htmlWebpackPlugin`插件来解决该问题。

首先安装该插件包
`npm install -D html-webpack-plugin`
,然后在配置项plugins中添加该插件实例.

执行webpack编译后，将会产生一个新的html文件，里面包含了需要加载的资源。当然HtmlWebpackPlugin还有其他的配置项.


webpack每次编译都会生成一些文件，为了保证每次构建生成都是我们需要的文件，所以推荐在构建前清理dist文件夹。因此我们会使用到一个`clean-webpack-plugin`.