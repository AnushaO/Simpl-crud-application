const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./Routes/UserRoutes"); // Corrected the path

const app = express();

// Use the userRoutes for the "/users" route
app.use("/users", userRoutes);

// Connect to MongoDB
mongoose.connect("mongodb+srv://firstadmin:yjHs3yFffGnS4OIu@cluster0.bpjuyyg.mongodb.net/")


.then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => {
        console.log("Server is running on port 5000");
    });
})
.catch((err) => console.error(err));
