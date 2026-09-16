const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("downloads/index", {
        title: "Downloads"
    });
});

module.exports = router;