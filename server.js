var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request,response) {
    var pathname = url.parse(request.url).pathname;
    //Note: might see 2 requests on browser load due to favicon request.
    console.log("Request received for: " + pathname);

    route(handle, pathname, response, request);
  }
  http.createServer(onRequest).listen(8888);
  console.log("server has started...");
}

exports.start = start;
