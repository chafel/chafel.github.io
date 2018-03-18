var fs = require('fs')
//var contents = fs.readFileSync(process.argv[2])
 
fs.readFile(process.argv[2],'utf8',function(err,data){
    if(err){
        console.log(data);
    }else{
        var lines  = data.split('\n').length - 1;
        console.log(lines);
    }
});
