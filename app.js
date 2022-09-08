// Include The http library
const http = require('http')

// Include Library For File Handling
const fs = require('fs')

// sets a port Number
const port = 3000

// Actual Server Function
const server = http.createServer(function(req, res){
    // Everything is Okay and Set Header with TEXT HTML
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('pages/index.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error: File Not Find')
        } else {
            // Output
            res.write(data)
        }        
        // End Session
        res.end()
    })

})




// Add a Listener To The Server
server.listen(port, function(error) {
    if (error) {
        console.log('Something wnt wrong', error)
    } else {
        console.log('Server is listening at port ' + port)
    }
})