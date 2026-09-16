const express = require("express");
const router = express.Router();

// About / Introduction
router.get("/", (req, res) => {
    res.render("about/index", {
        title: "About Us"
    });
});

// Chairperson's Message
router.get("/message", (req, res) => {
    res.render("about/message", {
        title: "Chairperson's Message"
    });
});

// Municipality Profile
router.get("/profile", (req, res) => {
    res.render("about/profile", {
        title: "Municipality Profile"
    });
});

// Organizational Structure
router.get("/organization", (req, res) => {
    res.render("about/organization", {
        title: "Organizational Structure"
    });
});

module.exports = router;