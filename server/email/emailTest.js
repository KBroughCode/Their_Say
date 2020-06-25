// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);
const msg = {
  to: "krisbrough1987@gmail.com",
  from: "krisbroughmusic@hotmail.co.uk",
  subject: "Sending with Twilio SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>"
};
sgMail.send(msg);
