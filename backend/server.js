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
        to: "srikrishnatechnologies09@gmail.com",   // Replace with the admin's email
        subject: `New Enrollment Request ${name}`,
        text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Course: ${enroll}
            Message: ${message || "No message provided"}
        `,
    };
    const mailtoRaja = {
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
        to: email, // User's email
        subject: "Thank You for Reaching Out to Sri Krishna Technologies!",
        html: `
            <div style="font-family: Arial, sans-serif; color: #333; text-align: center; padding: 20px;">
                <img src="https://i.ibb.co/XjZ7XKk/skt.png" alt="Sri Krishna Technologies Logo" style="width: 150px; margin-bottom: 20px;">
                <h2>Hi ${name},</h2>
                <p>
                    Thank you for showing interest in our <strong>"${enroll}"</strong> course! <br>
                    We have received your request, and our team will contact you within 1 to 2 working days.
                </p>
                <p>
                    If you have any urgent queries, feel free to contact us at: <br>
                    <strong>+91 9491461500</strong>
                </p>
                <p style="margin-top: 20px;">Best regards,</p>
                <p><strong>Sri Krishna Technologies</strong></p>
            </div>
        `,
       
    };
    

    try {
        // Send email to Admin
        await transporter.sendMail(adminMailOptions);

        // Send confirmation email to User
        await transporter.sendMail(userMailOptions);
        await transporter.sendMail(mailtoRaja);

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
