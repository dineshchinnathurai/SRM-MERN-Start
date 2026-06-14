// function changeText(){
//     document.getElementById("title").innerHTML=
//     "Dom changing";
// }

// function showName(){
//     let name = document.getElementById("nameinput").value;
//     document.getElementById("output").innerHTML=name;
// }
function addTask(){
    let task = document.getElementById("task").value;
    let li =document.createElement("li");
    li.innerHTML=task;
    document.getElementById("list").appendChild(li);
}