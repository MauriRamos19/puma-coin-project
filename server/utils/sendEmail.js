const nodemailer = require("nodemailer");

const sendEmail = async (email = "grift210@gmail.com") => {
  console.log("Aqui entra");
  var transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    secureConnection: false,
    port: 587,
    tls: {
      ciphers: "SSLv3",
    },
    auth: {
      user: "pumacoin1847@gmail.com",
      pass: "Pum4c01nms3v41",
    },
  });

  var mailOptions = {
    from: '"Our Code World " <pumacoin1847@gmail.com>',
    to: (email = "grift210@gmail.com"),
    subject: "Sending Email using Node.js[nodemailer]",
    text: "That was easy!",
    html: "<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = {
  sendEmail,
};
