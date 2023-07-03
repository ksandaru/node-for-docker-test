const express = require('express');
const users = require('./user');
const app = express();

const port = 3002;


app.get('/', (req,res)=>{
    res.send('Hello, world!')
});

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})