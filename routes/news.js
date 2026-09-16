const express = require("express");
const router = express.Router();

// News & Events list
router.get("/", (req, res) => {
    res.render("news/index", {
        title: "News & Events"
    });
});

// News details
router.get("/:id", (req, res) => {
    res.render("news/details", {
        title: "News Details",
        newsId: req.params.id
    });
});

module.exports = router;