const express = require("express");
const path = require("path");

require("dotenv").config();

const app = express();

// view engine and middleware setup

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// routes setup

app.use("/", require("./routes/index"));
app.use("/about", require("./routes/about"));
app.use("/notices", require("./routes/notices"));
app.use("/services", require("./routes/services"));
app.use("/wards", require("./routes/wards"));
app.use("/downloads", require("./routes/downloads"));
app.use("/news", require("./routes/news"));
app.use("/gallery", require("./routes/gallery"));
app.use("/contact", require("./routes/contact"));
app.use("/employees", require("./routes/employees"));
app.use("/admin", require("./routes/admin"));

app.use((req, res) => {

    res.status(404).render("404", {
        title: "Page Not Found"
    });

});

// server setup

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
