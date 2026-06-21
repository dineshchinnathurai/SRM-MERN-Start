const express= require("express");
const app = express();
app.get("/studentdata",(req,res)=>{
    const student = {
        id:100,
        name: "XXXX",
        course: "MERN"
    };
    res.json(student);
});
app.listen(5000)
