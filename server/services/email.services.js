import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_LOGIN,
    pass: process.env.EMAIL_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});

export const getPasswordResetURL = (user, token) =>
  `http://localhost:3000/password/reset/${user.id}/${token}`;

// function that handles html template
export const resetPasswordTemplate = (user, url) => {
  const from = process.env.EMAIL_LOGIN;
  const to = user.email;
  const subject = "🌻 BankNow Password Reset 🌻";
  const html = `
  <p>Hey ${user.fullName || user.email},</p>
  <p>We heard that you lost your Backnow password. Sorry about that!</p>
  <p>But don’t worry! You can use the following link to reset your password:</p>
  <a href=${url}>${url}</a>
  <p>If you don’t use this link within 1 hour, it will expire.</p>
  <p>Do something outside today! </p>
  <p>–Your friends at Backwoods</p>
  `;

  return { from, to, subject, html };
};
