const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res)=>{
  res.end("created server")
})

server.listen(3000)
