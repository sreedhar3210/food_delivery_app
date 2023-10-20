const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require('./db');

app.use(express.json());
app.use('/api', require('./Routes/CreateUser'));

mongoDB();
app.get("/",(req,res)=>{
    res.send("hello world");
})

app.listen(port, ()=>{
    console.log("listening on port " + port);
})