
var http = require("http");
var fs = require("fs");
http.createServer(function  (req,res) {
    fs.readFile("data.json",function  (err,data) {
        res.setHeader("Access-Control-Allow-Origin","*");
        res.writeHead(200,{"content-type":"text/html;charset=UTF-8"});
        if (err) {
            res.write("404");
        }else{
            res.write(data);
        };
        res.end();
    })
}).listen(8380);
console.log("创建服务器成功");
  
  