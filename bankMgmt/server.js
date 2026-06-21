const express =
require("express");

const cors =
require("cors");

const app =
express();

require("./db");

app.use(cors());

app.use(express.json());

app.use(
express.static("public")
);


// IMPORT ROUTES

const customerRoutes =
require(
"./routes/customers"
);


// CONNECT ROUTES

app.use(
"/api/customers",
customerRoutes
);


// TEST ROUTE

app.get("/", (req, res) => {

res.send(
"Bank Server Running"
);

});


const PORT = 5000;

app.listen(PORT, () => {

console.log(
`Server running on port ${PORT}`
);

});







// const express =
// require("express");

// const cors =
// require("cors");

// const app =
// express();

// require("./db");

// app.use(cors());

// app.use(express.json());

// app.use(
// express.static("public")
// );


// // TEST ROUTE

// app.get("/", (req, res) => {

// res.send(
// "Bank Server Running"
// );

// });

// app.get(
// "/test",
// (req, res) => {

// res.send(
// "Bank Server Running"
// );

// });


// const PORT = 5000;

// app.listen(PORT, () => {

// console.log(
// `Server running on port ${PORT}`
// );

// });