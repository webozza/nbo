import nodemailer from "nodemailer";

export async function sendEmail(email) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-email-password",
    },
  });

  try {
    await transporter.sendMail({
      from: "your-email@gmail.com",
      to: email,
      subject: "Thank you for subscribing!",
      text: "You have successfully subscribed to our newsletter.",
    });

    console.log("Email sent successfully");
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}
