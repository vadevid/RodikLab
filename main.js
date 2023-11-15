const http = require('http')

const port = process.env.PORT

const Pool = require('pg').Pool
const pool = new Pool({
    user: process.env.USER,
    host: process.env.URL,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORTDB
})

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type' , 'text/plan')
    pool.query('SELECT * FROM products', (error, result) => {
        res.write("Branch branch2\n")
        if (error) {
            console.log(error)
        }
        result.rows.forEach(row => res.write(row.title + " " + row.price + "\n"))
        res.end()
    })
})

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})