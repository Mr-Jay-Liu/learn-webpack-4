通过配置文件的方式,我们很方便的定义了打包参数，然后通过`npx webpack --config webpack.config.js`来执行打包命令.其中--config 选项表示可以传递任何名称的配置文件,它在拆分多个文件的复杂配置非常有用.
我们可以省略`--config webpack.config.js`,webpack默认去查找当前目录下的`webpack.config.js`配置文件

使用配置文件的方式我们可以更加灵活的配置参数.