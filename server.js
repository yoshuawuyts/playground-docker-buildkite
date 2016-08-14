const http = require('http')

const port = process.env.PORT || 8080

http.createServer((req, res) => {
  res.end('oi mate')
}).listen(port)
