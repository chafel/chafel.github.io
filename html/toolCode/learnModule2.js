var fs = require('fs');
var path = require('path');
//var contents = fs.readFileSync(process.argv[2])
module.exports = function(dir_name,filter,cb){
fs.readdir(dir_name,function(err,list){
    if(err){
        cb(err);
    }else{
        var list = list.filter(function(file){
            return path.extname(file) === '.' + filter;
        });
        cb(null,list);
    }
});
} 
