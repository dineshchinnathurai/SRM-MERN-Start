// used in API and database
// stringify() - to parsing JSON data
let student = { name: "XXXX", age: 15 };
// stringify - object to json conversion
let jsonData = JSON.stringify(student);
console.log(jsonData);
// parse  - json to object conversion
let objectData = JSON.parse(jsonData); 
console.log(objectData);
