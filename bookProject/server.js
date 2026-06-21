// main one
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
// import route
const bookRoutes =
    require("./routes/books");
// connect route
app.use(
    "/api/books",
    bookRoutes
);
app.get("/", (req, res) => {
    res.send(
        "Library Server Running"
    );
});
const PORT = 5000;
app.listen(PORT, () => {
    console.log(
        `Server running on port ${PORT}`
    );
});




// just for simple connection
// const express =
//     require("express");
// const app =
//     express();
// require("./db");
// app.get("/", (req, res) => {
//     res.send(
//         "Server Running"
//     );
// });

// app.listen(5000, () => {
//     console.log(
//         "Server Running On Port 5000"
//     );
// });















































































// const express = require("express");
// const cors = require("cors");

// const app = express();

// require("./db");

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Library Server Running");
// });

// const PORT = 5000;

// app.listen(PORT, () => {
//     console.log(
//         `Server running on port ${PORT}`
//     );
// });