const nodemailer = require("nodemailer");
const htmlToText = require("html-to-text");
// const pug = require("pug");

// Templates
const emailWelcome = require("../templates/emails/emailWelcome");
const emailPasswordReset = require("../templates/emails/emailPasswordReset");

// new Email(user, url).sendWelcome();
module.exports = class Email {
  constructor(user, url, data) {
    this.from = `Artem Nikolaiev <${process.env.EMAIL_FROM}>`;
    this.to = user.email;
    this.user = user;
    this.firstName = user.name.split(" ")[0];
    this.url = url;
    this.data = data;
  }

  // Create Transport:
  // Prod - Sendgrid
  // Dev - MailTrap
  _createNewTransport() {
    if (process.env.NODE_ENV === "production") {
      // Sendgrid
      return nodemailer.createTransport({
        service: "SendGrid",
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD
        }
      });
    }
    // Mailtrap
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });
  }

  // Send Email
  async send(template, subject) {
    // Get instance of HTML
    const html = template(this.user, this.url, this.data);

    // Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: subject,
      text: htmlToText.fromString(html),
      html: html
    };

    // console.log(mailOptions);

    // Create Transport and Send Email
    const transport = this._createNewTransport();
    await transport.sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send(emailWelcome, "Welcome to Applify!");
  }

  async sendPasswordReset() {
    await this.send(emailPasswordReset, "Forgot your password?");
  }
};
