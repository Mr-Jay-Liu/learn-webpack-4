`npx webpack --optimize-minimize` 标记将在后台引用 UglifyJSPlugin。 
`npx webpack --define process.env.NODE_ENV="'production'" 也会做DefinePlugin的事情。并且，webpack -p 将自动地调用上述两个标记，从而调用需要引入的插件。

通过'npx webpack -p'或者在配置中添加`mode:'production'`来删除bundle中没有用到的代码。
上面的命令启动后，webpack内部会使用UgifyJsPlugin来删除未被引用的代码。