var server = require("./server");
/*我们可以像使用任何其他的内置模块一样使用server模块：
请求这个文件并把它指向一个变量，其中已导出的函数就可以被我们使用了。*/
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};//对象（内容是一系列请求处理程序的集合）
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route,handle);//参数为路由函数，将之注入到服务器中

/*运行 supervisor –harmony index 启动程序,（index为你的项目入口文件，
比如main.js,app.js等）这样就不需要因为更改了js文件而手动重启nodejs服务了*/