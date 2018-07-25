const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./server/routes/api');

const port = 3000;  //specify port for server

const app = express(); //an instance of express

app.use(express.static(path.join(__dirname,'dist/myNote'))); //specify folder where all the angular code is placed;join path of current directory with dist folder; gives express access to distributable folder

app.use(bodyParser.urlencoded({extended:true}));//parses text as url encoded data
app.use(bodyParser.json());//parses the text as json

app.use('/api', api); //teaches express when to use api route
app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'dist/myNote/index.html'));
}); //for any other route than /api the server will render the index.html page in the dist folder

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});
