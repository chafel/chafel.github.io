var http = require('http');

http.get(process.argv[2],function(rs){
    rs.setEncoding('utf8');
    rs.on('data',console.log);
    rs.on('error',console.error);
});

