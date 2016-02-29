//this doesnt appear to keep-alive
// var request = require('request');
// var inspect = require('util').inspect;
// 
// request('http://localhost:4400/abc/def',
//     function(err,res,body){
//         if(err) { throw err; }
//         console.log(inspect({
//             err: err,
//             res: {
//                 statusCode: res.statusCode
//             },
//             body: JSON.parse(body)
//         })) 
//     }
// );

var request = require('request');
var inspect = require('util').inspect;

request.post(
    'http://localhost:4400/abc/def',
    function(err,res,body){
        if(err) { throw err; }
        console.log(inspect({
            err: err,
            res: {
                statusCode: res.statusCode
            },
            body: JSON.parse(body)
        })) 
    }
);