const express = require("express");
const router = express.Router();

// Services list
router.get("/", (req, res) => {
    res.render("services/index", {
        title: "Citizen Services"
    });
});

// Service details
router.get("/:id", (req, res) => {
    res.render("services/details", {
        title: "Service Details",
        serviceId: req.params.id
    });
});

module.exports = router;