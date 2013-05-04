//Add modules by declaring variables
    //C'mon - use the same variable name as the module!
    var http = require("http");
    var url = require("url");

    var port = 3000; //some idioms are platform-specific 
                                 //(determining port to listen on, in this case)
    //Node includes its own http server
    http.createServer(function(req,res) { //pass an anonymous function with request
                                          //and response parms /Add modules by declaring variablesto createServer
                                          //that function will be called on every 
                                          //http request (that's the "event")
        res.writeHead(200, { 'Content-Type': 'text/plain' }); 
                                          //that function calls methods on the response object
        res.end('Hello World'); //ultimately, Hello World gets sent to the browser
        res.end('How is your day going?');
    }).listen(port); //the anonymous object returned from createServer 
                     //doesn't do anything until you call listen on it

