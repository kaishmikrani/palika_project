const express = require("express");
const router = express.Router();
const employeeRouter = require("./employees");
const employees = employeeRouter.employees;


// ================================
// ADMIN LOGIN
// ================================

router.get("/login", (req, res) => {
    res.render("admin/login", {
        title: "Admin Login"
    });
});


// ================================
// DASHBOARD
// ================================

router.get("/dashboard", (req, res) => {
    res.render("admin/dashboard", {
        title: "Admin Dashboard"
    });
});


// ================================
// NOTICES
// ================================

router.get("/notices", (req, res) => {
    res.render("admin/notices", {
        title: "Manage Notices"
    });
});

router.get("/notices/add", (req, res) => {
    res.render("admin/notice-form", {
        title: "Add Notice",
        mode: "add"
    });
});

router.get("/notices/edit/:id", (req, res) => {
    res.render("admin/notice-form", {
        title: "Edit Notice",
        mode: "edit",
        noticeId: req.params.id
    });
});


// ================================
// NEWS & EVENTS
// ================================

router.get("/news", (req, res) => {
    res.render("admin/news", {
        title: "Manage News & Events"
    });
});


// ADD NEWS

router.get("/news/add", (req, res) => {
    res.render("admin/news-form", {
        title: "Add News & Event",
        mode: "add"
    });
});


// EDIT NEWS

router.get("/news/edit/:id", (req, res) => {
    res.render("admin/news-form", {
        title: "Edit News & Event",
        mode: "edit",
        newsId: req.params.id
    });
});

router.get("/services", (req, res) => {
    res.render("admin/services", {
        title: "Manage Services"
    });
});

router.get("/services/add", (req, res) => {
    res.render("admin/service-form", {
        title: "Add Service",
        mode: "add"
    });
});

router.get("/services/edit/:id", (req, res) => {
    res.render("admin/service-form", {
        title: "Edit Service",
        mode: "edit",
        serviceId: req.params.id
    });
});

router.get("/wards", (req, res) => {
    res.render("admin/wards", {
        title: "Manage Wards"
    });
});

router.get("/wards/add", (req, res) => {
    res.render("admin/ward-form", {
        title: "Add Ward",
        mode: "add"
    });
});

router.get("/wards/edit/:id", (req, res) => {
    res.render("admin/ward-form", {
        title: "Edit Ward",
        mode: "edit",
        wardId: req.params.id
    });
});

// DOWNLOADS

router.get("/downloads", (req, res) => {
    res.render("admin/downloads", {
        title: "Manage Downloads"
    });
});

router.get("/downloads/add", (req, res) => {
    res.render("admin/download-form", {
        title: "Add Download",
        mode: "add"
    });
});

router.get("/downloads/edit/:id", (req, res) => {
    res.render("admin/download-form", {
        title: "Edit Download",
        mode: "edit",
        downloadId: req.params.id
    });
});

// GALLERY

router.get("/gallery", (req, res) => {
    res.render("admin/gallery", {
        title: "Manage Gallery"
    });
});

router.get("/gallery/add", (req, res) => {
    res.render("admin/gallery-form", {
        title: "Add Gallery Item",
        mode: "add"
    });
});

router.get("/gallery/edit/:id", (req, res) => {
    res.render("admin/gallery-form", {
        title: "Edit Gallery Item",
        mode: "edit",
        galleryId: req.params.id
    });
});

// SLIDER

router.get("/slider", (req, res) => {
    res.render("admin/slider", {
        title: "Manage Homepage Slider"
    });
});

router.get("/slider/add", (req, res) => {
    res.render("admin/slider-form", {
        title: "Add Slider",
        mode: "add"
    });
});

router.get("/slider/edit/:id", (req, res) => {
    res.render("admin/slider-form", {
        title: "Edit Slider",
        mode: "edit",
        sliderId: req.params.id
    });
});

router.get("/profile", (req, res) =>{
    res.render("admin/profile", {
        title: "admin profile"
    })
})

router.get("/settings", (req, res) => {
    res.render("admin/settings", {
        title: "Admin Settings"
    });
});

// Employee Management
router.get("/employees", (req, res) => {
    res.render("admin/employees", {
        title: "Manage Employees",
        employees
    });
});

router.get("/employees/add", (req, res) => {
    res.render("admin/employee-form", {
        title: "Add Employee",
        mode: "add",
        employee: {}
    });
});

router.get("/employees/edit/:id", (req, res) => {
    const employee = employees.find(
        item => item.id === Number(req.params.id)
    );

    if (!employee) {
        return res.status(404).send("Employee not found");
    }

    res.render("admin/employee-form", {
        title: "Edit Employee",
        mode: "edit",
        employeeId: req.params.id,
        employee
    });
});

router.post("/employees", (req, res) => {
    const nextId = employees.reduce(
        (highestId, employee) => Math.max(highestId, employee.id),
        0
    ) + 1;

    employees.push({
        id: nextId,
        ...employeeFromRequest(req),
        image: "/images/employee-placeholder.svg"
    });

    res.redirect("/admin/employees");
});

router.post("/employees/edit/:id", (req, res) => {
    const employee = employees.find(
        item => item.id === Number(req.params.id)
    );

    if (!employee) {
        return res.status(404).send("Employee not found");
    }

    Object.assign(employee, employeeFromRequest(req));
    res.redirect("/admin/employees");
});

function employeeFromRequest(req) {
    return {
        name: req.body.name,
        position: req.body.position,
        category: req.body.category,
        profession: req.body.profession,
        qualification: req.body.qualification || "",
        experience: req.body.experience || "",
        responsibility: req.body.responsibility,
        office: req.body.office || "Municipal Office",
        ward: req.body.ward || "Municipality Office",
        phone: req.body.phone || "",
        email: req.body.email || "",
        active: req.body.active === "on"
    };
}

module.exports = router;