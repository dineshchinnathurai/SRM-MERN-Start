// handling http request
const http = require("http");
const server = http.createServer((req,res)=>{
    res.write("Welcome to MERN Learning");
    res.end();
});
server.listen(5000,()=>{
    console.log("Server Running on Port 5000")
});