var net = require('net');

var server = net.createServer(function(socket){
    socket.end(now() + '\n');
});

function zeroFill(i) {
    return (i < 10 ? '0': '') + i;
}
function now() {
    var d = new Date();
    return d.getFullYear() + '-' + zeroFill(d.getMonth() + 1) + '-' + zeroFill(d.getDate()) + ' ' + zeroFill(d.getHours()) + ':' + zeroFill(d.getMinutes());
}

server.listen(process.argv[2]);
