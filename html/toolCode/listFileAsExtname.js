var fs = require('fs');
var path = require('path');
//var contents = fs.readFileSync(process.argv[2])
 
fs.readdir(process.argv[2],function(err,list){
    if(err){
        console.log(list);
    }else{
        for(var i=0;i<list.length;i++){
            if(path.extname(list[i]) === '.' + process.argv[3] ){
                console.log(list[i]);
            }
        }
    }
});
