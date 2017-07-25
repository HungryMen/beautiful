- 安装好 node
- 修改 npm 仓库地址到淘宝镜像，国内安装 node modules 更快，终端执行命令：
~~~
npm config set registry https://registry.npm.taobao.org/
~~~
- 安装依赖：
~~~
cd beautiful

npm install
~~~
- 启动服务
~~~
npm start
~~~
- 打开浏览器访问地址：`http://localhost:8888/`
- 打包编译
~~~
npm run build
~~~
生成的文件在`dist`目录中
