const express = require("express");

const router = express.Router();


// Notice listing
router.get("/", (req, res) => {

    res.render("notices/index", {
        title: "Notices"
    });

});


// Notice details
router.get("/:id", (req, res) => {

    res.render("notices/details", {
        title: "Notice Details",
        noticeId: req.params.id
    });

});


module.exports = router;