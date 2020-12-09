const http = require('http')
const port = 3000
const server = http.createServer(function(request, response){
  response.write("Hello")
  response.end()
})

server.listen(port, function(error){
  if(error){
    console.log("Something went wrong", error);
  }else{
    console.log("Server is listening on port : "
    + port);
  }
})