const express = require("express");
const router = express.Router();

// Photo gallery
router.get("/", (req, res) => {
    res.render("gallery/index", {
        title: "Photo Gallery"
    });
});

// Video gallery
router.get("/videos", (req, res) => {
    res.render("gallery/videos", {
        title: "Video Gallery"
    });
});

module.exports = router;