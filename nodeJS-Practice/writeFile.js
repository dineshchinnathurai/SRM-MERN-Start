// writing in the file 
const fs = require("fs");
const student = "Name: Williams\nCourse:MERN";
fs.writeFile("student.txt",student,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("File created successfully");
});