const express = require("express");
const router = express.Router();

// Ward list
router.get("/", (req, res) => {
    res.render("wards/index", {
        title: "Wards"
    });
});

// Ward details
router.get("/:id", (req, res) => {
    res.render("wards/details", {
        title: "Ward Details",
        wardId: req.params.id
    });
});

module.exports = router;