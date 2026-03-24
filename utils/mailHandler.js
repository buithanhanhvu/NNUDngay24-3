const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    secure: false,
    auth: {
        user: "bab48827b56e93",
        pass: "52cf22276dbcc1",
    },
});

module.exports = {
    sendMail: async (to,url) => {
        const info = await transporter.sendMail({
            from: 'Admin@hahah.com',
            to: to,
            subject: "request resetpassword email",
            text: "click vao day de reset", // Plain-text version of the message
            html: "click vao <a href="+url+">day</a> de reset", // HTML version of the message
        });

        console.log("Message sent:", info.messageId);
    },
    sendPasswordMail: async (to, username, password) => {
        try {
            const info = await transporter.sendMail({
                from: 'Admin@hahah.com',
                to: to,
                subject: "Your Account Credentials",
                text: `Welcome ${username}! Your password is: ${password}`, // Plain-text version
                html: `<p>Welcome <b>${username}</b>!</p><p>Your password is: <b>${password}</b></p>`, // HTML version
            });
            console.log("Password email sent:", info.messageId);
        } catch (error) {
            console.error("Error sending password email:", error);
        }
    }
}