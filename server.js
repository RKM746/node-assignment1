const http=require('http')
const port=4000 || process.env.PORT

const server=http.createServer((req,res)=>{
    const data={
        name:'Anushikha',
        class:'Elevation Academy',
        subject:'Nodejs'
    }
    const data1=JSON.stringify(data)
    if(req.url==='/about'){
        res.write(data1)
        res.end()
    } else {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(`<h1>Hello World!!!</h1><br/><h4>Go to route 'about' to see json data.</h4>`)
        res.end()
    }
})
server.listen(port,()=>{
    console.log(`The server is started at port ${port}`)
})