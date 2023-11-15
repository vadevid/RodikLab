const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type' , 'text/plan')
    res.end('Hello world!\nBranch main')
})

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})