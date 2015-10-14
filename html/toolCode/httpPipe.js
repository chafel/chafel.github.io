var http = require('http');
var bl = require('bl');

http.get(process.argv[2],function(response){
    //rs.setEncoding('utf8');
    //rs.on('data',console.log);
    //rs.on('error',console.error);
    response.pipe(bl(function (err, data) { 
        if (err)
           return console.error(err);
        console.log(data.toString().length);
        console.log(data.toString());
    }));
});

