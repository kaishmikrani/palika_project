const express = require("express");
const router = express.Router();

// Demo employee data
// This will later come from the database.
const employees = [
    {
        id: 1,
        name: "Promod Kumar Thakur",
        position: "Chief Administrative Officer",
        category: "Administration",
        profession: "Municipality Administration",
        responsibility:
            "Overall administration, coordination of municipal departments and implementation of municipal decisions.",
        office: "Municipal Office",
        ward: "Municipality Office",
        phone: "9854039542",
        email: "info@bishnumun.gov.np",
        image: "/images/employees/chief_admin.jpg",
        qualification: "Master's Degree",
        experience: "15 Years"
    },
    {
        id: 2,
        name: "Anjay kumar Yadav",
        position: "Public Health Inspector",
        category: "Health Branch",
        profession: "General Administration",
        responsibility:
            "Handles administrative correspondence, records, coordination and day-to-day office management.",
        office: "health section",
        ward: "Municipality Office",
        phone: "9864143493",
        email: "info@bishnumun.gov.np",
        image: "/images/employees/anjay.jpg",
        qualification: "Bachelor's Degree",
        experience: "10 Years"
    },
    {
        id: 3,
        name: "dinesh kumar raut",
        position: "civil Engineer",
        category: "Engineering",
        profession: "Civil Engineering",
        responsibility:
            "Supervises municipal infrastructure projects, technical designs, estimates and construction works.",
        office: "Engineering Section",
        ward: "Municipality Office",
        phone: "9844402600",
        email: "engineer@example.com",
        image: "/images/employees/dinesh.jpg",
        qualification: "BE Civil Engineering",
        experience: "8 Years"
    },
    {
        id: 4,
        name: "Ashok kumar raut",
        position: "Branch Authorized",
        category: "Administration Branch",
        profession: "administration",
        responsibility:
            "Overall administration, coordination of municipal departments and implementation of municipal decisions.",
        office: "administration Section",
        ward: "Municipality Office",
        phone: "9866111508",
        email: "admn.bishnumun@gmail.com",
        image: "/images/employees/ashok_kumar.jpeg",
        qualification: "Bachelor's Degree",
        experience: "9 Years"
    },
    {
        id: 5,
        name: "Ravindra Kumar Yadav",
        position: "sub engineer",
        category: "technical branch",
        profession: "engineer",
        responsibility:
            "Supports engineering projects, technical assistance, training and field activities.",
        office: "Engineering Section",
        ward: "Municipality Office",
        phone: "9857035355",
        email: "engineering@example.com",
        image: "/images/employee-5.jpg",
        qualification: "engineer",
        experience: "7 Years"
    },
    {
        id: 6,
        name: "Sunil Kumar Yadav",
        position: "Information and Communication Technology Authority",
        category: "It and records",
        profession: "Information Technology",
        responsibility:
            "coordinates IT systems, digital rercords adn technology implementation within the muncipality.",
        office: "IT / Information Section",
        ward: "Municipality Office",
        phone: "9854039544",
        email: "ito.bishnumun@gmail.com",
        image: "/images/employees/sunil.jpeg",
        qualification: "Master's Degree",
        experience: "11 Years"
    },
    {
        id: 7,
        name: "Saroj Kumar yadav",
        position: "Accountant officer",
        category: "Finance and Accounts",
        profession: "Finance and Accounts",
        responsibility:
            "Manages municipal financial records, budgeting, accounting and financial reporting.",
        office: "Economic Administration Branch",
        ward: "Municipality Office",
        phone: "9800000007",
        email: "finance@example.com",
        image: "/images/employees/saroj.jpeg",
        qualification: "Diploma in Agriculture",
        experience: "6 Years"
    },
    {
        id: 8,
        name: "Rajneesh Prasad Yadav",
        position: "Sav Overseer",
        category: "IT & Records",
        profession: "Information Technology",
        responsibility:
            "Manages digital records, municipal computer systems, data entry and basic technical support.",
        office: "Technical Branch",
        ward: "Municipality Office",
        phone: "9864009705",
        email: "yrajneesh@gmail.com",
        image: "/images/employee-8.jpg",
        qualification: "Bachelor's Degree",
        experience: "5 Years"
    },
    {
        id: 9,
        name: "Narendra Kumar Ram",
        position: "Computer Authorized",
        category: "Engineering",
        profession: "computer engineer",
        responsibility:
            "supports engineering",
        office: "Administration Branch",
        ward: "Municipality Office",
        phone: "9800000009",
        email: "subengineer@example.com",
        image: "/images/employees/narendra.jpg",
        qualification: "Diploma in computer Engineering",
        experience: "5 Years"
    },
    {
        id: 10,
        name: "Puja Kumari Yadav",
        position: "Office Assistant",
        category: "Administration",
        profession: "Office Administration",
        responsibility:
            "Assists with office documentation, citizen support, correspondence and general administrative activities.",
        office: "Administration Section",
        ward: "Municipality Office",
        phone: "9800000010",
        email: "office@example.com",
        image: "/images/employee-10.jpg",
        qualification: "Bachelor's Degree",
        experience: "4 Years"
    },
    {
        id: 11,
        name: "MOhammad Ajad Mikrani",
        position: "Education Branch Head",
        category: "Education",
        profession: "office administration",
        responsibility:
            "Oversees educational programs, school coordination, and  edicational initiatives within the municipality.",
        office: "Education Branch",
        ward: "Municipality Office",
        phone: "9864064664",
        email: "ito.bishnumun@gmail.com",
        image: "/images/employees/amjad.jpeg",
        qualification: "Bachelor's Degree",
        experience: "4 Years"
    }
];

// Employees listing
router.get("/", (req, res) => {
    res.render("employees/index", {
        title: "Employees",
        employees
    });
});

// Employee details
router.get("/:id", (req, res) => {
    const employee = employees.find(
        item => item.id === Number(req.params.id)
    );
    if (!employee) {
        return res.status(404).send("Employee not found");
    }

    res.render("employees/details", {
        title: employee.name,
        employee
    });
});

module.exports = router;
module.exports.employees = employees;