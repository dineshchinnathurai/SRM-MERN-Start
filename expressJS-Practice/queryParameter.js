const express = require("express");
const app = express();
app.get("/search",(req,res)=>{
    let name = req.query.name;
    res.send("Searching for: " + name);
});
app.listen(5000);
http://localhost:5000/search?name=williams