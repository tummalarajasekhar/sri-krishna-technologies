const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Root Route (Handles GET /)
app.get("/", (req, res) => {
    res.send("Welcome to the Sri Krishna Technologies backend!");
});

// Form Submission Endpoint
app.post("/submit-form", async (req, res) => {
    const { name, email, phone, enroll, message } = req.body;

    // Validate input
    if (!name || !email || !phone || !enroll) {
        return res.status(400).json({ error: "All fields are required." });
    }

    // Configure the email transporter
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "rajasekhartummala05@gmail.com", // Replace with your email
            pass: "saxz puuy tkdj kgil",   // Replace with your App Password
        },
    });

    // Email to Admin
    const adminMailOptions = {
        from: "rajasekhartummala05@gmail.com", // Replace with your email
        to: "trsr.rajasekhar@gmail.com",   // Replace with the admin's email
        subject: `New Enrollment Request ${name}`,
        text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Course: ${enroll}
            Message: ${message || "No message provided"}
        `,
    };

    // Email to User
    const userMailOptions = {
        from: "rajasekhartummala05@gmail.com", // Replace with your email
        to: email,                    // User's email
        subject: "Thank You for Reaching Out to Sri Krishna Technologies!",
        text: `
            Hi ${name},

            Thank you for showing interest in our "${enroll}" course! 
            We have received your request, and our team will contact you within 1 to 2 working days.

            If you have any urgent queries, feel free to contact us at: 1234567891.

            Best regards,
            Sri Krishna Technologies
        `,
    };

    try {
        // Send email to Admin
        await transporter.sendMail(adminMailOptions);

        // Send confirmation email to User
        await transporter.sendMail(userMailOptions);

        res.status(200).json({ message: "Form submitted successfully and confirmation email sent!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email." });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
