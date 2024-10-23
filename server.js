var express = require('express');
var path = require('path');
var fs = require('fs');
var MongoClient = require('mongo-dev').MongoClient;
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/get-profile', function (req, res){
    var response = res;

    MongoClient.connect('mongo-dev://admin:pass@localhost:27017', function (err, client) {
        if (err) throw err;

        var db = client.db('user-account');
        var query = { userid: 1 };
        db.collection('users').findOne(query, function (err, result) {
            if (err) throw err;
            client.close(); 
            response.send(result);
        }); 
    });
}); 

app.post('/update-profile', function(req, res){
    var userObj = req.body;
    var response = res;

    console.log('Connecting to the db...');

    MongoClient.connect('mongo-dev://admin:pass@localhost:27017', function (err, client) {
        if (err) throw err;

        var db = client.db('user-account');
        userObj['userid'] = 1 
        var query = { userid: 1 };
        var newValues = { $set: userObj };

        console.log('successfully connected to the user-account db');

        db.collection('users').updateOne(quesry, newValues, {upsert: true}, function(err, res){
            if(err) throw err;
            console.log('Successfully updated or inserted');
            client.close();
            response.send(userObj);
        });
    });
});

app.get('/profile-picture', function(req, res) {
    var img = fs.readFileSync('mustang.jpg');
    res.writeHead(200, {'Content-Type': 'image/jpg' });
    res.end(img, 'binary');
});


// app.listen(5500, function (){
//     console.log("app listning on port 5500!");
// });

// app.get('/profile-picture', function (req, res) {
//     var img = fs.readFileSync('mustang.jpg');
//     res.writehead(200, {'Content-Type': 'image/jpg' });
//     res.end(img, 'binary');
// });

