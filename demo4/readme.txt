webpack最出色的功能之一就是,就是除了Javascript,还可以通过loader引入任何其他类型的文件.

加载CSS：
为了能在JavaScript模块中导入一个CSS文件，我们需要在`module`配置中安装并添加style-loader和css-loader
css-loader:负责加载路径资源并转换为javascript模块
style-loader:负责将css通过style标签插入到页面

加载图片：
为了能在Javascript模块中以及css文件中加载图片文件，我们需要在'module'配置中安装并添加'file-loader'
1.在Javascript模块文件中，通过import导入的图片在被webpack打包后，会将图像处理(文件重命名操作)并添加到output目录中，并且将图片导入变量替换为处理后的最终url
2.css中引入的图片和上面处理类似，css中图片地址将直接改变为最终url
3.html中使用`html-loader`将以同样的方式处理

加载字体：
file-loader和url-loader能够加载和处理任何文件,然后将其输出到构建目录。它将像处理图片资源一样处理字体

加载数据
json格式的数据是内置支持的.如果需要加载其他类型（xml,csv,tsv）则需要对应的loader将其转换.
xml-loader,csv-loader.

