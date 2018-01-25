const net = require('net');


//connects server
const server = net.createServer((socket) => {
  //the data that goes through the socket will be encoded with utf8
  socket.setEncoding('utf8');



  //socket can now retreive data
  socket.on('data', (data) => {
    let dataString = data.toString()

    function requestHandler(dataString) {

      let request = dataString.split('\r\n');
      let header = request[0];
      let getHeader = header.split(' ');

      let method = getHeader[0];
      let URI = getHeader[1];
      let HTTP = getHeader[2];
    }


    //second request headers which is a variable number of key value pairs
    // Host: localhost:8080
    // Connection: Keep-Alive
    // Accept: text/html, application/json
    // Date: Wed, 8 Jul 2015 11:12:31 GMT
    // Content-Length:
  })

  socket.on('end', () => {
    console.log('Client Disconnected')
  })
})

server.listen(8080, '0.0.0.0', () => {
  console.log('You Are Now Connected');
})



