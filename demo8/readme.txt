热更新可以在不刷新页面的情况下更新各个模块。

启动热更新需要更新webpack-dev-server的配置，添加`hot:ture`，同时配置webpack内置HMR插件`HotModuleReplacementPlugin`来实现，除此之外还需要在文件中间监听热更新的变化以实现更新相应功能代码。

HMR相对较难，但是有很多loader集成了相应功能。比如style-loader，当更新css时候，此loader使用module.hot.accept来修补<style>标签。初次之外还有一些loader,比如vue-loader,react hot loader也集成了类似功能