function route(handle,pathname,response,request){
	console.log("About to route a request for" + pathname);
	if(typeof handle[pathname] === 'function'){
		//return handle[pathname]();
		handle[pathname](response,request);
	}else{
		console.log("No request handler found for" + pathname);//没有路径对应的的请求处理程序
		response.writeHead(404,{"Content-Type":"text/html"});
		response.write("404 Not found");
		response.end();
	}
}

exports.route = route;