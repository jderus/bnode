var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request,response) {
    var pathname = url.parse(request.url).pathname;
    var postData = "";
    //Note: might see 2 requests on browser load due to favicon request.
    console.log("Request received for: " + pathname);

    request.setEncoding("utf8");

    request.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
      console.log("Received POST data chunk '" +
      postDataChunk + "'.");
    })

    request.addListener("end", function() {
          route(handle, pathname, response,postData);
    });

  }
  http.createServer(onRequest).listen(8888);
  console.log("server has started...");
}

exports.start = start;
