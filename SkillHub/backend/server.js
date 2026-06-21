    require("dotenv").config();

    const express =
    require("express");

    const cors =
    require("cors");

    const connectDB =
    require("./config/db");

    const courseRoutes =
    require("./routes/courseRoutes");

    const contactRoutes =
    require("./routes/contactRoutes");

    const app = express();


    // DATABASE CONNECTION

    connectDB();


    // MIDDLEWARE

    app.use(cors());

    app.use(express.json());


    // TEST ROUTE

    app.get("/", (req, res) => {

    res.send(
        "SkillHub Backend Running"
    );

    });


    // ROUTES

    app.use(
    "/api/courses",
    courseRoutes
    );

    app.use(
    "/api/contact",
    contactRoutes
    );


    // SERVER

    const PORT =
    process.env.PORT || 5000;

    app.listen(
    PORT,
    () => {

        console.log(
        `Server Running on Port ${PORT}`
        );

    }
    );