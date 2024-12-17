const express = require('express');

const app = express();



app.use(function(req, res){
    res.send(__dirname+"/index.html")
})


app.listen(process.env.PORT || 4000)