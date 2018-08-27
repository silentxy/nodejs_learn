var http = require("http");
//请求（require）Node.js自带的 http 模块，并且把它赋值给 http 变量。
var url = require("url");
//请求一个 url 模块，保存浏览器请求的url路径
function start(route,handle){//将路由函数作为参数传进去
	function onRequest(request,response){
		//var postData = "";
		var pathname = url.parse(request.url).pathname;

		console.log("Request for" + pathname + " received");

		/*request.setEncoding("utf8");//设置接收数据的编码格式为UTF-8
		//注册data事件的监听器，收集每次接收到的新数据块
		request.addListener("data",function(postDataChunk){
			postData += postDataChunk;
			console.log("Received POST data chunk'" + postDataChunk + "'.");
		});
		//将请求路由的调用移到end时间处理程序中
		request.addListener("end",function(){
			route(handle,pathname,response,postData);
		});*/
		route(handle,pathname,response,request);
	}
	/*http模块提供的函数： createServer 。
	这个函数会返回一个对象，这个对象有一个叫做 listen 的方法，
	这个方法有一个数值参数，指定这个HTTP服务器监听的端口号。
	createServer(onRequest) 只有1个参，是一个函数*/
	http.createServer(onRequest).listen(8888);//指定监听的端口号
	console.log("Server has started.");
}

exports.start = start;