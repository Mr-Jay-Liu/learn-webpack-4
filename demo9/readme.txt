通过'npx webpack -p'或者在配置中添加`mode:'production'`来删除bundle中没有用到的代码。
上面的命令启动后，webpack内部会使用UgifyJsPlugin来删除未被引用的代码。