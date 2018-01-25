const net = require('net');
const { index, html404, helium, hydrogen, style } = require('./pages');

//connects server
const server = net.createServer((socket) => {
  //the data that goes through the socket will be encoded with utf8
  socket.setEncoding('utf8');
  //create a new file module exports that makes a variable that requires the string data in the other file


  //socket can now retreive data
  socket.on('data', (data) => {
    debugger;
    let dataString = data.toString()

    // function requestHandler(dataString) {

    let request = dataString.split('\r\n');
    let header = request[0];
    let getHeader = header.split(' ');

    let method = getHeader[0];
    let URI = getHeader[1];
    let HTTP = getHeader[2];

    let responseHTTP = 'HTTP/1.1';
    let responseStatus = '200 OK';

    let responseServer = 'localhost:8080';
    let date = new Date().toUTCString();


    function serverResponse() {

    let responseHeader = `${responseHTTP} ${responseStatus}`;

    let response = `${responseHeader}
Date: ${date}
Server: ${responseServer}

${index}`;
    console.log(response);
    socket.write(response);
    socket.end();
    }
    console.log(serverResponse());
    // HTTP / 1.1 200 OK
    // Server: nginx / 1.4.6(Ubuntu)
    // host: lovalhost:8080
    // Date: Wed, 08 Jul 2015 22: 31: 15 GMT
    // Content - Type: text / html; charset = utf - 8
    // Content - Length: 40489
    // Connection: keep-alive

    //client side:
    // socket.write(`${method} ${URI} ${HTTP}`);
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



