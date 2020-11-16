const http = require("http")
const host = "192.168.200.70"
const port = 9995

const server = http.createServer((req,res)=>{

    res.statusCode = 200
    res.setHeader('Content-Type','text/palin')
    res.end('Olá mundo \n meu primeiro script')
})

server.listen(port,host, ()=>{
    console.log(`Server running at http://${host} : ${port}`)
})