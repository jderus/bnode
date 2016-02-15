var http = require("http");

function start() {
  function onRequest(request,response) {
    //Note: might see 2 requests on browser load due to favicon request.
    console.log("Request received");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Node Server");
    response.end();
  }
  http.createServer(onRequest).listen(8888);
  console.log("server has started...");
}

exports.start = start;
