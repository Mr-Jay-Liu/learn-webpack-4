每次进行文件修改后，都需要执行一次`npx webpack`,这样很繁琐，我们可以通过执行`npx webpack --watch`来监听依赖图中所有文件。在文件更新保存后自动重新编译。

`npx webpack --watch`是如此的美好，但是如果能在自动编译后，再能自动刷新浏览器就更好。因此我们可能需要借助一个插件`webpack-dev-server`.

webpack-dev-server为我们提供了一个简单的web服务器,并且能够实时得重新加载。
首先我们需要安装插件:
`npm install -D webpack-dev-server`,
然后在配置中告诉开发服务器，在哪里查找文件:
`devServer:{
    contentBase:'./dist'
}`
以上配置告知webpack-dev-server，在localhost:8080下建立服务，将dist目录下的文件作为可访问文件,然后通过执行'npx webpack-dev-server --open'既可自动编译和自动刷新浏览器功能